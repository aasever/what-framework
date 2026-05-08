// ─── Framework icon SVGs ──────────────────────────────────────────────────────
// Each icon is a self-contained SVG string rendered inside a 38×38 icon wrapper.

const ICONS = {
  react: {
    color: '#61DAFB',
    bg: '#1a2e35',
    svg: `<svg viewBox="-11.5 -10.23 23 20.46" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" stroke-width="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>`,
  },

  vue: {
    color: '#41B883',
    bg: '#162618',
    svg: `<svg viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg">
      <path fill="#41B883" d="M161.1 0L130.9 52.4 100.6 0H0l130.9 226.7L261.7 0z"/>
      <path fill="#35495E" d="M161.1 0L130.9 52.4 100.6 0H52.3l78.6 136L209.4 0z"/>
    </svg>`,
  },

  angular: {
    color: '#DD0031',
    bg: '#2a0810',
    svg: `<svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
      <path fill="#DD0031" d="M125 30L32 63l14 123 79 44 79-44 14-123z"/>
      <path fill="#C3002F" d="M125 30v200l79-44 14-123z"/>
      <path fill="white" d="M125 52L67 183h22l12-29h49l12 29h22L125 52zm17 83H108l17-41 17 41z"/>
    </svg>`,
  },

  angularjs: {
    color: '#E23237',
    bg: '#2a0810',
    svg: `<svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
      <path fill="#E23237" d="M125 30L32 63l14 123 79 44 79-44 14-123z"/>
      <path fill="#B52E31" d="M125 30v200l79-44 14-123z"/>
      <path fill="white" d="M125 52L67 183h22l12-29h49l12 29h22L125 52zm17 83H108l17-41 17 41z"/>
    </svg>`,
  },

  svelte: {
    color: '#FF3E00',
    bg: '#2a1000',
    svg: `<svg viewBox="0 0 103 124" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FF3E00" d="M94.1 17.6C84 2.8 64.3-1.8 49.5 7.2L20.7 24.1C13.4 28.4 8.4 35.5 7 43.6c-1.2 6.7-.1 13.6 3.1 19.7C7 67 5.1 71.2 4.9 75.6c-.3 8.2 4.2 15.9 11.6 20l28.8 16.9c14.8 9 34.5 4.4 44.6-10.4 3-4.5 5-9.7 5.6-15.1 3.1-4.3 5-9.4 5.4-14.7 1.2-6.7.1-13.6-3.1-19.7 3.1-3.7 5-8.2 5.2-12.6.4-8.2-4.1-15.9-11.5-20z"/>
      <path fill="white" d="M45.7 106.7c-5.9 1.7-12.2-.5-15.8-5.4a14.3 14.3 0 0 1-2.5-10.8c.2-.9.5-1.9.9-2.8l.3-.8.7.5c1.7 1.3 3.7 2.4 5.7 3.1l.5.2-.1.5a4.3 4.3 0 0 0 .6 3.3c.8 1.1 2.1 1.7 3.5 1.6.4-.1.8-.2 1.1-.3l22.7-14.4c.7-.4 1.1-1 1.2-1.8.1-.7-.1-1.5-.6-2-.8-1.1-2.1-1.7-3.5-1.6-.4.1-.8.2-1.1.3l-8.7 5.5c-1.4.9-3 1.3-4.6 1.3-5.9 0-10.7-4.8-10.7-10.7 0-3.5 1.7-6.8 4.5-8.8l22.7-14.4c1.4-.9 3-1.4 4.7-1.4 5.9 0 10.7 4.8 10.7 10.7 0 .4 0 .8-.1 1.2.2-.1.5-.1.7-.2 1.7-1.3 3.7-2.4 5.7-3.1l.5-.2.1.5c.4 1.7.6 3.4.5 5.1-.2 8.9-6.4 16.6-15 18.9L45.7 106.7z"/>
    </svg>`,
  },

  sveltekit: {
    color: '#FF3E00',
    bg: '#2a1000',
    svg: `<svg viewBox="0 0 103 124" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FF3E00" d="M94.1 17.6C84 2.8 64.3-1.8 49.5 7.2L20.7 24.1C13.4 28.4 8.4 35.5 7 43.6c-1.2 6.7-.1 13.6 3.1 19.7C7 67 5.1 71.2 4.9 75.6c-.3 8.2 4.2 15.9 11.6 20l28.8 16.9c14.8 9 34.5 4.4 44.6-10.4 3-4.5 5-9.7 5.6-15.1 3.1-4.3 5-9.4 5.4-14.7 1.2-6.7.1-13.6-3.1-19.7 3.1-3.7 5-8.2 5.2-12.6.4-8.2-4.1-15.9-11.5-20z"/>
      <path fill="white" d="M45.7 106.7c-5.9 1.7-12.2-.5-15.8-5.4a14.3 14.3 0 0 1-2.5-10.8c.2-.9.5-1.9.9-2.8l.3-.8.7.5c1.7 1.3 3.7 2.4 5.7 3.1l.5.2-.1.5a4.3 4.3 0 0 0 .6 3.3c.8 1.1 2.1 1.7 3.5 1.6.4-.1.8-.2 1.1-.3l22.7-14.4c.7-.4 1.1-1 1.2-1.8.1-.7-.1-1.5-.6-2-.8-1.1-2.1-1.7-3.5-1.6-.4.1-.8.2-1.1.3l-8.7 5.5c-1.4.9-3 1.3-4.6 1.3-5.9 0-10.7-4.8-10.7-10.7 0-3.5 1.7-6.8 4.5-8.8l22.7-14.4c1.4-.9 3-1.4 4.7-1.4 5.9 0 10.7 4.8 10.7 10.7 0 .4 0 .8-.1 1.2.2-.1.5-.1.7-.2 1.7-1.3 3.7-2.4 5.7-3.1l.5-.2.1.5c.4 1.7.6 3.4.5 5.1-.2 8.9-6.4 16.6-15 18.9L45.7 106.7z"/>
    </svg>`,
  },

  nextjs: {
    color: '#ffffff',
    bg: '#101010',
    svg: `<svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ng" x1="55.6" y1="160.7" x2="105.9" y2="60.3" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <circle cx="90" cy="90" r="90" fill="black"/>
      <path fill="white" d="M149.5 157.7L69.1 54H54v71.9h11.4V69.5l73.2 95.4a90.5 90.5 0 0 0 11-7.2z"/>
      <rect x="115.5" y="54" width="11.5" height="72" fill="url(#ng)"/>
    </svg>`,
  },

  nuxt: {
    color: '#00DC82',
    bg: '#0a2218',
    svg: `<svg viewBox="0 0 400 298" xmlns="http://www.w3.org/2000/svg">
      <path fill="#00DC82" d="M227.9 248.5H366c3.4 0 6.8-.9 9.7-2.6 3-1.7 5.4-4.2 7.1-7.2 1.7-3 2.6-6.4 2.6-9.8s-.9-6.8-2.6-9.8L284 64.2a19.7 19.7 0 0 0-7.1-7.2 19.4 19.4 0 0 0-9.7-2.6c-3.4 0-6.8.9-9.7 2.6-3 1.7-5.5 4.2-7.1 7.2l-23 40.1-43.4-75.5c-1.7-3-4.1-5.4-7.1-7.2a19.4 19.4 0 0 0-9.7-2.6c-3.4 0-6.8.9-9.7 2.6-3 1.7-5.4 4.2-7.1 7.2L15.2 219.1a19.8 19.8 0 0 0-2.6 9.8c0 3.4.9 6.8 2.6 9.8a19.8 19.8 0 0 0 7.1 7.2c3 1.7 6.3 2.6 9.7 2.6h86.2c33.8 0 58.8-14.8 76-43.8l42.1-73.2 22.3-38.8 67.1 116.5H227.9l-22.4 38.8zm-104.9 0H32l84.2-146.5 42 73L133.2 226c-11.1 15-22.8 22.5-40.2 22.5h30z"/>
    </svg>`,
  },

  gatsby: {
    color: '#663399',
    bg: '#1a0d2e',
    svg: `<svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="14" fill="#663399"/>
      <path fill="white" d="M6.2 21.8C4.1 19.7 3 17 3 14.1l11.8 11.8c-2.9-.1-5.5-1.1-7.6-3.1zm10.5 2.9L3.3 11.3C4.4 7.2 8.1 4.2 12.5 3.9L24.1 15.5c-.7 4.4-3.7 8.1-7.4 9.2zM21.3 20c.7-1.5 1.1-3.1 1.1-4.8 0-6-4.8-10.9-10.8-10.9-1.7 0-3.3.4-4.8 1.1L21.3 20z"/>
    </svg>`,
  },

  remix: {
    color: '#e8f2ff',
    bg: '#0a0a14',
    svg: `<svg viewBox="0 0 78 78" xmlns="http://www.w3.org/2000/svg">
      <path fill="white" d="M45.9 54.6c.3 2.7.4 4.7.4 5.5h-14c0-.4-.1-1-.2-1.7l-.4-3.5c-.5-4.1-1.5-5.2-4.9-5.2H14.5V39.2h13.4c4.5 0 6.5-1.4 6.5-5.4 0-3.8-2.1-5.9-6.5-5.9H14.5v-11H29c13.4 0 19.5 6 19.5 16 0 7-3.8 11.5-10.7 13.2v.2c7.2 1.4 8.1 6.1 8.1 8.3zM14.5 60.1v-8.2h13c2.9.2 3.3.6 3.6 3.3l.2 1.8c.1 1.2.3 2.2.4 3.1H14.5z"/>
    </svg>`,
  },

  astro: {
    color: '#FF5D01',
    bg: '#1e0d00',
    svg: `<svg viewBox="0 0 85 107" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FF5D01" d="M27.6 85.5c-4.4-5.1-5.8-12.4-3.6-18.8l.4-1.2L55.7 12l.7 3.2c.8 3.7 2.9 7 5.8 9.5L27.6 85.5z"/>
      <path fill="#FF5D01" d="M27.6 85.5l-3.1 3.5a20 20 0 0 0 30.8 1.5L56 90l-28.4-4.5z"/>
      <path fill="white" d="M56 90l-1-.7L56 89zM62.2 24.7l-1.2 1-1.6 1.3c.3-.2.7-.5 1-.7l1.8-1.6zM56 90l-.7-.5.7.5z"/>
      <path fill="#FF5D01" d="M60.2 27l-6.8 4.3L75.3 88c3.9-2.8 6.7-7 7.5-11.9L62.2 24.7 60.2 27z"/>
      <path fill="#FF5D01" d="M53.4 31.3l-33.6 21c6.8 5.5 16.5 6.6 24.5 2.7L60.2 27l-6.8 4.3z"/>
    </svg>`,
  },

  vite: {
    color: '#646CFF',
    bg: '#0e0e1f',
    svg: `<svg viewBox="0 0 410 404" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vg1" x1="286" y1="-14" x2="138" y2="327" gradientUnits="userSpaceOnUse">
          <stop stop-color="#41D1FF"/>
          <stop offset="1" stop-color="#BD34FE"/>
        </linearGradient>
        <linearGradient id="vg2" x1="252" y1="-11" x2="226" y2="301" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF3CAC"/>
          <stop offset=".1" stop-color="#FF6A00"/>
          <stop offset="1" stop-color="#FFD700"/>
        </linearGradient>
      </defs>
      <path fill="url(#vg1)" d="M399.6 59.5L215.4 388.4a11 11 0 0 1-19.2.1L10.4 59.7a11 11 0 0 1 10-16.2l184.6 7.6a11 11 0 0 0 .9 0L389.6 43a11 11 0 0 1 10 16.5z"/>
      <path fill="url(#vg2)" d="M292.2 1.2L156.1 29.6a5.5 5.5 0 0 0-4.4 5.3l-3.9 83.7a5.5 5.5 0 0 0 6.4 5.6l35.9-8.5a5.5 5.5 0 0 1 6.6 6.4l-7.1 40a5.5 5.5 0 0 0 6.7 6.4l22.2-6.7a5.5 5.5 0 0 1 6.7 6.5L201 278.1a3.5 3.5 0 0 0 6.2 2.1l1.4-2 49.4-201.6a5.5 5.5 0 0 0-6.6-6.6l-37 9.8a5.5 5.5 0 0 1-6.5-6.9l12.4-55.2a5.5 5.5 0 0 0-4.4-6.5l-123.9-11z" transform="translate(100)"/>
    </svg>`,
  },

  jquery: {
    color: '#0769AD',
    bg: '#021a2e',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="8" fill="#0769AD"/>
      <text x="50%" y="38" dominant-baseline="middle" text-anchor="middle" font-family="Georgia,serif" font-weight="bold" font-style="italic" font-size="20" fill="white">jQuery</text>
    </svg>`,
  },

  bootstrap: {
    color: '#7952B3',
    bg: '#1a102e',
    svg: `<svg viewBox="0 0 118 94" xmlns="http://www.w3.org/2000/svg">
      <path fill="#7952B3" d="M24.5 0h69C106 0 118 11 118 23.5v47C118 83 106 94 93.5 94h-69C12 94 0 83 0 70.5v-47C0 11 12 0 24.5 0z"/>
      <path fill="white" d="M33.7 74V20h24.5c5 0 9 1.2 12 3.5 3 2.3 4.4 5.5 4.4 9.6 0 2.5-.7 4.7-2 6.5-1.4 1.8-3.2 3-5.4 3.5v.2c2.8.5 5 1.7 6.6 3.7 1.6 2 2.4 4.4 2.4 7.3 0 4.3-1.5 7.7-4.5 10.1-3 2.4-7.3 3.6-12.8 3.6H33.7zm10.3-31.9h12.5c3.2 0 5.6-.7 7.2-2 1.6-1.3 2.4-3.2 2.4-5.6 0-2.4-.8-4.3-2.3-5.5-1.5-1.3-3.8-1.9-6.9-1.9H44v15zm0 23.2h13.5c3.5 0 6.2-.7 8-2.2 1.8-1.5 2.7-3.7 2.7-6.4 0-2.8-.9-4.9-2.8-6.4-1.9-1.5-4.6-2.2-8.2-2.2H44v17.2z"/>
    </svg>`,
  },

  tailwind: {
    color: '#06B6D4',
    bg: '#041e26',
    svg: `<svg viewBox="0 0 248 31" xmlns="http://www.w3.org/2000/svg">
      <path fill="#06B6D4" d="M25.5 0C18.1 0 13 3.6 10 10.8c1.5-2 3.2-2.8 5.2-2.3 1.1.3 1.9 1.1 2.8 2 1.4 1.5 3.1 3.2 6.7 3.2 5.1 0 8.8-3.1 11.3-9.3-1.6 2-3.2 2.8-5.3 2.3-1.1-.3-2-1.1-2.8-2-1.4-1.5-3-3.2-6.7-3.2C21.2 1.5 19 2.3 17 4.2c1.5-2 3.2-2.8 5.2-2.3 1.1.3 1.9 1.1 2.8 2 1.4 1.5 3.1 3.2 6.7 3.2 5.1 0 8.8-3.1 11.3-9.3L25.5 0zM15.3 15.4c-7.4 0-12.5 3.6-15.5 10.8 1.5-2 3.2-2.8 5.2-2.3 1.1.3 1.9 1.1 2.8 2 1.4 1.5 3.1 3.2 6.7 3.2 5.1 0 8.8-3.1 11.3-9.3-1.6 2-3.2 2.8-5.3 2.3-1.1-.3-2-1.1-2.8-2-1.4-1.5-3-3.2-6.7-3.2 0 0 4.3-1.5-.7-1.5z"/>
    </svg>`,
  },

  wordpress: {
    color: '#21759B',
    bg: '#031520',
    svg: `<svg viewBox="0 0 122.5 122.5" xmlns="http://www.w3.org/2000/svg">
      <circle cx="61.25" cy="61.25" r="61.25" fill="#21759B"/>
      <path fill="white" d="M8.7 61.2c0 21 12 39.3 29.5 48.4L12.6 38.4A52.5 52.5 0 0 0 8.7 61.2zm88.6-2.6c0-6.6-2.4-11.1-4.4-14.7-2.7-4.4-5.3-8.1-5.3-12.5 0-4.9 3.7-9.5 9-9.5h.7A52.5 52.5 0 0 0 61.2 8.7c-14.4 0-27.2 5.5-36.9 14.4h1.3c5.6 0 14.2-.6 14.2-.6 2.9-.2 3.2 4 .3 4.4 0 0-2.9.3-6.1.5l19.4 57.7 11.6-34.8-8.3-22.9c-2.9-.2-5.6-.5-5.6-.5-2.9-.2-2.5-4.6.3-4.4 0 0 8.8.6 14.1.6 5.6 0 14.2-.6 14.2-.6 2.9-.2 3.2 4 .3 4.4 0 0-2.9.3-6.1.5l19.2 57.2 5.3-17.7c2.3-7.4 4.1-12.7 4.1-17.3zM62.1 65.5l-15.9 46.3A52.6 52.6 0 0 0 61.2 114c5.1 0 10.1-.7 14.8-2L62.1 65.5zm45-29.7A52.5 52.5 0 0 1 114 61.2c0 16.5-6.3 31.5-16.6 42.8l19.1-55.2c3.5-8.8.7-17-9.3-23z"/>
    </svg>`,
  },

  drupal: {
    color: '#0678BE',
    bg: '#021525',
    svg: `<svg viewBox="0 0 72.16 100" xmlns="http://www.w3.org/2000/svg">
      <path fill="#0678BE" d="M48.88 8.42C42.61 5.95 35.41 0 35.41 0s.01 6.65-9.52 12.41C17.18 17.8.34 26.7.01 47.42c-.21 28.55 22.6 52.14 35.4 52.58 12.8.44 36.55-23.24 36.74-52.56.15-21.22-16.89-32.5-23.27-38.2v-.82zM19.7 72.04a.82.82 0 0 1-1.2-.07c-3.4-4.3-5.16-9.55-4.98-14.93.44-13.13 11.56-22.14 21.05-28.19l.98-.62.99.62c9.48 6.05 20.61 15.06 21.05 28.19.18 5.38-1.58 10.63-4.98 14.93a.82.82 0 0 1-1.21.07 30.11 30.11 0 0 0-4.18-3.44.82.82 0 0 1-.15-1.2c2.4-3.08 3.69-6.95 3.57-10.97-.35-10.16-9.34-17.5-15.09-21.68-5.75 4.18-14.74 11.52-15.09 21.68-.12 4.02 1.17 7.89 3.57 10.97.3.37.24.92-.14 1.2a30.07 30.07 0 0 0-4.19 3.44z"/>
    </svg>`,
  },

  shopify: {
    color: '#96BF48',
    bg: '#1a2408',
    svg: `<svg viewBox="0 0 109.5 124.5" xmlns="http://www.w3.org/2000/svg">
      <path fill="#96BF48" d="M74.7 14.8s-.5.1-1.3.4c-.8-2.2-2.2-4.2-4.6-4.2h-.2C67.5 9.8 66.4 9 65.2 9c-7.8 0-11.5 9.7-12.7 14.6-3 .9-6.2 1.9-8.7 2.7-2.7.9-2.8.9-3.1 3.5-.2 1.9-7.4 57.1-7.4 57.1L87 94.5V14.2c-.8.1-1.5.3-2.3.5l-10 .1zM65 17.6c-2 .6-4.3 1.3-6.5 2 .7-2.7 2-5.4 3.8-7.1.6 1.6 1.5 3.4 2.7 5.1zM60 11.5c.5 0 .9.1 1.3.4-2.1 1.8-3.6 5-4.3 8l-6.4 2C52.4 18.5 55.7 11.5 60 11.5zm5.6 56.1c0 .5-.4.8-1 .8-.8 0-1.8-.2-2.6-.4v.8c0 2.3-1.7 5.3-6.1 5.3-3.3 0-6.1-1.7-6.1-1.7l1.2-4s2.3 1.7 4.7 1.7c.8 0 1.1-.6 1.1-1.1 0-1.5-1.6-2.1-2.9-2.7-1.7-.7-3.7-1.8-3.7-4.9 0-4.2 3.6-6.2 6.4-6.2 2.9 0 5.2 1.2 5.2 1.2l-1.2 3.7s-1.7-1-3.6-1c-.7 0-1.5.2-1.5.9 0 1.8 3.7 2.6 5.6 4.3.5.4.5 1.7.5 2.3zm4.4-39.8V14c-.2.1-.5.1-.7.2V27.8zm0 0"/>
      <path fill="#5E8E3E" d="M89.3 14.2L87 94.5l33.5-6.5L89.3 14.2z"/>
    </svg>`,
  },

  webflow: {
    color: '#4353FF',
    bg: '#080a2a',
    svg: `<svg viewBox="0 0 192 120" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4353FF" d="M142 0s-16.4 47.1-18.7 54.9C121.4 37.5 112 0 112 0H84.3s-16.5 47.3-18.8 55.2C63.5 37.7 54 0 54 0H0l35.4 120H64s16.5-47.3 18.8-55.2c2 17.7 11.4 55.2 11.4 55.2h28.2L157.7 0H142z"/>
    </svg>`,
  },

  wix: {
    color: '#FAAD4D',
    bg: '#1f1400',
    svg: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="42" dominant-baseline="middle" text-anchor="middle" font-family="Arial Black,sans-serif" font-weight="900" font-size="48" fill="#FAAD4D">Wix</text>
    </svg>`,
  },

  squarespace: {
    color: '#aaa',
    bg: '#111',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <path fill="white" d="M46 14a14.5 14.5 0 0 0-20.4 0L8 31.6l6.3 6.3 17.7-17.7a6.5 6.5 0 0 1 9.2 9.2L23.4 47.2 17 40.9 10.7 47.2l9.7 9.7a14.5 14.5 0 0 0 20.5 0L57.5 40.5A14.5 14.5 0 0 0 46 14z"/>
      <path fill="white" d="M13 17.8L3 27.7a14.5 14.5 0 0 0 0 20.5l.5.5 6.3-6.3-.5-.5a6.5 6.5 0 0 1 0-9.2L19.2 23l-6.2-5.2z" opacity="0.6"/>
    </svg>`,
  },

  framer: {
    color: '#0055FF',
    bg: '#00082a',
    svg: `<svg viewBox="0 0 14 21" xmlns="http://www.w3.org/2000/svg">
      <path fill="#0055FF" d="M14 0v7H7L0 0zM0 7h7l7 7H7v7L0 14z"/>
    </svg>`,
  },

  ember: {
    color: '#E04E39',
    bg: '#2a0800',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="98" fill="#E04E39"/>
      <path fill="white" d="M158 80c-3 0-5.3.4-7.4 1.1C146 68 133.3 59 118.5 59c-8.3 0-15.9 2.8-21.8 7.4-5.9-13.6-19.5-23.1-35.2-23.1C39.8 43.3 23 60 23 80.7c0 .8 0 1.6.1 2.4C17.8 87 14 93 14 100c0 10.7 8.7 19.4 19.4 19.4H158c10.7 0 19.4-8.7 19.4-19.4 0-10.7-8.7-20-19.4-20z"/>
    </svg>`,
  },

  backbone: {
    color: '#0071B5',
    bg: '#001525',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="8" fill="#0071B5"/>
      <text x="50%" y="38" dominant-baseline="middle" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" font-size="10" fill="white">BB</text>
      <path fill="white" fill-opacity="0.3" d="M15 28h30v4H15zm0-8h30v4H15zm0 16h30v4H15z"/>
    </svg>`,
  },

  alpine: {
    color: '#77C1D2',
    bg: '#0a1e24',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <path fill="#77C1D2" d="M30 8L6 52h48z"/>
      <path fill="#2D3E4E" d="M30 22L18 44h24z"/>
    </svg>`,
  },

  stimulus: {
    color: '#77E8B9',
    bg: '#0a2018',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="8" fill="#1a3d2e"/>
      <text x="50%" y="38" dominant-baseline="middle" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" font-size="24" fill="#77E8B9">S</text>
    </svg>`,
  },

  lit: {
    color: '#324FFF',
    bg: '#040a2a',
    svg: `<svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#324FFF" d="M80 0L0 80v40l80-80 80 80V80zm0 120l-80-80v40L80 160l80-80v-40z"/>
      <path fill="#6a94ff" d="M80 80L0 160v40l80-80 80 80v-40z"/>
    </svg>`,
  },

  solid: {
    color: '#2C4F7C',
    bg: '#071525',
    svg: `<svg viewBox="0 0 166 155.3" xmlns="http://www.w3.org/2000/svg">
      <path fill="#76b3e1" d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l44 8 21-29z"/>
      <path fill="#518ac8" d="M163 35L96 46l11 30 41-14z"/>
      <path fill="white" d="M96 46L69 5l-3 1c-6 2-11 5-14 9l-2 3 6 64 29 7-3-1 14-42z"/>
      <path fill="#76b3e1" d="M3 120s53 39 94 30l3-1c6-2 11-5 14-9l2-3 15-26-26-5c-11-7-25-10-38-7L23 91 3 120z"/>
      <path fill="white" d="M3 120l67-11-11-30-41 14z"/>
      <path fill="#518ac8" d="M70 109l27 41 3-1c6-2 11-5 14-9l2-3-6-64-29-7 3 1-14 42z"/>
    </svg>`,
  },

  preact: {
    color: '#673AB8',
    bg: '#120a26',
    svg: `<svg viewBox="0 0 256 296" xmlns="http://www.w3.org/2000/svg">
      <path fill="#673AB8" d="M128 0L0 73.9v148.2L128 296l128-73.9V73.9zm0 32.5l96 55.4v110.8l-96 55.4-96-55.4V87.9z"/>
      <ellipse cx="128" cy="148" rx="35" ry="13" fill="none" stroke="#673AB8" stroke-width="8"/>
      <ellipse cx="128" cy="148" rx="35" ry="13" fill="none" stroke="#673AB8" stroke-width="8" transform="rotate(60 128 148)"/>
      <ellipse cx="128" cy="148" rx="35" ry="13" fill="none" stroke="#673AB8" stroke-width="8" transform="rotate(120 128 148)"/>
      <circle cx="128" cy="148" r="7" fill="#673AB8"/>
    </svg>`,
  },

  d3: {
    color: '#F68E56',
    bg: '#1f0c00',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="8" fill="#1a1a1a"/>
      <text x="50%" y="40" dominant-baseline="middle" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" font-size="22" fill="#F68E56">D3</text>
    </svg>`,
  },

  threejs: {
    color: '#aaa',
    bg: '#111',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="8" fill="#111"/>
      <path fill="white" d="M30 8L6 48h48L30 8zm0 8l18 28H12L30 16z"/>
    </svg>`,
  },

  gsap: {
    color: '#88CE02',
    bg: '#0d1800',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="8" fill="#0d1800"/>
      <text x="50%" y="38" dominant-baseline="middle" text-anchor="middle" font-family="Arial Black,sans-serif" font-weight="900" font-size="18" fill="#88CE02">GSAP</text>
    </svg>`,
  },

  mui: {
    color: '#007FFF',
    bg: '#001530',
    svg: `<svg viewBox="0 0 36 32" xmlns="http://www.w3.org/2000/svg">
      <path fill="#007FFF" d="M30 18.2v-5.7L25 9.8v5.7l-7.5-4.3-7.5 4.3V9.8L5 12.5v5.7l5 2.9v-5.7l7.5 4.3 7.5-4.3v5.7z"/>
      <path fill="#0059b2" d="M17.5 28.7L5 21.5v-5.7l12.5 7.2 12.5-7.2v5.7z"/>
    </svg>`,
  },

  antdesign: {
    color: '#1890FF',
    bg: '#001a3a',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#1890FF" d="M100 0L0 173.2h200L100 0zm0 32.1l75.6 130.9H24.4L100 32.1z"/>
      <path fill="#1890FF" d="M100 65l37.2 64.4H62.8z" opacity="0.5"/>
    </svg>`,
  },

  chakra: {
    color: '#319795',
    bg: '#041818',
    svg: `<svg viewBox="0 0 50 55" xmlns="http://www.w3.org/2000/svg">
      <path fill="#319795" d="M25.03 0L0 25.03l25.03 29.97 24.97-29.97L25.03 0zm0 8.1l16.5 16.93-16.5 19.74L8.53 25.03 25.03 8.1z"/>
    </svg>`,
  },

  joomla: {
    color: '#F44321',
    bg: '#2a0500',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="8" fill="#F44321"/>
      <text x="50%" y="38" dominant-baseline="middle" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" font-size="12" fill="white">Joomla!</text>
    </svg>`,
  },

  woocommerce: {
    color: '#96588A',
    bg: '#1a0d18',
    svg: `<svg viewBox="0 0 100 61" xmlns="http://www.w3.org/2000/svg">
      <path fill="#96588A" d="M6.7 0h86.7C97 0 100 2.9 100 6.5v35.6c0 3.6-3 6.5-6.7 6.5H57.8l3.5 12.4-14.3-12.4H6.7C3 48.6 0 45.7 0 42.1V6.5C0 2.9 3 0 6.7 0z"/>
      <path fill="white" d="M5.3 10.2c.5-.7 1.3-1.1 2.4-1.1 2.1 0 3.2 1.2 3.5 3.6l2.5 13.4 5.4-10.2c.5-.9 1.1-1.4 1.9-1.4.9 0 1.5.6 1.9 1.7L25 26.4c.2-4.9.7-8.7 1.5-11.4.3-1.1 1-1.6 1.9-1.6.8 0 1.4.3 1.8.9.4.6.6 1.2.6 1.8 0 .4-.1.8-.2 1.2-.5 1.4-.8 3.8-1 7l-.5 10.6c-.1.9-.4 1.6-.9 2.1-.5.5-1 .7-1.7.7-1 0-1.8-.6-2.4-1.7L19.3 26l-5.4 10.1c-.7 1.2-1.5 1.8-2.5 1.8-.8 0-1.5-.5-1.9-1.6l-4-13.9c-.7 1.2-1.3 3-1.9 5.4-.2.8-.7 1.2-1.5 1.2-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.9-.6-1.4 0-.3.1-.6.2-.9C2.7 22.2 3.8 16.4 5.3 10.2zm87 0c-1.5 6.2-2.6 12-3.1 17.4-.1.3-.2.6-.2.9 0 .5.2 1 .6 1.4.4.4.9.6 1.5.6.8 0 1.3-.4 1.5-1.2.6-2.4 1.2-4.2 1.9-5.4l4 13.9c.4 1.1 1.1 1.6 1.9 1.6 1 0 1.8-.6 2.5-1.8L102 27l4.8 9.9c.6 1.1 1.4 1.7 2.4 1.7.7 0 1.2-.2 1.7-.7.5-.5.8-1.2.9-2.1l.5-10.6c.2-3.2.5-5.6 1-7 .1-.4.2-.8.2-1.2 0-.6-.2-1.2-.6-1.8-.4-.6-1-.9-1.8-.9-.9 0-1.6.5-1.9 1.6-.8 2.7-1.3 6.5-1.5 11.4l-2.2-9.9c-.4-1.1-1-1.7-1.9-1.7-.8 0-1.4.5-1.9 1.4l-5.4 10.2-2.5-13.4c-.3-2.4-1.4-3.6-3.5-3.6-1.1 0-1.9.4-2.4 1.1z" transform="scale(0.48) translate(2, 4)"/>
    </svg>`,
  },
};

