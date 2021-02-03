import React, { forwardRef, useEffect } from "react";
import MenuJson from "../json/Menu.json";
import { v4 as uuidv4 } from "uuid";
import Plante from "../icons/planet.svg";
import "./Menu.scss";
import "aos/dist/aos.css";

function MenuComponent(props, ref) {
  const menuInfo = MenuJson.opts;
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
      <div className="container" ref={ref}>
        <section data-aos="fade-right">
          <img src={Plante} alt="planet icon" className="planet-style float" />
          <h1>OUR UNIQUE MENU</h1>
        </section>

        {menuInfo.map((each) => (
          <div
            key={uuidv4()}
            className="menu-opt"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-anchor-placement="center-center"
          >
            <section className="menu-category">
              <img src={process.env.PUBLIC_URL + each.img} alt={each.title} />
              <p style={{ fontWeight: "600", fontSize: "23px" }}>
                {each.title}
              </p>
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
