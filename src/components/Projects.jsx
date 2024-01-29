import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

/*
Student's Name: Samandar Obidov
Student ID: 301359339
Date: 01.28.2024
*/

const Portfolio = () => {
  return (
    <>
        <div className="samandar_tm_portfolio">
          <div className="samandar_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>Projects</h3>
              </div>
            </div>
          </div>
          {/* END samandar_TM_TITLE */}
          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry samandar_tm_portfolio_animation_wrap">
                            <a rel="noreferrer" target="_blank" href="https://glint-resume-w.netlify.app">
                              <img
                                src="assets/img/portfolio/project1.jpg"
                                alt="Portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry samandar_tm_portfolio_animation_wrap">
                            <a rel="noreferrer" target="_blank" href="https://lebazarclone.netlify.app">
                              <img
                                src="assets/img/portfolio/project2.jpg"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry samandar_tm_portfolio_animation_wrap">
                            <a  rel="noreferrer" target="_blank" href="https://restantecommerce.netlify.app">
                              <img
                                src="assets/img/portfolio/project3.jpg"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry samandar_tm_portfolio_animation_wrap">
                            <a  rel="noreferrer" target="_blank" href="https://kunuzsimpleclone.netlify.app">
                              <img
                                src="assets/img/portfolio/project4.jpg"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END ALL PORTFOLIO GALLERY */}

                {/* END TABPANEL */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
    </>
  );
};

export default Portfolio;
