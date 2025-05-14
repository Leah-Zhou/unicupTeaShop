import React from "react";
import Logo from "../asset/icons/logo.svg";
import EamilIcon from "../asset/icons/email.svg";
import ContactIcon from "../asset/icons/contact.svg";
import LocationIcon from "../asset/icons/location.svg";
import ClockIcon from "../asset/icons/clock.svg";
import { v4 as uuidv4 } from "uuid";
import "../styleScss/Footer.scss";

const WebFooter = () => {
  const BusinessInfo = [
    { icon: EamilIcon, alt: "email icon", info: "UnicupTeaShop@gmail.com" },
    { icon: ContactIcon, alt: "contact icon", info: "905-990-0020" },
    {
      icon: LocationIcon,
      alt: "location icon",
      info: "9600 Yonge Street Unit 113, Richmond Hill ON L4C0X4",
    },
    {
      icon: ClockIcon,
      alt: "clock icon",
      info: "Business Hours: Mon-Sun 11:00am - 22:00pm",
    },
  ];

  return (
    <div className="footer">
      <div class="custom-shape-divider-top-1747255499">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <img src={Logo} alt="unicup logo" />
      <ul className="business-info">
        {BusinessInfo.map((each) => (
          <li key={uuidv4()}>
            <img src={each.icon} alt={each.alt} />
            <p>{each.info}</p>
          </li>
        ))}
      </ul>
      <p className="copyright">
        &copy;Copyright: 2021Unicup. All rights reserved
      </p>
    </div>
  );
};

export default WebFooter;
