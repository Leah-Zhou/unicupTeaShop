import React, { forwardRef, useEffect } from "react";
import LabData from "../json/Lab.json";
import { v4 as uuidv4 } from "uuid";
import Plante from "../icons/planet.svg";
import "./Lab.scss";
import "aos/dist/aos.css";

const BrandIntro = (props, ref) => {
  const data = LabData.labInfo;
  const options = document.querySelectorAll(".nav-bar li");
  const correspondOpt = props.correspond;
  const scrollElement = props.node;

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
      <div className="container lab-section" ref={ref}>
        <section data-aos="zoom-out">
          <img src={Plante} alt="planet icon" className="planet-style float" />
          <h1>UNIQUE TEA UNIVERSE</h1>
        </section>
        {data.map((each) => (
          <div key={uuidv4()} className="lab-content">
            <img
              src={process.env.PUBLIC_URL + each.img}
              alt={each.alt}
              className="img-style"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            />
            <div
              className="intro-content"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
            >
              <h3>{each.title}</h3>
              <p>{each.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default forwardRef(BrandIntro);
