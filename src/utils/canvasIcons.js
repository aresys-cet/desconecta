// Canvas SVG Icon Renderer & Cache
// Generates and caches SVG Image objects for high-performance canvas drawing

export const CANVAS_SVG_DATA = {
  trees: '<path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"/>',
  bookopen: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  wind: '<path d="M17.7 7.7A2.5 2.5 0 1 1 20 12H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/><path d="M8.7 4.7A2 2 0 1 1 10 8H2"/>',
  pentool: '<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="12" cy="12" r="1.5"/>',
  coffee: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  sprout: '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
  dices: '<rect width="11" height="11" x="2.5" y="10.5" rx="2"/><rect width="11" height="11" x="10.5" y="2.5" rx="2"/><circle cx="8" cy="16" r="1" fill="#ffffff"/><circle cx="16" cy="8" r="1" fill="#ffffff"/>',
  bike: '<circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>',
  sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
  puzzle: '<path d="M19.439 7.85c-.049-.955-.24-1.88-.567-2.75A9 9 0 0 0 16.15 2.56c-.87-.327-1.795-.518-2.75-.567"/><circle cx="12" cy="12" r="3"/>',
  sunset: '<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  utensils: '<path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"/><path d="M15 11v11"/><path d="M5 2v4a3 3 0 0 0 3 3v13"/><path d="M9 2v4"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  palette: '<circle cx="13.5" cy="6.5" r=".7" fill="#ffffff"/><circle cx="17.5" cy="10.5" r=".7" fill="#ffffff"/><circle cx="8.5" cy="7.5" r=".7" fill="#ffffff"/><circle cx="6.5" cy="12.5" r=".7" fill="#ffffff"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>'
};

const EMOJI_MAP = {
  "🌱": "sprout",
  "🌿": "leaf",
  "🌲": "trees",
  "🎨": "palette",
  "🧘": "heart",
  "🧘‍♂️": "activity",
  "🤝": "users",
  "🏃": "activity",
  "📖": "bookopen",
  "📚": "bookopen",
  "🫁": "wind",
  "✏️": "pentool",
  "☕": "coffee",
  "📓": "bookopen",
  "🪴": "sprout",
  "🍵": "coffee",
  "🎲": "dices",
  "🚲": "bike",
  "🧹": "sparkles",
  "🧩": "puzzle",
  "🌅": "sunset",
  "✉️": "mail",
  "🍳": "utensils",
  "💤": "moon",
  "💃": "music",
  "🎡": "dices",
  "🔥": "flame",
  "⭐": "sparkles",
  "⏳": "clock",
  "✅": "checkcircle2",
  "🏆": "trophy",
  "💡": "lightbulb",
  "🎯": "target",
  "⏱️": "clock",
  "🏡": "home",
  "📊": "barchart3",
  "👤": "user",
  "🚪": "logout",
  "🔊": "volume2",
  "🔇": "volumex",
  "📵": "phoneoff",
  "✨": "sparkles",
  "🚀": "rocket",
  "🌸": "flower2",
  "🦊": "heart",
  "👑": "crown"
};

const canvasImageCache = new Map();

/**
 * Returns a cached, pre-rendered Image object for canvas drawing
 */
export function getCanvasIconImage(iconNameOrEmoji, color = "#ffffff", onReady) {
  let key = "sprout";
  if (EMOJI_MAP[iconNameOrEmoji]) {
    key = EMOJI_MAP[iconNameOrEmoji];
  } else if (iconNameOrEmoji) {
    key = String(iconNameOrEmoji).toLowerCase().replace(/[-_\s]/g, "");
  }

  const svgInner = CANVAS_SVG_DATA[key] || CANVAS_SVG_DATA["sprout"];
  const cacheKey = `${key}_${color}`;

  if (canvasImageCache.has(cacheKey)) {
    return canvasImageCache.get(cacheKey);
  }

  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">${svgInner}</svg>`;
  const img = new Image();
  img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;

  if (onReady) {
    img.onload = onReady;
  }

  canvasImageCache.set(cacheKey, img);
  return img;
}
