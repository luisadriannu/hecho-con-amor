import { useEffect, useState } from "react";
import "./Styles.css";
import { AnimatePresence, motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const [desktop, setDesktop] = useState(false);
  const [scrollYWindow, setScrollYWindow] = useState(false);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  useEffect(() => {
    let breakpoint = window.matchMedia("(min-width: 1024px)");

    const responsive = (e) => {
      if (e.matches) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };

    window.addEventListener("scroll", () => {
      let scrollTop = scrollY;
      if (scrollTop >= 400) {
        setScrollYWindow(true);
      } else {
        setScrollYWindow(false);
      }
    });

    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint);

    return () => {
      window.removeEventListener("change", responsive);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {desktop && scrollYWindow ? (
          <motion.figure
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeIn",
            }}
            exit={{ opacity: 0, y: 100 }}
            className="progress"
          >
            <svg id="progress" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="38" pathLength="1" className="bg" />

              <motion.circle
                onClick={scrollTop}
                cx="50"
                cy="50"
                r="38"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
            <span className="arrow-up">
              <i className="bi bi-caret-up-fill"></i>
            </span>
          </motion.figure>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default ScrollProgress;
