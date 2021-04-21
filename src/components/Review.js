import React, { forwardRef, useEffect } from "react";
import ReviewData from "../json/Review.json";
import "../styleScss/Review.scss";
import { v4 as uuidv4 } from "uuid";
import Plante from "../asset/icons/planet.png";
import "aos/dist/aos.css";
import reviewOne from "../asset/imgs/review-one.png";
import reviewTwo from "../asset/imgs/review-two.png";
import reviewThree from "../asset/imgs/review-three.png";
import reviewFour from "../asset/imgs/review-four.png";

const Review = (props, ref) => {
  const reviewInfo = ReviewData.review;
  // const reviewPhoto= [reviewOne, reviewTwo, reviewThree, reviewFour];
  const reviewData = [
    {
      img: reviewOne,
      abstract: reviewInfo[0].abstract,
      user: reviewInfo[0].user,
      comment: reviewInfo[0].review,
    },
    {
      img: reviewTwo,
      abstract: reviewInfo[1].abstract,
      user: reviewInfo[1].user,
      comment: reviewInfo[1].review,
    },
    {
      img: reviewThree,
      abstract: reviewInfo[2].abstract,
      user: reviewInfo[2].user,
      comment: reviewInfo[2].review,
    },
    {
      img: reviewFour,
      abstract: reviewInfo[3].abstract,
      user: reviewInfo[3].user,
      comment: reviewInfo[3].review,
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

  return (
    <div className="container" ref={ref}>
      <section data-aos="fade-right">
        <img src={Plante} alt="planet icon" className="planet-style float" />
        <h1>WE ARE HAPPY YOU LIKE IT!</h1>
      </section>
      <section className="review-content">
        {reviewData.map((review) => (
          <ul
            key={uuidv4()}
            className="each-review"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <li>
              <img src={review.img} alt="customer review" />
            </li>
            <li>
              <p style={{ fontWeight: 800, fontSize: "17px" }}>
                "{review.abstract}"
              </p>
              <p style={{ margin: "10px" }}>{review.comment}</p>
              <p>From dear customer {review.user}</p>
            </li>
          </ul>
        ))}
      </section>
    </div>
  );
};

export default forwardRef(Review);
