/**
 * detector.js — injected into the page's MAIN world via chrome.scripting.executeScript.
 * Must be fully self-contained (no outer-scope references).
 */
function detectFrameworksAndTools() {
  const w = window;
  const doc = document;

  // ── Helpers ──────────────────────────────────────────────────────────────

  function has(name) {
    try { return typeof w[name] !== 'undefined' && w[name] !== null; } catch { return false; }
  }

  function get(name) {
    try { return w[name]; } catch { return undefined; }
  }

  function el(selector) {
    try { return !!doc.querySelector(selector); } catch { return false; }
  }

  function elAttr(selector, attr) {
    try { return doc.querySelector(selector)?.getAttribute(attr) || null; } catch { return null; }
  }

  function scriptSrc(pattern) {
    try {
      return Array.from(doc.scripts).some(s => s.src && pattern.test(s.src));
    } catch { return false; }
  }

  function linkHref(pattern) {
    try {
      return Array.from(doc.querySelectorAll('link')).some(l => l.href && pattern.test(l.href));
    } catch { return false; }
  }

  function metaContent(name) {
    try {
      return doc.querySelector(`meta[name="${name}"]`)?.getAttribute('content') || '';
    } catch { return ''; }
  }

  function cssProp(prop) {
    try {
      return getComputedStyle(doc.documentElement).getPropertyValue(prop).trim() !== '';
    } catch { return false; }
  }

  const generator = metaContent('generator');

  // ── Framework detection ───────────────────────────────────────────────────

  const frameworks = [];
  const tools = [];

  function fw(id, name, category, version = null) {
    if (!frameworks.find(f => f.id === id)) {
      frameworks.push({ id, name, category, version: version || null });
    }
  }

  function tool(id, name, category) {
    if (!tools.find(t => t.id === id)) {
      tools.push({ id, name, category });
    }
  }

  // ── React ─────────────────────────────────────────────────────────────────
  const hasReactHook = has('__REACT_DEVTOOLS_GLOBAL_HOOK__');
  const hasReactGlobal = has('React');
  const hasReactRoot = el('[data-reactroot]') || el('[data-reactid]');

  if (hasReactHook || hasReactGlobal || hasReactRoot) {
    let version = null;
    try { version = w.React?.version || null; } catch {}
    if (!version) {
      try {
        const renderers = w.__REACT_DEVTOOLS_GLOBAL_HOOK__?.renderers;
        if (renderers) {
          for (const [, r] of renderers) {
            if (r.version) { version = r.version; break; }
          }
        }
      } catch {}
    }
    fw('react', 'React', 'UI Library', version);
  }

  // ── Vue ───────────────────────────────────────────────────────────────────
  if (has('Vue') || has('__VUE__') || el('[data-v-app]')) {
    let version = null;
    try {
      version = w.Vue?.version || null;
      if (!version) {
        const appEl = doc.querySelector('[data-v-app]');
        version = appEl?.__vue_app__?.version || null;
      }
    } catch {}
    fw('vue', 'Vue.js', 'UI Framework', version);
  }

  // ── Angular (v2+) ─────────────────────────────────────────────────────────
  if (has('ng') || has('getAllAngularRootElements') || el('[ng-version]')) {
    let version = elAttr('[ng-version]', 'ng-version');
    try { if (!version) version = w.ng?.VERSION?.full || null; } catch {}
    fw('angular', 'Angular', 'UI Framework', version);
  }

  // ── AngularJS (v1) ────────────────────────────────────────────────────────
  if (has('angular')) {
    try {
      const v = w.angular?.version?.full;
      if (v?.startsWith('1.')) fw('angularjs', 'AngularJS', 'UI Framework', v);
    } catch {}
  }

  // ── Svelte ────────────────────────────────────────────────────────────────
  if (has('__svelte') || scriptSrc(/svelte/i) || el('[class*="svelte-"]')) {
    fw('svelte', 'Svelte', 'UI Framework');
  }

  // ── Ember ─────────────────────────────────────────────────────────────────
  if (has('Ember') || has('Em')) {
    let version = null;
    try { version = w.Ember?.VERSION || null; } catch {}
    fw('ember', 'Ember.js', 'UI Framework', version);
  }

  // ── Backbone ─────────────────────────────────────────────────────────────
  if (has('Backbone')) {
    let version = null;
    try { version = w.Backbone?.VERSION || null; } catch {}
    fw('backbone', 'Backbone.js', 'UI Library', version);
  }

  // ── Alpine.js ─────────────────────────────────────────────────────────────
  if (has('Alpine') || el('[x-data]')) {
    let version = null;
    try { version = w.Alpine?.version || null; } catch {}
    fw('alpine', 'Alpine.js', 'UI Framework', version);
  }

  // ── Stimulus ──────────────────────────────────────────────────────────────
  if (has('Stimulus') || el('[data-controller]')) {
    fw('stimulus', 'Stimulus', 'UI Framework');
  }

  // ── Lit ───────────────────────────────────────────────────────────────────
  if (has('litHtmlVersions') || has('litElementVersions') || has('reactiveElementVersions')) {
    fw('lit', 'Lit', 'UI Library');
  }

  // ── Solid.js ─────────────────────────────────────────────────────────────
  if (has('_$HY') || el('[data-hk]') && scriptSrc(/solid[-.]?js/i)) {
    fw('solid', 'Solid.js', 'UI Library');
  }

  // ── Preact ────────────────────────────────────────────────────────────────
  if (has('preact') || scriptSrc(/preact/i)) {
    let version = null;
    try { version = w.preact?.options?.__v || null; } catch {}
    fw('preact', 'Preact', 'UI Library', version);
  }

  // ── Next.js ───────────────────────────────────────────────────────────────
  if (has('__NEXT_DATA__') || el('#__NEXT_DATA__') || el('script[src*="/_next/static/"]')) {
    fw('nextjs', 'Next.js', 'Meta-Framework');
  }

  // ── Nuxt ─────────────────────────────────────────────────────────────────
  if (has('__NUXT__') || has('$nuxt') || el('#__nuxt') || el('script[src*="/_nuxt/"]')) {
    fw('nuxt', 'Nuxt.js', 'Meta-Framework');
  }

  // ── Gatsby ────────────────────────────────────────────────────────────────
  if (has('___gatsby') || el('#gatsby-focus-wrapper') || el('script[src*="/gatsby-"]')) {
    fw('gatsby', 'Gatsby', 'Meta-Framework');
  }

  // ── Remix ─────────────────────────────────────────────────────────────────
  if (has('__remixContext') || has('__remixRouteModules') || has('__remixManifest')) {
    fw('remix', 'Remix', 'Meta-Framework');
  }

  // ── Astro ─────────────────────────────────────────────────────────────────
  if (el('astro-island') || el('astro-slot') || el('[data-astro-transition-scope]') ||
      scriptSrc(/astro/i) || el('meta[name="generator"][content*="Astro"]')) {
    fw('astro', 'Astro', 'Meta-Framework');
  }

  // ── SvelteKit ─────────────────────────────────────────────────────────────
  if (has('__sveltekit_base_path') || has('__sveltekit_dev') ||
      el('script[src*="/.svelte-kit/"]') || el('div#svelte')) {
    fw('sveltekit', 'SvelteKit', 'Meta-Framework');
    // If SvelteKit detected, ensure base Svelte is listed too
    fw('svelte', 'Svelte', 'UI Framework');
  }

  // ── Vite ─────────────────────────────────────────────────────────────────
  if (has('__vite_is_modern_browser') || el('script[src*="/@vite/"]') ||
      el('script[type="module"][src*="@vite"]')) {
    fw('vite', 'Vite', 'Build Tool');
  }

  // ── jQuery ───────────────────────────────────────────────────────────────
  {
    let jqVersion = null;
    try { jqVersion = w.jQuery?.fn?.jquery || (w.$ && typeof w.$.fn?.jquery === 'string' ? w.$.fn.jquery : null); } catch {}
    if (jqVersion || has('jQuery')) {
      fw('jquery', 'jQuery', 'DOM Library', jqVersion);
    }
  }

  // ── Bootstrap ─────────────────────────────────────────────────────────────
  {
    let bsVersion = null;
    try { bsVersion = w.bootstrap?.Tooltip?.VERSION || w.$?.fn?.tooltip?.Constructor?.VERSION || null; } catch {}
    const hasBsAttr = el('[data-bs-toggle]') || el('[data-bs-target]');
    const hasBsScript = scriptSrc(/bootstrap/i);
    if (bsVersion || hasBsAttr || hasBsScript || has('bootstrap')) {
      fw('bootstrap', 'Bootstrap', 'CSS Framework', bsVersion);
    }
  }

  // ── Tailwind CSS ─────────────────────────────────────────────────────────
  {
    const twChecks = [
      () => cssProp('--tw-ring-offset-shadow'),
      () => cssProp('--tw-shadow'),
      () => cssProp('--tw-blur'),
      () => cssProp('--tw-ring-color'),
      () => scriptSrc(/tailwind/i),
      () => linkHref(/tailwind/i),
    ];
    if (twChecks.some(fn => { try { return fn(); } catch { return false; } })) {
      fw('tailwind', 'Tailwind CSS', 'CSS Framework');
    }
  }

  // ── Material UI / MUI ────────────────────────────────────────────────────
  if (el('[class*="MuiBox"]') || el('[class*="MuiButton"]') || el('[class*="MuiGrid"]')) {
    fw('mui', 'Material UI', 'Component Library');
  }

  // ── Ant Design ────────────────────────────────────────────────────────────
  if (el('[class*="ant-btn"]') || el('[class*="ant-layout"]') || el('[class*="ant-table"]')) {
    fw('antdesign', 'Ant Design', 'Component Library');
  }

  // ── Chakra UI ─────────────────────────────────────────────────────────────
  if (el('[class*="chakra-"]') || el('[data-theme*="chakra"]')) {
    fw('chakra', 'Chakra UI', 'Component Library');
  }

  // ── D3.js ─────────────────────────────────────────────────────────────────
  if (has('d3')) {
    let version = null;
    try { version = w.d3?.version || null; } catch {}
    fw('d3', 'D3.js', 'Visualization', version);
  }

  // ── Three.js ─────────────────────────────────────────────────────────────
  if (has('THREE')) {
    let version = null;
    try { version = w.THREE?.REVISION ? `r${w.THREE.REVISION}` : null; } catch {}
    fw('threejs', 'Three.js', '3D Library', version);
  }

  // ── GSAP ─────────────────────────────────────────────────────────────────
  if (has('gsap') || has('TweenMax') || has('TweenLite')) {
    let version = null;
    try { version = w.gsap?.version || null; } catch {}
    fw('gsap', 'GSAP', 'Animation', version);
  }

  // ── WordPress ─────────────────────────────────────────────────────────────
  if (generator.toLowerCase().includes('wordpress') || has('wp') ||
      el('link[href*="/wp-content/"]') || el('script[src*="/wp-includes/"]') ||
      el('script[src*="/wp-content/"]')) {
    const match = generator.match(/WordPress\s*([\d.]+)/i);
    fw('wordpress', 'WordPress', 'CMS', match?.[1] || null);
  }

  // ── Drupal ────────────────────────────────────────────────────────────────
  if (has('Drupal') || generator.toLowerCase().includes('drupal')) {
    const match = generator.match(/Drupal\s*([\d.]+)/i);
    fw('drupal', 'Drupal', 'CMS', match?.[1] || null);
  }

  // ── Joomla ────────────────────────────────────────────────────────────────
  if (generator.toLowerCase().includes('joomla') || el('script[src*="/media/jui/"]')) {
    fw('joomla', 'Joomla', 'CMS');
  }

  // ── Shopify ───────────────────────────────────────────────────────────────
  if (has('Shopify') || has('ShopifyAnalytics') || el('script[src*="cdn.shopify.com"]')) {
    fw('shopify', 'Shopify', 'E-commerce');
  }

  // ── WooCommerce (on top of WordPress) ─────────────────────────────────────
  if (has('wc_order_attribute_terms_nonce') || el('body.woocommerce') ||
      el('script[src*="woocommerce"]') || el('[class*="woocommerce"]')) {
    fw('woocommerce', 'WooCommerce', 'E-commerce');
  }

  // ── Webflow ───────────────────────────────────────────────────────────────
  if (has('Webflow') || el('[data-wf-site]') || el('html[data-wf-page]') ||
      el('script[src*="webflow.com"]')) {
    fw('webflow', 'Webflow', 'No-code Platform');
  }

  // ── Wix ───────────────────────────────────────────────────────────────────
  if (has('wixBiSession') || el('script[src*="static.parastorage.com"]') ||
      generator.toLowerCase().includes('wix')) {
    fw('wix', 'Wix', 'No-code Platform');
  }

  // ── Squarespace ───────────────────────────────────────────────────────────
  if ((has('Static') && has('SQUARESPACE_ROLLUPS')) || generator.toLowerCase().includes('squarespace') ||
      el('script[src*="squarespace.com"]')) {
    fw('squarespace', 'Squarespace', 'No-code Platform');
  }

  // ── Framer ────────────────────────────────────────────────────────────────
  if (el('meta[name="generator"][content*="Framer"]') || el('[data-framer-component-type]') ||
      el('script[src*="framer.com"]')) {
    fw('framer', 'Framer', 'No-code Platform');
  }

  // ── ──────────────────────────────────────────────────────────────────────
  // Tools & Integrations
  // ── ──────────────────────────────────────────────────────────────────────

  // Google Analytics (GA4 / Universal)
  if (has('gtag') || scriptSrc(/googletagmanager\.com\/gtag/)) {
    tool('ga4', 'Google Analytics 4', 'Analytics');
  }
  if (has('ga') && typeof get('ga') === 'function' && !has('gtag')) {
    tool('ua', 'Google Analytics (UA)', 'Analytics');
  }

  // Google Tag Manager
  if (has('dataLayer') && scriptSrc(/googletagmanager\.com\/gtm/)) {
    tool('gtm', 'Google Tag Manager', 'Tag Management');
  }

  // Meta / Facebook Pixel
  if (has('fbq') || has('_fbq')) {
    tool('fb-pixel', 'Meta Pixel', 'Advertising');
  }

  // Segment
  if (has('analytics') && !!get('analytics')?.Integrations) {
    tool('segment', 'Segment', 'Analytics');
  }

  // Mixpanel
  if (has('mixpanel') && typeof get('mixpanel')?.track === 'function') {
    tool('mixpanel', 'Mixpanel', 'Analytics');
  }

  // Amplitude
  if (has('amplitude') || has('amplitudeInstance')) {
    tool('amplitude', 'Amplitude', 'Analytics');
  }

  // Hotjar
  if (has('hj') || has('_hjSettings') || has('hjSiteSettings')) {
    tool('hotjar', 'Hotjar', 'Analytics');
  }

  // FullStory
  if ((has('FS') && typeof get('FS')?.identify === 'function') || has('_fs_debug')) {
    tool('fullstory', 'FullStory', 'Analytics');
  }

  // Microsoft Clarity
  if (has('clarity') || scriptSrc(/clarity\.ms/)) {
    tool('clarity', 'MS Clarity', 'Analytics');
  }

  // PostHog
  if (has('posthog')) {
    tool('posthog', 'PostHog', 'Analytics');
  }

  // Plausible
  if (scriptSrc(/plausible\.io/)) {
    tool('plausible', 'Plausible', 'Analytics');
  }

  // HubSpot
  if (has('hbspt') || has('_hsq') || el('script[src*="hs-scripts.com"]') ||
      el('script[src*="hubspot.com"]')) {
    tool('hubspot', 'HubSpot', 'Marketing');
  }

  // Marketo
  if (has('Munchkin') || el('script[src*="munchkin.marketo"]')) {
    tool('marketo', 'Marketo', 'Marketing');
  }

  // Salesforce Pardot
  if (has('piAId') || el('script[src*="pardot.com"]')) {
    tool('pardot', 'Pardot', 'Marketing');
  }

  // Intercom
  if (has('Intercom') || has('intercomSettings')) {
    tool('intercom', 'Intercom', 'Support');
  }

  // Zendesk
  if (has('zE') || has('zESettings') || has('$zopim')) {
    tool('zendesk', 'Zendesk', 'Support');
  }

  // Drift
  if (has('drift') || has('driftt')) {
    tool('drift', 'Drift', 'Support');
  }

  // Crisp
  if (has('$crisp') || has('CRISP_WEBSITE_ID')) {
    tool('crisp', 'Crisp', 'Support');
  }

  // Freshdesk / Freshchat
  if (has('fcWidget') || has('FreshworksWidget')) {
    tool('freshdesk', 'Freshchat', 'Support');
  }

  // Stripe
  if (has('Stripe') || el('script[src*="js.stripe.com"]')) {
    tool('stripe', 'Stripe', 'Payments');
  }

  // PayPal
  if (has('paypal') || el('script[src*="paypal.com"]')) {
    tool('paypal', 'PayPal', 'Payments');
  }

  // Braintree
  if (has('braintree') || el('script[src*="braintreegateway.com"]')) {
    tool('braintree', 'Braintree', 'Payments');
  }

  // Sentry
  if (has('Sentry') || has('__Sentry__') || scriptSrc(/sentry\.io|browser\.sentry-cdn/)) {
    tool('sentry', 'Sentry', 'Monitoring');
  }

  // Datadog RUM
  if (has('DD_RUM') || has('DD_LOGS') || scriptSrc(/datadoghq\.com/)) {
    tool('datadog', 'Datadog RUM', 'Monitoring');
  }

  // LogRocket
  if (has('LogRocket')) {
    tool('logrocket', 'LogRocket', 'Monitoring');
  }

  // Bugsnag
  if (has('Bugsnag') || scriptSrc(/bugsnag/i)) {
    tool('bugsnag', 'Bugsnag', 'Monitoring');
  }

  // Google reCAPTCHA
  if (has('grecaptcha') || el('script[src*="recaptcha"]')) {
    tool('recaptcha', 'reCAPTCHA', 'Security');
  }

  // Cloudflare Turnstile / Bot Protection
  if (has('turnstile') || el('script[src*="challenges.cloudflare.com"]') ||
      el('[data-sitekey]') && el('script[src*="cloudflare"]')) {
    tool('cf-turnstile', 'CF Turnstile', 'Security');
  }

  // Auth0
  if (has('auth0') || scriptSrc(/auth0\.(com|js)/)) {
    tool('auth0', 'Auth0', 'Auth');
  }

  // Firebase
  if (has('firebase') || has('__FIREBASE_DEFAULTS__') || scriptSrc(/firebase/)) {
    tool('firebase', 'Firebase', 'Backend');
  }

  // Supabase
  if (has('supabase') || scriptSrc(/supabase/)) {
    tool('supabase', 'Supabase', 'Backend');
  }

  // AWS Amplify
  if (has('aws_amplify') || has('Amplify')) {
    tool('amplify', 'AWS Amplify', 'Backend');
  }

  // Google Fonts
  if (linkHref(/fonts\.googleapis\.com/) || linkHref(/fonts\.gstatic\.com/)) {
    tool('google-fonts', 'Google Fonts', 'Fonts');
  }

  // Adobe Fonts / Typekit
  if (has('Typekit') || el('script[src*="use.typekit.net"]') || el('link[href*="typekit.net"]')) {
    tool('adobe-fonts', 'Adobe Fonts', 'Fonts');
  }

  // Cloudinary
  if (el('img[src*="res.cloudinary.com"]') || el('img[src*="cloudinary.com"]')) {
    tool('cloudinary', 'Cloudinary', 'Media');
  }

  // imgix
  if (el('img[src*=".imgix.net"]')) {
    tool('imgix', 'imgix', 'Media');
  }

  // Contentful
  if (has('contentful') || scriptSrc(/contentful/)) {
    tool('contentful', 'Contentful', 'CMS');
  }

  // Sanity
  if (has('__sanity') || scriptSrc(/sanity\.io/)) {
    tool('sanity', 'Sanity', 'CMS');
  }

  return { frameworks, tools };
}
