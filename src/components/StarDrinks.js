import React from "react";
import "../styleScss/StarDrinks.scss";
import milkTea from "../asset/imgs/milk-tea.png";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import panadaTea from "../asset/imgs/panda-milktea.png";
import creamTea from "../asset/imgs/cream-milktea.png";

// const hoverMode = {
//   initial: { x: 0 },
//   animate: { x: 200, transition: { duration: 1, delay: 2 } },
// };
const StarDrinks = () => {
  const drinks = [
    {
      name: "Jasmine Bubble Tea",
      img: milkTea,
    },
    { name: "Panna Cotta", img: panadaTea },
    { name: "Panda Milk Tea", img: creamTea },
  ];
  // const [isHover, setIsHover] = useState(false);
  // function changeHoverMode() {
  //   setIsHover((prev) => !prev);
  // }
  // console.log(isHover);
  return (
    <div
      className="menu-section"
      style={{ textAlign: "center" }}
      data-aos="fade-right"
      data-aos-anchor-placeholder="bottom-bottom"
    >
      <h1>Signature Drinks</h1>
      <div className="drink-section">
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
