import React from "react";
import Social from "./Social";

/*
Student's Name: Samandar Obidov
Student ID: 301359339
Date: 01.28.2024
*/

const Home = () => {
  return (
    <>
      <div className="samandar_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/sam.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Samandar</h3>
            <p className="job">
            Skilled full-stack developer with over 2 years of experience,proficient in both front-end and back-end technologies.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
