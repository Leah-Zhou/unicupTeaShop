import React, { forwardRef, useEffect } from "react";
import LabData from "../json/Lab.json";
import { v4 as uuidv4 } from "uuid";
// import Plante from "../asset/icons/planet.png";
import "../styleScss/Lab.scss";
import "aos/dist/aos.css";
import environment from "../asset/imgs/lab.jpg";
import tea from "../asset/imgs/teaB.jpg";
import tapioca from "../asset/imgs/tappi.jpg";
import wave from "../asset/icons/wave.gif";
// import smallLeaf from "../asset/imgs/leaf-small.png";
// import smallBoba from "../asset/imgs/tapio.png";

const BrandIntro = (props, ref) => {
  const data = LabData.labInfo;
  const shopIntro = [
    {
      title: data[0].title,
      content: data[0].content,
      img: environment,
      alt: data[0].alt,
    },
    {
      title: data[1].title,
      content: data[1].content,
      img: tea,
      alt: data[1].alt,
    },
    {
      title: data[2].title,
      content: data[2].content,
      img: tapioca,
      alt: data[2].alt,
    },
  ];
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
      <div className="lab-section" ref={ref}>
        {shopIntro.map((each) => (
          <div key={uuidv4()} className="lab-content">
            <div
              className="intro-content"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
            >
              <h1>{each.title}</h1>
              <p>{each.content}</p>
            </div>
            <div data-aos="fade-right" className="lab-img">
              <img
                src={each.img}
                alt={each.alt}
                className="img-style"
                data-aos-duration="1200"
                data-aos-anchor-placement="top-bottom"
              />
              <img src={wave} alt="wave" className="wave" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default forwardRef(BrandIntro);
