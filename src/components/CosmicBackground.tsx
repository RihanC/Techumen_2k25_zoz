import { useEffect, useRef } from "react";

const random = (min: number, max: number) => Math.random() * (max - min) + min;

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    // Generate stars
    const numStars = 150;
    const stars = Array.from({ length: numStars }).map(() => ({
      x: random(0, canvas.width),
      y: random(0, canvas.height),
      radius: random(0.5, 2),
      speed: random(0.05, 0.2),
      alpha: random(0.3, 1),
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(0,0,50,0.3)");
      gradient.addColorStop(0.5, "rgba(50,0,80,0.3)");
      gradient.addColorStop(1, "rgba(0,0,50,0.3)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        star.alpha += (Math.random() - 0.5) * 0.02;
        if (star.alpha > 1) star.alpha = 1;
        if (star.alpha < 0.3) star.alpha = 0.3;

        // Optional subtle downward drift
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
    />
  );
}
