// Confetti celebration engine using pure HTML5 Canvas (zero external packages)

export function launchConfetti(duration = 2500) {
  if (typeof window === "undefined") return;

  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "999999";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const colors = ["#2d6a4f", "#52b788", "#74c69d", "#f4a261", "#e76f51", "#2a9d8f", "#e9c46a", "#9d4edd"];
  const pieces = [];
  const pieceCount = Math.min(100, Math.floor(width / 12));

  for (let i = 0; i < pieceCount; i++) {
    pieces.push({
      x: width * 0.5 + (Math.random() * 200 - 100),
      y: height * 0.4,
      w: Math.random() * 10 + 6,
      h: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 16,
      vy: Math.random() * -12 - 5,
      gravity: 0.35,
      rotation: Math.random() * 360,
      vRotation: (Math.random() - 0.5) * 12,
      opacity: 1
    });
  }

  const startTime = Date.now();

  function render() {
    const elapsed = Date.now() - startTime;
    const progress = elapsed / duration;

    ctx.clearRect(0, 0, width, height);

    pieces.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.rotation += p.vRotation;

      if (progress > 0.6) {
        p.opacity = Math.max(0, 1 - (progress - 0.6) / 0.4);
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (elapsed < duration) {
      requestAnimationFrame(render);
    } else {
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    }
  }

  requestAnimationFrame(render);
}
