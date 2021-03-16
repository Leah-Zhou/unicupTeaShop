import React, { forwardRef, useEffect } from "react";
import "../styleScss/Promotion.scss";
import Plante from "../asset/icons/planet.svg";
import imgTop from "../asset/imgs/drink-top.png";
import imgBottom from "../asset/imgs/drink-bottom.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const contentVariants = {
  animate: {
    opacity: 1,
    transition: { duration: 1, delay: 2 },
  },
  initial: {
    opacity: 0,
  },
};
const imgVariants = {
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeIn", delay: 1 },
  },
  initial: (i) => ({
    x: i,
    opacity: 0,
  }),
};

const Promotion = (props, ref) => {
  const [observeRef, inView] = useInView();
  const scrollElement = props.node;
  const correspondOpt = props.correspond;
  const options = document.querySelectorAll(".nav-bar li");

  const parentObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        options.forEach((opt) => opt.classList.remove("select-opt"));
        correspondOpt.current.classList.add("select-opt");
      } else {
        correspondOpt.current.classList.remove("select-opt");
      }
    },
    { threshold: 0.4 }
  );

  useEffect(() => {
    if (scrollElement) {
      parentObserver.observe(scrollElement);
      return () => {
        if (scrollElement) {
          parentObserver.unobserve(scrollElement);
        }
      };
    }
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div ref={ref}>
      <section className="promote-title">
        <img src={Plante} alt="planet icon" className="planet-style float" />
        <h1 data-aos="fade-up">PROMOTION</h1>
      </section>
      <div className="wrap">
        <section
          style={{
            display: "flex",
            flexFlow: "column wrap",
            overflow: "hidden",
          }}
          ref={observeRef}
        >
          <motion.img
            src={imgTop}
            alt="promotion"
            className="img-size"
            variants={imgVariants}
            custom={-50}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          />
          <motion.img
            src={imgBottom}
            alt="promotion"
            className="img-size"
            variants={imgVariants}
            custom={50}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          />
        </section>
        <motion.div
          className="promote-info"
          variants={contentVariants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <h2>NEW RELEASE!</h2>
          <h2>MANGO BOBA LEMON TEA</h2>
          <h3>BUY ONE GET ONE FREE!</h3>
        </motion.div>
      </div>
    </div>
  );
};

export default forwardRef(Promotion);
