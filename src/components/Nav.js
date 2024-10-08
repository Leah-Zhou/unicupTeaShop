import React, { useState, useRef, useEffect } from "react";
import BrandIntro from "./Lab";
import Menu from "./Menu";
import Promotion from "./Promotion";
// import Plante from "../asset/icons/planet.png";
import Review from "./Review";
import WebFooter from "./Footer";
import LogoIcon from "../asset/icons/icon-logo.svg";
import BrandName from "../asset/icons/brand-name.gif";
import heroImg from "../asset/imgs/bbtea-hero.png";
import "../styleScss/Nav.scss";
import { motion } from "framer-motion";

const closeVariant = {
  animate: (variable) => ({
    x: variable,
    transition: { duration: 0.3, ease: "easeInOut" },
  }),
  initial: { x: 0 },
};
const openVariant = {
  animate: { x: 0, transition: "1s ease" },
  initial: (variable) => ({ x: variable }),
};
const titleVariant = {
  initial: { opacity: 0, y: "-20%" },
  animate: {
    opacity: 1,
    y: "-50%",
    transition: { delay: 1, duration: 1.4, ease: "easeOut" },
  },
};
const heroVariant = {
  initial: {
    opacity: 0,
    x: "50%",
  },
  animate: {
    opacity: 1,
    x: "0%",
    transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
  },
};

const NavBar = () => {
  const [menuRef, setMenuRef] = useState(null);
  const [labRef, setLabRef] = useState(null);
  const [promotionRef, setPromoteRef] = useState(null);
  const [reviewRef, setReviewRef] = useState(null);
  const optLabRef = useRef("lab");
  const optMenuRef = useRef("menu");
  const optPromoteRef = useRef("promote");
  const optReviewRef = useRef("review");
  const [display, setDisplay] = useState(false);
  const NavOptions = [
    { name: "TEA LAB", call: labRef, myRef: optLabRef },
    { name: "MENU", call: menuRef, myRef: optMenuRef },
    { name: "PROMOTION", call: promotionRef, myRef: optPromoteRef },
    { name: "REVIEWS", call: reviewRef, myRef: optReviewRef },
  ];

  const ToggleMenu = () => {
    setDisplay((perv) => !perv);
    // console.log(display);
  };

  function scrollHandler(el, listRef) {
    ToggleMenu();
    el.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    if (display) {
      document.querySelector("body").classList.add("fix-position");
    } else {
      document.querySelector("body").classList.remove("fix-position");
    }
  }, [display]);

  return (
    <>
      <div className="nav-bar">
        <img src={LogoIcon} alt="logo icon" className="logo-icon" />
        <div className="menu-icon" onClick={ToggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <title>menu</title>
            <g id="menu">
              <g id="line-top">
                <motion.path
                  variants={display ? closeVariant : openVariant}
                  initial="initial"
                  animate="animate"
                  custom={10}
                  className="menu-i-line"
                  d="M3.858,7.8H42.123a1.5,1.5,0,0,0,0-3H3.858a1.5,1.5,0,0,0,0,3Z"
                />
              </g>
              <g id="line-middle">
                <path
                  className="menu-i-line"
                  d="M4.362,22.975H33.37a1.5,1.5,0,0,0,0-3H4.362a1.5,1.5,0,0,0,0,3Z"
                />
              </g>
              <g id="line-bottom">
                <motion.path
                  variants={display ? closeVariant : openVariant}
                  initial="initial"
                  animate="animate"
                  custom={-10}
                  className="menu-i-line"
                  d="M17.136,37.784H42.123a1.5,1.5,0,0,0,0-3H17.136a1.5,1.5,0,0,0,0,3Z"
                />
              </g>
              <motion.circle
                variants={display ? closeVariant : openVariant}
                initial="initial"
                animate="animate"
                custom={-20}
                id="cirlce-b"
                className="menu-i-circle"
                cx="7.086"
                cy="36.826"
                r="4.086"
              />
              <circle
                id="circle-m"
                className="menu-i-circle"
                cx="42.123"
                cy="21.584"
                r="3.877"
              />
            </g>
          </svg>
        </div>
        <ul className={display ? "show" : "hide"}>
          {NavOptions.map((each) => (
            <li
              className="nav-item"
              ref={each.myRef}
              key={each.name}
              id={each.name}
              onClick={() => scrollHandler(each.call, each.myRef)}
            >
              {each.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-section">
        <motion.div
          className="logo-name"
          variants={titleVariant}
          initial="initial"
          animate="animate"
        >
          <img src={BrandName} alt="unicup logo" />
          <p>Bubble Tea, Your Way!</p>
        </motion.div>
        <motion.div variants={heroVariant} initial="initial" animate="animate">
          <img
            src={heroImg}
            alt="unicup bubble tea product"
            className="hero-img"
          />
        </motion.div>
      </div>
      <BrandIntro ref={setLabRef} node={labRef} correspond={optLabRef} />
      <Menu ref={setMenuRef} node={menuRef} correspond={optMenuRef} />
      <Promotion
        ref={setPromoteRef}
        node={promotionRef}
        correspond={optPromoteRef}
      />
      <Review ref={setReviewRef} node={reviewRef} correspond={optReviewRef} />
      <WebFooter />
    </>
  );
};

export default NavBar;
