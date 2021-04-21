import React from "react";
import "../styleScss/StarDrinks.scss";
import milkTea from "../asset/imgs/milk-tea.png";
import tea from "../asset/imgs/tea.png";
import juice from "../asset/imgs/juice.png";

const StarDrinks = () => {
  const drinks = [
    {
      name: "Jasmine Bubble Tea",
      style: "brown",
      img: milkTea,
    },
    { name: "Jasmine Bubble Tea", style: "brown", img: milkTea },
    { name: "Jasmine Bubble Tea", style: "brown", img: milkTea },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Signature Drinks</h1>
      <div className="drink-section">
        {drinks.map((drink) => (
          <section className="each-drink">
            <img src={drink.img} alt={drink.name} className="drink-img" />
            <div className="expand-loop">
              <p>{drink.name}</p>
            </div>
          </section>
        ))}
        {/* <section className="each-drink">
          <img src={milkTea} alt="milk tea" className="drink-img" />
          <div className="expand-loop">
            <p>Jessimin Milk Tea</p>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default StarDrinks;
