import React, { useRef } from "react";
import "../styleScss/StarDrinks.scss";
import milkTea from "../asset/imgs/milk-tea.png";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import panadaTea from "../asset/imgs/panda-milktea.png";
import creamTea from "../asset/imgs/cream-milktea.png";
import Plante from "../asset/icons/planet.png";
import berryDrink from "../asset/imgs/juice.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const StarDrinks = () => {
  const drinkSection = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const drinks = [
    {
      name: "Jasmine Milk Tea",
      img: milkTea,
    },
    { name: "Panna Cotta", img: panadaTea },
    { name: "Panda Milk Tea", img: creamTea },
    { name: "Super Berry", img: berryDrink },
    { name: "Sunset Time", img: panadaTea },
  ];

  const scrollMenu = (e) => {
    const value = e.deltaY;
    let dir;
    if (value > 0) {
      dir = -1;
    } else {
      dir = 1;
    }
    ScrollTrigger.matchMedia({
      "(min-width:650px)": function () {
        gsap.to(drinkSection.current, {
          // x: () => dir * (drinkSection.current.clientWidth - window.innerWidth),
          x: () =>
            -(
              drinkSection.current.scrollWidth -
              document.documentElement.clientWidth
            ) + "px",
          duration: 2,
          ease: "power3.easeOut",
          scrollTrigger: {
            trigger: drinkSection.current.parentElement,
            pin: true,
            scrub: "1",
            toggleActions: "restart none none none",
            start: "bottom center",
            end: () =>
              "+=" + drinkSection.current.clientWidth - window.innerWidth,
          },
        });
      },
    });
  };
  return (
    <div className="menu-section" style={{ textAlign: "center" }}>
      <section data-aos="fade-right">
        <img src={Plante} alt="planet icon" className="planet-style float" />
      </section>
      <h1>Signature Drinks</h1>
      <div
        className="drink-section"
        ref={drinkSection}
        onWheel={(e) => scrollMenu(e)}
      >
        {drinks.map((drink) => (
          <section className="each-drink" key={drink.name}>
            <img src={drink.img} alt={drink.name} className="drink-img" />
            <motion.div className="expand-loop">
              <p className="drink-name">{drink.name}</p>
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default StarDrinks;
