import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ target = 100, suffix = "%", duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const value = useMotionValue(0);
  const rounded = useTransform(value, v => Math.round(v));
  const [display, setDisplay] = useState(0);

  // подписка на изменения
  useEffect(() => {
    const unsubscribe = rounded.on("change", v => setDisplay(v));
    return () => unsubscribe();
  }, [rounded]);

  // запуск анимации при появлении
  useEffect(() => {
    if (inView) {
      const controls = animate(value, target, { duration, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, value, target, duration]);

  return (
    <div ref={ref} className="relative">
      <motion.p
        className="font-jost text-red-600 text-7xl font-bold absolute mb-[40px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        +{display}{suffix}
      </motion.p>
    </div>
  );
}

export default AnimatedNumber;
