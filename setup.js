#!/usr/bin/env node
/**
 * setup.js — Generates the extension's PNG toolbar icons using only Node.js builtins.
 * Run once: node setup.js
 */

const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

// ─── Minimal PNG encoder ──────────────────────────────────────────────────────

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = (c & 1) ? 0xEDB88320 ^ (c >>> 1) : (c >>> 1);
    t[i] = c;
  }
  return t;
})();

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (const b of buf) crc = CRC_TABLE[(crc ^ b) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function u32be(n) {
  return Buffer.from([(n >>> 24) & 0xFF, (n >>> 16) & 0xFF, (n >>> 8) & 0xFF, n & 0xFF]);
}

function pngChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const crc = u32be(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([u32be(data.length), typeBuf, data, crc]);
}

/** Creates a valid RGBA PNG from a pixel getter function: (x, y) => [r, g, b, a] */
function makePNG(size, getPixel) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdr = pngChunk('IHDR', Buffer.concat([
    u32be(size), u32be(size),
    Buffer.from([8, 6, 0, 0, 0]), // 8-bit RGBA, no interlace
  ]));

  // Build raw scanlines
  const raw = [];
  for (let y = 0; y < size; y++) {
    raw.push(0); // filter: None
    for (let x = 0; x < size; x++) {
      const [r, g, b, a] = getPixel(x, y);
      raw.push(r & 0xFF, g & 0xFF, b & 0xFF, a & 0xFF);
    }
  }

  const idat = pngChunk('IDAT', zlib.deflateSync(Buffer.from(raw), { level: 6 }));
  const iend = pngChunk('IEND', Buffer.alloc(0));
  return Buffer.concat([sig, ihdr, idat, iend]);
}

// ─── Icon renderer ────────────────────────────────────────────────────────────

/**
 * Draw a rounded rectangle filled with a solid colour plus a stylised "W"
 * made from four line segments. Works at any size (16, 48, 128).
 */
function drawIcon(size) {
  // Brand colours
  const BG  = [22, 22, 40];      // #161628 — deep indigo
  const FG  = [255, 255, 255];   // white strokes
  const ACC = [99, 102, 241];    // #6366f1 — accent dot

  const radius   = size * 0.18;
  const lineW    = Math.max(1.5, size * 0.075); // stroke width

  // "W" geometry — four segments
  const pad = size * 0.18;
  const top = size * 0.22;
  const bot = size * 0.82;
  const midY = size * 0.58;
  const x0 = pad,        x1 = size * 0.33,
        x2 = size * 0.5, x3 = size * 0.67,
        x4 = size - pad;

  const SEGS = [
    [x0, top, x1, bot],
    [x1, bot, x2, midY],
    [x2, midY, x3, bot],
    [x3, bot, x4, top],
  ];

  function distPtSeg(px, py, x1, y1, x2, y2) {
    const dx = x2 - x1, dy = y2 - y1;
    const len2 = dx * dx + dy * dy;
    if (len2 === 0) return Math.hypot(px - x1, py - y1);
    const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / len2));
    return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
  }

  return makePNG(size, (x, y) => {
    const cx = size / 2, cy = size / 2;
    const hw = size / 2 - radius;
    const hh = size / 2 - radius;
    const ddx = Math.max(0, Math.abs(x - cx) - hw);
    const ddy = Math.max(0, Math.abs(y - cy) - hh);
    const cornerDist = Math.hypot(ddx, ddy);

    // Outside rounded rect → transparent
    if (cornerDist > radius + 0.5) return [0, 0, 0, 0];

    // Edge alpha for smooth border
    const bgAlpha = cornerDist > radius - 0.5
      ? Math.round((radius + 0.5 - cornerDist) * 255)
      : 255;

    // Distance to nearest "W" segment
    const px = x + 0.5, py = y + 0.5;
    const minD = Math.min(...SEGS.map(([ax, ay, bx, by]) => distPtSeg(px, py, ax, ay, bx, by)));

    if (minD < lineW + 0.5) {
      // Stroke pixel — blend FG over BG
      const strokeAlpha = minD < lineW - 0.5 ? 255 : Math.round((lineW + 0.5 - minD) * 255);
      const sa = (strokeAlpha / 255) * (bgAlpha / 255) * 255;
      const r = Math.round((FG[0] * strokeAlpha + BG[0] * (255 - strokeAlpha)) / 255);
      const g = Math.round((FG[1] * strokeAlpha + BG[1] * (255 - strokeAlpha)) / 255);
      const b = Math.round((FG[2] * strokeAlpha + BG[2] * (255 - strokeAlpha)) / 255);
      return [r, g, b, Math.round(sa)];
    }

    return [...BG, bgAlpha];
  });
}

// ─── Generate ─────────────────────────────────────────────────────────────────

const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir);

for (const size of [16, 48, 128]) {
  const outPath = path.join(iconsDir, `icon${size}.png`);
  fs.writeFileSync(outPath, drawIcon(size));
  console.log(`✓  icons/icon${size}.png  (${size}×${size})`);
}

console.log('\nDone! Load the extension at chrome://extensions → Load unpacked');