// ─── Tool category colours ────────────────────────────────────────────────────

const TOOL_COLORS = {
  Analytics: '#818cf8',
  'Tag Management': '#a78bfa',
  Advertising: '#fb7185',
  Marketing: '#f97316',
  Support: '#34d399',
  Payments: '#4ade80',
  Monitoring: '#facc15',
  Security: '#f472b6',
  Auth: '#c084fc',
  Backend: '#38bdf8',
  Fonts: '#e879f9',
  Media: '#2dd4bf',
  CMS: '#fb923c',
};

function toolColor(category) {
  return TOOL_COLORS[category] || '#94a3b8';
}

// ─── Fallback letter icon ─────────────────────────────────────────────────────

function letterIcon(name, color, bg) {
  const letter = name.replace(/[^a-zA-Z]/g, '')[0]?.toUpperCase() || '?';
  return {
    color,
    bg: bg || '#1a1a2e',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="10" fill="${bg || '#1a1a2e'}"/>
      <text x="50%" y="40" dominant-baseline="middle" text-anchor="middle"
        font-family="-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif"
        font-weight="700" font-size="26" fill="${color}">${letter}</text>
    </svg>`,
  };
}

function getIcon(id, name) {
  return ICONS[id] || letterIcon(name, '#6366f1', '#0e0e1f');
}

// ─── Detector function (serialised and injected into MAIN world) ──────────────

function detectFrameworksAndTools() {
  const w = window;
  const doc = document;
  function has(n) { try { return typeof w[n] !== 'undefined' && w[n] !== null; } catch { return false; } }
  function get(n) { try { return w[n]; } catch { return undefined; } }
  function el(s) { try { return !!doc.querySelector(s); } catch { return false; } }
  function elAttr(s, a) { try { return doc.querySelector(s)?.getAttribute(a) || null; } catch { return null; } }
  function scriptSrc(p) { try { return Array.from(doc.scripts).some(s => s.src && p.test(s.src)); } catch { return false; } }
  function linkHref(p) { try { return Array.from(doc.querySelectorAll('link')).some(l => l.href && p.test(l.href)); } catch { return false; } }
  function metaContent(n) { try { return doc.querySelector(`meta[name="${n}"]`)?.getAttribute('content') || ''; } catch { return ''; } }
  function cssProp(p) { try { return getComputedStyle(doc.documentElement).getPropertyValue(p).trim() !== ''; } catch { return false; } }
  const generator = metaContent('generator');
  const frameworks = [], tools = [];
  function fw(id, name, category, version = null) { if (!frameworks.find(f => f.id === id)) frameworks.push({ id, name, category, version: version || null }); }
  function tool(id, name, category) { if (!tools.find(t => t.id === id)) tools.push({ id, name, category }); }

  // ── UI Frameworks / Libraries ─────────────────────────────────────────────
  const hasReactHook = has('__REACT_DEVTOOLS_GLOBAL_HOOK__');
  if (hasReactHook || has('React') || el('[data-reactroot]') || el('[data-reactid]')) {
    let v = null;
    try { v = w.React?.version || null; } catch {}
    if (!v) { try { const r = w.__REACT_DEVTOOLS_GLOBAL_HOOK__?.renderers; if (r) for (const [, x] of r) { if (x.version) { v = x.version; break; } } } catch {} }
    fw('react', 'React', 'UI Library', v);
  }
  if (has('Vue') || has('__VUE__') || el('[data-v-app]')) {
    let v = null;
    try { v = w.Vue?.version || doc.querySelector('[data-v-app]')?.__vue_app__?.version || null; } catch {}
    fw('vue', 'Vue.js', 'UI Framework', v);
  }
  if (has('ng') || has('getAllAngularRootElements') || el('[ng-version]')) {
    let v = elAttr('[ng-version]', 'ng-version');
    try { if (!v) v = w.ng?.VERSION?.full || null; } catch {}
    fw('angular', 'Angular', 'UI Framework', v);
  }
  if (has('angular')) { try { const v = w.angular?.version?.full; if (v?.startsWith('1.')) fw('angularjs', 'AngularJS', 'UI Framework', v); } catch {} }
  if (has('Svelte') || has('__svelte') || scriptSrc(/svelte/i) || el('[class*="svelte-"]')) fw('svelte', 'Svelte', 'UI Framework');
  if (has('Ember') || has('Em')) { let v = null; try { v = w.Ember?.VERSION || null; } catch {} fw('ember', 'Ember.js', 'UI Framework', v); }
  if (has('Backbone')) { let v = null; try { v = w.Backbone?.VERSION || null; } catch {} fw('backbone', 'Backbone.js', 'UI Library', v); }
  if (has('Alpine') || el('[x-data]')) { let v = null; try { v = w.Alpine?.version || null; } catch {} fw('alpine', 'Alpine.js', 'UI Framework', v); }
  if (has('Stimulus') || el('[data-controller]')) fw('stimulus', 'Stimulus', 'UI Framework');
  if (has('litHtmlVersions') || has('litElementVersions') || has('reactiveElementVersions')) fw('lit', 'Lit', 'UI Library');
  if (has('_$HY') || (el('[data-hk]') && scriptSrc(/solid[-.]?js/i))) fw('solid', 'Solid.js', 'UI Library');
  if (has('preact') || scriptSrc(/preact/i)) { let v = null; try { v = w.preact?.version || null; } catch {} fw('preact', 'Preact', 'UI Library', v); }

  // ── Meta-frameworks ───────────────────────────────────────────────────────
  if (has('__NEXT_DATA__') || el('#__NEXT_DATA__') || el('script[src*="/_next/static/"]')) fw('nextjs', 'Next.js', 'Meta-Framework');
  if (has('__NUXT__') || has('$nuxt') || el('#__nuxt') || el('script[src*="/_nuxt/"]')) fw('nuxt', 'Nuxt.js', 'Meta-Framework');
  if (has('___gatsby') || el('#gatsby-focus-wrapper') || el('script[src*="/gatsby-"]')) fw('gatsby', 'Gatsby', 'Meta-Framework');
  if (has('__remixContext') || has('__remixRouteModules') || has('__remixManifest')) fw('remix', 'Remix', 'Meta-Framework');
  if (el('astro-island') || el('astro-slot') || el('[data-astro-transition-scope]') || scriptSrc(/astro/i) || el('meta[name="generator"][content*="Astro"]')) fw('astro', 'Astro', 'Meta-Framework');
  if (has('__sveltekit_base_path') || has('__sveltekit_dev') || el('script[src*="/.svelte-kit/"]')) { fw('sveltekit', 'SvelteKit', 'Meta-Framework'); fw('svelte', 'Svelte', 'UI Framework'); }

  // ── Build tools ───────────────────────────────────────────────────────────
  if (has('__vite_is_modern_browser') || el('script[src*="/@vite/"]') || el('script[type="module"][src*="@vite"]')) fw('vite', 'Vite', 'Build Tool');

  // ── Libraries ─────────────────────────────────────────────────────────────
  { let v = null; try { v = w.jQuery?.fn?.jquery || (w.$ && typeof w.$.fn?.jquery === 'string' ? w.$.fn.jquery : null); } catch {} if (v || has('jQuery')) fw('jquery', 'jQuery', 'DOM Library', v); }
  { let v = null; try { v = w.bootstrap?.Tooltip?.VERSION || w.$?.fn?.tooltip?.Constructor?.VERSION || null; } catch {} if (v || el('[data-bs-toggle]') || scriptSrc(/bootstrap/i) || has('bootstrap')) fw('bootstrap', 'Bootstrap', 'CSS Framework', v); }
  if ([() => cssProp('--tw-ring-offset-shadow'), () => cssProp('--tw-shadow'), () => cssProp('--tw-blur'), () => cssProp('--tw-ring-color'), () => scriptSrc(/tailwind/i), () => linkHref(/tailwind/i)].some(fn => { try { return fn(); } catch { return false; } })) fw('tailwind', 'Tailwind CSS', 'CSS Framework');
  if (el('[class*="MuiBox"]') || el('[class*="MuiButton"]') || el('[class*="MuiGrid"]')) fw('mui', 'Material UI', 'Component Library');
  if (el('[class*="ant-btn"]') || el('[class*="ant-layout"]') || el('[class*="ant-table"]')) fw('antdesign', 'Ant Design', 'Component Library');
  if (el('[class*="chakra-"]') || el('[data-theme*="chakra"]')) fw('chakra', 'Chakra UI', 'Component Library');
  if (has('d3')) { let v = null; try { v = w.d3?.version || null; } catch {} fw('d3', 'D3.js', 'Visualization', v); }
  if (has('THREE')) { let v = null; try { v = w.THREE?.REVISION ? `r${w.THREE.REVISION}` : null; } catch {} fw('threejs', 'Three.js', '3D Library', v); }
  if (has('gsap') || has('TweenMax') || has('TweenLite')) { let v = null; try { v = w.gsap?.version || null; } catch {} fw('gsap', 'GSAP', 'Animation', v); }

  // ── CMS / Platforms ───────────────────────────────────────────────────────
  if (generator.toLowerCase().includes('wordpress') || has('wp') || el('link[href*="/wp-content/"]') || el('script[src*="/wp-includes/"]') || el('script[src*="/wp-content/"]')) { const m = generator.match(/WordPress\s*([\d.]+)/i); fw('wordpress', 'WordPress', 'CMS', m?.[1] || null); }
  if (has('Drupal') || generator.toLowerCase().includes('drupal')) { const m = generator.match(/Drupal\s*([\d.]+)/i); fw('drupal', 'Drupal', 'CMS', m?.[1] || null); }
  if (generator.toLowerCase().includes('joomla') || el('script[src*="/media/jui/"]')) fw('joomla', 'Joomla', 'CMS');
  if (has('Shopify') || has('ShopifyAnalytics') || el('script[src*="cdn.shopify.com"]')) fw('shopify', 'Shopify', 'E-commerce');
  if (has('wc_order_attribute_terms_nonce') || el('body.woocommerce') || el('script[src*="woocommerce"]')) fw('woocommerce', 'WooCommerce', 'E-commerce');
  if (has('Webflow') || el('[data-wf-site]') || el('html[data-wf-page]') || el('script[src*="webflow.com"]')) fw('webflow', 'Webflow', 'No-code Platform');
  if (has('wixBiSession') || el('script[src*="static.parastorage.com"]') || generator.toLowerCase().includes('wix')) fw('wix', 'Wix', 'No-code Platform');
  if ((has('Static') && has('SQUARESPACE_ROLLUPS')) || generator.toLowerCase().includes('squarespace') || el('script[src*="squarespace.com"]')) fw('squarespace', 'Squarespace', 'No-code Platform');
  if (el('meta[name="generator"][content*="Framer"]') || el('[data-framer-component-type]') || el('script[src*="framer.com"]')) fw('framer', 'Framer', 'No-code Platform');

  // ── Analytics ─────────────────────────────────────────────────────────────
  if (has('gtag') || scriptSrc(/googletagmanager\.com\/gtag/)) tool('ga4', 'Google Analytics 4', 'Analytics');
  if (has('ga') && typeof get('ga') === 'function' && !has('gtag')) tool('ua', 'Google Analytics (UA)', 'Analytics');
  if (has('dataLayer') && scriptSrc(/googletagmanager\.com\/gtm/)) tool('gtm', 'Google Tag Manager', 'Tag Management');
  if (has('fbq') || has('_fbq')) tool('fb-pixel', 'Meta Pixel', 'Advertising');
  if (has('analytics') && !!get('analytics')?.Integrations) tool('segment', 'Segment', 'Analytics');
  if (has('mixpanel') && typeof get('mixpanel')?.track === 'function') tool('mixpanel', 'Mixpanel', 'Analytics');
  if (has('amplitude') || has('amplitudeInstance')) tool('amplitude', 'Amplitude', 'Analytics');
  if (has('hj') || has('_hjSettings') || has('hjSiteSettings')) tool('hotjar', 'Hotjar', 'Analytics');
  if ((has('FS') && typeof get('FS')?.identify === 'function') || has('_fs_debug')) tool('fullstory', 'FullStory', 'Analytics');
  if (has('clarity') || scriptSrc(/clarity\.ms/)) tool('clarity', 'MS Clarity', 'Analytics');
  if (has('posthog')) tool('posthog', 'PostHog', 'Analytics');
  if (scriptSrc(/plausible\.io/)) tool('plausible', 'Plausible', 'Analytics');

  // ── Marketing & CRM ───────────────────────────────────────────────────────
  if (has('hbspt') || has('_hsq') || el('script[src*="hs-scripts.com"]') || el('script[src*="hubspot.com"]')) tool('hubspot', 'HubSpot', 'Marketing');
  if (has('Munchkin') || el('script[src*="munchkin.marketo"]')) tool('marketo', 'Marketo', 'Marketing');
  if (has('piAId') || el('script[src*="pardot.com"]')) tool('pardot', 'Pardot', 'Marketing');

  // ── Support / Chat ────────────────────────────────────────────────────────
  if (has('Intercom') || has('intercomSettings')) tool('intercom', 'Intercom', 'Support');
  if (has('zE') || has('zESettings') || has('$zopim')) tool('zendesk', 'Zendesk', 'Support');
  if (has('drift') || has('driftt')) tool('drift', 'Drift', 'Support');
  if (has('$crisp') || has('CRISP_WEBSITE_ID')) tool('crisp', 'Crisp', 'Support');
  if (has('fcWidget') || has('FreshworksWidget')) tool('freshdesk', 'Freshchat', 'Support');

  // ── Payments ──────────────────────────────────────────────────────────────
  if (has('Stripe') || el('script[src*="js.stripe.com"]')) tool('stripe', 'Stripe', 'Payments');
  if (has('paypal') || el('script[src*="paypal.com"]')) tool('paypal', 'PayPal', 'Payments');
  if (has('braintree') || el('script[src*="braintreegateway.com"]')) tool('braintree', 'Braintree', 'Payments');

  // ── Monitoring ────────────────────────────────────────────────────────────
  if (has('Sentry') || has('__Sentry__') || scriptSrc(/sentry\.io|browser\.sentry-cdn/)) tool('sentry', 'Sentry', 'Monitoring');
  if (has('DD_RUM') || has('DD_LOGS') || scriptSrc(/datadoghq\.com/)) tool('datadog', 'Datadog RUM', 'Monitoring');
  if (has('LogRocket')) tool('logrocket', 'LogRocket', 'Monitoring');
  if (has('Bugsnag') || scriptSrc(/bugsnag/i)) tool('bugsnag', 'Bugsnag', 'Monitoring');

  // ── Security ──────────────────────────────────────────────────────────────
  if (has('grecaptcha') || el('script[src*="recaptcha"]')) tool('recaptcha', 'reCAPTCHA', 'Security');
  if (has('turnstile') || el('script[src*="challenges.cloudflare.com"]')) tool('cf-turnstile', 'CF Turnstile', 'Security');

  // ── Auth & Backend ────────────────────────────────────────────────────────
  if (has('auth0') || scriptSrc(/auth0\.(com|js)/)) tool('auth0', 'Auth0', 'Auth');
  if (has('firebase') || has('__FIREBASE_DEFAULTS__') || scriptSrc(/firebase/)) tool('firebase', 'Firebase', 'Backend');
  if (has('supabase') || scriptSrc(/supabase/)) tool('supabase', 'Supabase', 'Backend');
  if (has('aws_amplify') || has('Amplify')) tool('amplify', 'AWS Amplify', 'Backend');

  // ── Fonts & Media ─────────────────────────────────────────────────────────
  if (linkHref(/fonts\.googleapis\.com/) || linkHref(/fonts\.gstatic\.com/)) tool('google-fonts', 'Google Fonts', 'Fonts');
  if (has('Typekit') || el('script[src*="use.typekit.net"]') || el('link[href*="typekit.net"]')) tool('adobe-fonts', 'Adobe Fonts', 'Fonts');
  if (el('img[src*="res.cloudinary.com"]') || el('img[src*="cloudinary.com"]')) tool('cloudinary', 'Cloudinary', 'Media');
  if (el('img[src*=".imgix.net"]')) tool('imgix', 'imgix', 'Media');

  // ── Headless CMS ──────────────────────────────────────────────────────────
  if (has('contentful') || scriptSrc(/contentful/)) tool('contentful', 'Contentful', 'CMS');
  if (has('__sanity') || scriptSrc(/sanity\.io/)) tool('sanity', 'Sanity', 'CMS');

  return { frameworks, tools };
}

// ─── Rendering helpers ────────────────────────────────────────────────────────

function renderFrameworkCard(f) {
  const icon = getIcon(f.id, f.name);
  const card = document.createElement('div');
  card.className = 'fw-card';
  card.style.setProperty('--border-highlight', icon.color + '60');
  card.innerHTML = `
    <div class="fw-icon-wrap" style="--icon-bg: ${icon.bg}">
      ${icon.svg}
    </div>
    <div class="fw-info">
      <div class="fw-name-row">
        <span class="fw-name">${f.name}</span>
        ${f.version ? `<span class="fw-version">v${f.version}</span>` : ''}
      </div>
      <div class="fw-meta">
        <span class="fw-category">${f.category}</span>
      </div>
    </div>`;
  return card;
}

function renderToolBadge(t) {
  const color = toolColor(t.category);
  const badge = document.createElement('span');
  badge.className = 'tool-badge';
  badge.style.setProperty('--border-highlight', color + '70');
  badge.innerHTML = `<span class="tool-dot" style="background: ${color}"></span>${t.name}`;
  return badge;
}

function renderTools(tools) {
  const grouped = {};
  for (const t of tools) {
    if (!grouped[t.category]) grouped[t.category] = [];
    grouped[t.category].push(t);
  }

  const container = document.getElementById('tools-list');
  container.innerHTML = '';

  for (const [category, items] of Object.entries(grouped)) {
    const group = document.createElement('div');
    group.className = 'tool-group';
    const label = document.createElement('div');
    label.className = 'tool-group-label';
    label.textContent = category;
    const badges = document.createElement('div');
    badges.className = 'tool-badges';
    for (const t of items) badges.appendChild(renderToolBadge(t));
    group.appendChild(label);
    group.appendChild(badges);
    container.appendChild(group);
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  const loadingEl = document.getElementById('loading');
  const errorEl = document.getElementById('error');
  const errorMsg = document.getElementById('error-msg');
  const resultsEl = document.getElementById('results');
  const fwSection = document.getElementById('frameworks-section');
  const fwList = document.getElementById('frameworks-list');
  const toolsSection = document.getElementById('tools-section');
  const emptyState = document.getElementById('empty-state');
  const refreshBtn = document.getElementById('refresh-btn');
  const siteHost = document.getElementById('site-host');
  const siteFavicon = document.getElementById('site-favicon');

  async function scan() {
    loadingEl.classList.remove('hidden');
    errorEl.classList.add('hidden');
    resultsEl.classList.add('hidden');
    refreshBtn.classList.add('spinning');

    let tab;
    try {
      const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
      tab = activeTab;
    } catch (e) {
      showError('Could not access the current tab.');
      return;
    }

    if (tab?.url) {
      try {
        const url = new URL(tab.url);
        siteHost.textContent = url.hostname;
        siteFavicon.src = `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=32`;
        siteFavicon.onerror = () => { siteFavicon.style.display = 'none'; };
      } catch {}
    }

    if (!tab?.url || tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://') ||
        tab.url.startsWith('about:') || tab.url.startsWith('edge://')) {
      showError("Can't analyze browser internal pages.");
      return;
    }

    let results;
    try {
      const [{ result }] = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: detectFrameworksAndTools,
        world: 'MAIN',
      });
      results = result;
    } catch (e) {
      showError('Unable to analyze this page. The extension may not have permission.');
      return;
    }

    loadingEl.classList.add('hidden');
    refreshBtn.classList.remove('spinning');
    resultsEl.classList.remove('hidden');

    const { frameworks, tools } = results;

    if (frameworks.length === 0 && tools.length === 0) {
      fwSection.classList.add('hidden');
      toolsSection.classList.add('hidden');
      emptyState.classList.remove('hidden');
      return;
    }

    emptyState.classList.add('hidden');

    if (frameworks.length > 0) {
      fwSection.classList.remove('hidden');
      fwList.innerHTML = '';
      for (const f of frameworks) fwList.appendChild(renderFrameworkCard(f));
    } else {
      fwSection.classList.add('hidden');
    }

    if (tools.length > 0) {
      toolsSection.classList.remove('hidden');
      renderTools(tools);
    } else {
      toolsSection.classList.add('hidden');
    }
  }

  function showError(msg) {
    loadingEl.classList.add('hidden');
    refreshBtn.classList.remove('spinning');
    errorEl.classList.remove('hidden');
    errorMsg.textContent = msg;
  }

  refreshBtn.addEventListener('click', scan);
  scan();
}

document.addEventListener('DOMContentLoaded', run);
