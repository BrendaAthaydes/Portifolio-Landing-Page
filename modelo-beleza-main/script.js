document.addEventListener("DOMContentLoaded", () => {
  // === CANVAS HERO ===
  const canvas = document.getElementById("hero-canvas");
  const ctx = canvas.getContext("2d");

  let width, height;
  const orbs = [];

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = document.querySelector(".hero").offsetHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  const colors = [
    'rgb(255, 230, 160)',   // dourado perolado
    'rgb(255, 217, 0)',    // dourado intenso
    'rgb(223, 200, 125)',   // dourado elegante
    'rgb(255, 240, 245)',   // rosé claro quase branco
    'rgb(179, 76, 109)',    // rosa médio
    'rgb(135, 35, 67)',     // rosa escuro
    'rgb(255, 215, 160)'    // brilho cobre suave
  ];

  const totalOrbs = 100;
  for (let i = 0; i < totalOrbs; i++) {
    const radius = Math.random() * 40 + 20;
    orbs.push({
      x: width / 2,
      y: height / 2,
      angle: Math.random() * Math.PI * 2,
      radius,
      size: Math.random() * 1.5 + 0.6,
      speed: Math.random() * 0.01 + 0.001,
      offsetX: Math.random() * width,
      offsetY: Math.random() * height,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    orbs.forEach(orb => {
      orb.angle += orb.speed;

      const x = orb.offsetX + Math.cos(orb.angle) * orb.radius;
      const y = orb.offsetY + Math.sin(orb.angle) * orb.radius;

      ctx.beginPath();
      ctx.arc(x, y, orb.size, 0, Math.PI * 2);
      ctx.fillStyle = orb.color;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();

  // === LIGHTBOX GALERIA ===
  const galleryImages = document.querySelectorAll('.galeria-grid img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.classList.add('lightbox-overlay');

      const fullImg = document.createElement('img');
      fullImg.src = img.src;
      overlay.appendChild(fullImg);

      document.body.appendChild(overlay);

      overlay.addEventListener('click', () => {
        overlay.remove();
      });
    });
  });
});
