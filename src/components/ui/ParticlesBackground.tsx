import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
// 1. استيراد النوع الصحيح من المكتبة
import type { ISourceOptions } from "@tsparticles/engine"; 

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // 2. تحديد نوع الـ options بـ ISourceOptions
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { 
            enable: true, 
            mode: "grab" 
          },
          // تم تصحيح الـ Type هنا ليكون متوافق مع ISourceOptions
          resize: { enable: true }, 
        },
        modes: {
          grab: { 
            distance: 200, 
            links: { opacity: 0.5 } 
          },
        },
      },
      particles: {
        color: { value: "#3a5a40" },
        links: {
          color: "#5c4033",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          outModes: { default: "bounce" },
        },
        number: {
          density: {
            enable: true,
            // الـ area مهمة للـ density
            area: 800, 
          },
          value: 80,
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return <div className="absolute inset-0 bg-[#0a0a0a]" />;

  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Particles
        id="tsparticles_hero"
        // 3. دلوقتى نقدر نمرر الـ options مباشرة وبأمان
        options={options} 
        className="h-full w-full"
      />
    </div>
  );
};

export default ParticlesBackground;