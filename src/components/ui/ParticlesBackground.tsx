import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // 1. تهيئة المحرك مرة واحدة فقط عند البداية
  useEffect(() => {
    let isMounted = true;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (isMounted) setInit(true);
    });
    return () => { isMounted = false; };
  }, []);

  // 2. استخدام useMemo ضروري جداً لمنع الـ Re-renders اللا نهائية
  const options = useMemo(
    () => ({
      fullScreen: { enable: false }, // مهم عشان مياخدش الشاشة كلها غصب عننا
      fpsLimit: 60, // 60 كفاية جداً عشان الأداء
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "grab" },
          resize: true,
        },
        modes: {
          push: { quantity: 4 },
          grab: { distance: 200, links: { opacity: 0.5 } },
        },
      },
      particles: {
        color: { value: "#3a5a40" }, // الزيتي الفخم بتاعك
        links: {
          color: "#5c4033", // البني
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60,
        },
        opacity: {
          value: { min: 0.1, max: 0.4 },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  // 3. منع ظهور أي شيء قبل اكتمال التهيئة
  if (!init) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Particles
        id="tsparticles_hero" // ID مميز
        options={options}
        className="w-full h-full pointer-events-none" // منع التداخل مع الروابط والزراير
      />
    </div>
  );
};

export default ParticlesBackground;