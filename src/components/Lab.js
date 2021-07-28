import React, { forwardRef, useEffect, useRef } from "react";
import LabData from "../json/Lab.json";
import { v4 as uuidv4 } from "uuid";
// import Plante from "../asset/icons/planet.png";
import "../styleScss/Lab.scss";
// import "aos/dist/aos.css";
import environment from "../asset/imgs/lab.jpg";
import tea from "../asset/imgs/teaB.jpg";
import tapioca from "../asset/imgs/tappi.jpg";
import wave from "../asset/icons/wave.gif";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BrandIntro = (props, ref) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
  const contentRef = useRef([]);
  const data = LabData.labInfo;
  data[0].img = environment;
  data[1].img = tea;
  data[2].img = tapioca;

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
    }
    contentRef.current.forEach((wrapper) => {
      gsap.fromTo(
        wrapper.querySelector(".intro-content"),
        {
          opacity: 0,
          y: 300,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: wrapper,
            start: "top center",
            end: "+=300%",
            toggleActions: "restart none none resume",
          },
        }
      );
      gsap.fromTo(
        wrapper.querySelector(".img-style"),
        {
          clipPath: "circle(0%)",
        },
        {
          clipPath: "circle(40%)",
          duration: 1.3,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: wrapper,
            start: "top center",
            end: "+=300%",
            toggleActions: "restart none none resume",
          },
        }
      );
    });
    return () => {
      if (scrollElement) {
        parentObserver.unobserve(scrollElement);
      }
    };
  });

  const collectRef = (ref) => {
    if (ref !== null && !contentRef.current.includes(ref)) {
      contentRef.current.push(ref);
    }
  };
  return (
    <>
      <div className="lab-section" ref={ref}>
        {data.map((each) => (
          <div key={uuidv4()} className="lab-content" ref={collectRef}>
            <div className="intro-content">
              <h1>{each.title}</h1>
              <p>{each.content}</p>
            </div>
            <div className="lab-img">
              <img src={each.img} alt={each.alt} className="img-style" />
              <img src={wave} alt="wave" className="wave" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default forwardRef(BrandIntro);
