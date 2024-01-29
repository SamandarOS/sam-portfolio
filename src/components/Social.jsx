import React from "react";

/*
Student's Name: Samandar Obidov
Student ID: 301359339
Date: 01.28.2024
*/

const SocialShare = [
  {
    iconName: "facebook",
    link: "https://www.facebook.com/SamandarObidovv",
  },
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/samandar-obidov/",
  },
  {
    iconName: "github",
    link: "https://github.com/SamandarOS",
  }
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`}  target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
