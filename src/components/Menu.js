import React, { forwardRef, useEffect } from "react";
import MenuJson from "../json/Menu.json";
import { v4 as uuidv4 } from "uuid";
import "../styleScss/Menu.scss";
import "aos/dist/aos.css";
import milkTea from "../asset/imgs/milk-tea.png";
import tea from "../asset/imgs/tea.png";
import juice from "../asset/imgs/juice.png";
import StarDrinks from "./StarDrinks";

function MenuComponent(props, ref) {
  const menuInfo = MenuJson.opts;
  const menuOptions = [
    {
      title: menuInfo[0].title,
      content: menuInfo[0].content,
      img: juice,
      alt: menuInfo[0].alt,
      bgColor: "circle-orange",
    },
    {
      title: menuInfo[1].title,
      content: menuInfo[1].content,
      img: milkTea,
      alt: menuInfo[1].alt,
      bgColor: "circle-brown",
    },
    {
      title: menuInfo[2].title,
      content: menuInfo[2].content,
      img: tea,
      alt: menuInfo[2].alt,
      bgColor: "circle-green",
    },
  ];
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
    { threshold: 0.2 }
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

  return (
    <>
      <StarDrinks />
      <div className="container" ref={ref}>
        {menuOptions.map((each) => (
          <div
            key={uuidv4()}
            className="menu-opt"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
          >
            <section className="menu-category">
              <div style={{ position: "relative" }}>
                <img src={each.img} alt={each.alt} />
                <div className={each.bgColor}></div>
              </div>
              <h3>{each.title}</h3>
            </section>
            <section>
              {each.content.map((item) => (
                <div className="price-list" key={uuidv4()}>
                  <p>{item.name}</p>
                  <p>&#36;{item.price}</p>
                </div>
              ))}
            </section>
          </div>
        ))}
      </div>
    </>
  );
}

const Menu = forwardRef(MenuComponent);
export default Menu;
