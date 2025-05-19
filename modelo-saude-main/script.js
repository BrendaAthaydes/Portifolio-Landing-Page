document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const canvas = document.getElementById("heroCanvas");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", () => {
    resizeCanvas();
    generateHexagons(); // Regenera com base no novo tamanho
  });

  resizeCanvas();

  const hexagons = [];

  function generateHexagons() {
    hexagons.length = 0;

    const exclusionWidth = 500;
    const exclusionHeight = 300;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const count = 40;

    for (let i = 0; i < count; i++) {
      let x, y;
      let tries = 0;

      do {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
        tries++;
        // Evita que caia na zona central
      } while (
        x > centerX - exclusionWidth / 2 &&
        x < centerX + exclusionWidth / 2 &&
        y > centerY - exclusionHeight / 2 &&
        y < centerY + exclusionHeight / 2 &&
        tries < 100
      );

      hexagons.push({
        x,
        y,
        size: Math.random() * 12 + 10,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.4 + 0.3,
      });
    }
  }

  generateHexagons();

  function drawHexagon(x, y, radius, opacity) {
    const angleStep = (Math.PI * 2) / 6;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = i * angleStep;
      const px = x + radius * Math.cos(angle);
      const py = y + radius * Math.sin(angle);
      if (i === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.closePath();
    ctx.strokeStyle = `rgba(212, 163, 115, ${opacity})`; // cobre translúcido
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hexagons.forEach(h => {
      drawHexagon(h.x, h.y, h.size, h.opacity);
      h.x += h.dx;
      h.y += h.dy;

      if (h.x < -20 || h.x > canvas.width + 20) h.dx *= -1;
      if (h.y < -20 || h.y > canvas.height + 20) h.dy *= -1;
    });

    requestAnimationFrame(animate);
  }

  animate();
});
