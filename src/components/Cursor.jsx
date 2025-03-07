import { useEffect, useRef } from "react";

const Cursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const particles = [];
    const colors = [
      "#FFA500",
      "#FF8C00",
      "#FF7F50",
      "#FF6347",
      "#FF4500",
      "#FF5722",
      "#FF6F00",
      "#FF7300",
      "#FF9500",
    ];

    const random = (min, max) => Math.random() * (max - min) + min;

    const createParticle = (x, y) => {
      const particle = {
        x,
        y,
        size: random(5, 10),
        color: colors[Math.floor(random(0, colors.length))],
        speedX: random(-1, 1),
        speedY: random(-1, 1),
        opacity: 1,
      };
      particles.push(particle);
    };

    const updateParticles = () => {
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.opacity -= 0.01;
        if (particle.opacity <= 0) {
          particles.splice(index, 1);
        }
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      createParticle(e.clientX - rect.left, e.clientY - rect.top);
    };

    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "10";

    window.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="body-cursor">
      <div className="card-cursor">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default Cursor;
