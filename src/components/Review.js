import React, { forwardRef, useEffect } from "react";
import ReviewData from "../json/Review.json";
import "./Review.scss";
import { v4 as uuidv4 } from "uuid";
import Plante from "../icons/planet.svg";
import "aos/dist/aos.css";
import AOS from "aos";

const Review = (props, ref) => {
  const ReviewInfo = ReviewData.review;
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
    });
  }, []);

  return (
    <div className="container" ref={ref}>
      <section data-aos="fade-right">
        <img src={Plante} alt="planet icon" className="planet-style float" />
        <h1>WE ARE HAPPY YOU LIKE IT!</h1>
      </section>
      <section className="review-content">
        {ReviewInfo.map((review) => (
          <ul
            key={uuidv4()}
            className="each-review"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <li>
              <img
                src={process.env.PUBLIC_URL + review.img}
                alt="user review"
              />
            </li>
            <li>
              <p style={{ fontWeight: 700 }}>"{review.abstract}"</p>
              <p>{review.review}</p>
              <p>From customer {review.user}</p>
            </li>
          </ul>
        ))}
      </section>
    </div>
  );
};

export default forwardRef(Review);
