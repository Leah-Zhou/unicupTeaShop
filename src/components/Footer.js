import React from "react";
import Logo from "../icons/logo.svg";
import EamilIcon from "../icons/email.svg";
import ContactIcon from "../icons/contact.svg";
import LocationIcon from "../icons/location.svg";
import ClockIcon from "../icons/clock.svg";
import { v4 as uuidv4 } from "uuid";
import "./Footer.scss";

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
