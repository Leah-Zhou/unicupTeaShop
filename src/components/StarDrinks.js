import React, { useRef } from "react";
import "../styleScss/StarDrinks.scss";
import milkTea from "../asset/imgs/milk-tea.png";
// import { motion } from "framer-motion";
import "aos/dist/aos.css";
import panadaTea from "../asset/imgs/panda-milktea.png";
import creamTea from "../asset/imgs/cream-milktea.png";
// import Plante from "../asset/icons/planet.png";
import berryDrink from "../asset/imgs/juice.png";
import fav1 from "../asset/imgs/fav-1.jpg";
import fav2 from "../asset/imgs/fav-2.jpg";
import fav3 from "../asset/imgs/fav-3.jpg";
import fav4 from "../asset/imgs/fav-4.jpg";
import fav5 from "../asset/imgs/fav-5.jpg";
import fav6 from "../asset/imgs/fav-6.jpg";
import tea from "../asset/imgs/tea.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const StarDrinks = () => {
  const drinkSection = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const drinks = [
    {
      name: "Jasmine Milk Tea",
      img: milkTea,
      fav: fav1,
    },
    { name: "Orange Lulu", img: tea, fav: fav2 },
    { name: "Fresh Strawberry Milk Tea", img: berryDrink, fav: fav3 },
    { name: "Coconut Love", img: panadaTea, fav: fav4 },
    { name: "Almond Milk Tea", img: creamTea, fav: fav5 },
    { name: "Cookie Monster", img: milkTea, fav: fav6 },
  ];

  // const scrollMenu = () => {
  //   ScrollTrigger.matchMedia({
  //     "(min-width:650px)": function () {
  //       gsap.to(drinkSection.current, {
  //         x: () =>
  //           -(
  //             drinkSection.current.scrollWidth -
  //             document.documentElement.clientWidth
  //           ) + "px",
  //         duration: 2,
  //         ease: "power3.easeOut",
  //         scrollTrigger: {
  //           trigger: drinkSection.current.parentElement,
  //           pin: true,
  //           scrub: "1",
  //           toggleActions: "restart none reverse none",
  //           start: "bottom center",
  //           end: () =>
  //             "+=" + drinkSection.current.clientWidth - window.innerWidth,
  //         },
  //       });
  //     },
  //   });
  // };
  return (
    <div
      className="menu-section"
      style={{ textAlign: "center", paddingBottom: "1em" }}
    >
      {/* <section data-aos="fade-right">
        <img src={Plante} alt="planet icon" className="planet-style float" />
      </section> */}
      <section>
        <h3>TRY OUR</h3>
        <h1>SIGNATURE DRINKS!</h1>
      </section>
      <div
        className="drink-section"
        ref={drinkSection}
        // onWheel={() => scrollMenu()}
      >
        {drinks.map((drink) => (
          <section className="each-drink" key={drink.name}>
            <div className="drinks-wrapper">
              <img src={drink.img} alt={drink.name} className="drink-img" />
              <img src={drink.fav} alt={drink.name} className="drink-fav" />
            </div>
            <div>
              <h4 className="drink-name">{drink.name}</h4>
            </div>
            {/* <motion.div className="expand-loop">
              <h4 className="drink-name">{drink.name}</h4>
            </motion.div> */}
          </section>
        ))}
      </div>
    </div>
  );
};

export default StarDrinks;
