import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Basic check for touch devices / small screens
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768 && !window.matchMedia('(hover: none)').matches);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    let animationFrameId: number;

    const moveCursor = (e: MouseEvent) => {
      // Small lag using requestAnimationFrame for smooth trailing effect
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    if (isDesktop) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener('resize', checkDesktop);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      className="fixed top-0 left-0 w-3 h-3 bg-accent rounded-full pointer-events-none z-[100]"
      style={{
        transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0)`,
        opacity: 0.4,
        transition: "transform 0.1s ease-out",
      }}
    />
  );
};
