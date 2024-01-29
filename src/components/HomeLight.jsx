import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Services from "./Services"

/*
Student's Name: Samandar Obidov
Student ID: 301359339
Date: 01.28.2024
*/

const HomeLight = () => {
    return (
        <>
            <Tabs>
                <TabList>
                    {/* START LEFT MENU CONTENT */}
                    <div className="leftpart">
                        <div className="leftpart_inner">
                            <div className="logo">
                                <Link className="navbar-brand" to="/">
                                    <img src="/assets/img/logo/logo_main.jpg" alt="brand" />
                                </Link>
                            </div>
                            {/* END LOGO */}

                            <div className="menu">
                                <ul>
                                    <Tab>
                                        <img className="svg_value"
                                            src="/assets/img/svg/home-run.svg" alt="homerun"/>
                                        <span className="menu_content">Home</span>
                                    </Tab>
                                    <Tab>
                                        <img
                                            className="svg_value"
                                            src="/assets/img/svg/avatar.svg"
                                            alt="avatar"
                                        />
                                        <span className="menu_content">About</span>
                                    </Tab>
                                    <Tab>
                                        <img
                                            className="svg_value"
                                            src="/assets/img/svg/briefcase.svg"
                                            alt="briefcase"
                                        />
                                        <span className="menu_content">Projects</span>
                                    </Tab>
                                    <Tab>
                                        <img
                                            className="svg_value"
                                            src="/assets/img/svg/paper.svg"
                                            alt="paper"
                                        />
                                        <span className="menu_content">Services</span>
                                    </Tab>
                                    <Tab>
                                        <img
                                            className="svg_value"
                                            src="/assets/img/svg/mail.svg"
                                            alt="mail"
                                        />
                                        <span className="menu_content">Contact</span>
                                    </Tab>
                                </ul>
                            </div>
                            {/* END MENU */}

                        </div>
                    </div>
                    {/* END LEFT MENU CONTENT */}
                </TabList>
                {/* END SIDEBAR TABLIST */}

                {/* START RIGHT PART CONTENT */}
                <div className="rightpart">
                    <div className="rightpart_in">
                        <div className="samandar_tm_section">
                            <div className="container">
                                <TabPanel>
                                    <Home />
                                </TabPanel>
                                {/* END HOME MENU TAB CONTENT */}

                                <TabPanel>
                                    <About />
                                </TabPanel>
                                {/* END ABOUT MENU TAB CONTENT */}

                                <TabPanel>
                                    <Projects />
                                </TabPanel>
                                {/* END PORTFOLIO MENU TAB CONTENT */}

                                <TabPanel>
                                    <Services />
                                </TabPanel>
                                {/* END NEWS MENU TAB CONTENT */}

                                <TabPanel>
                                    <Contact />
                                </TabPanel>
                                {/* END CONTACT MENU TAB CONTENT */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* END RIGHT PART CONTENT */}
            </Tabs>
        </>
    );
};

export default HomeLight;
