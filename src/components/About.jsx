import React, { useState } from "react";
import ResumeO from "../docs/SamandarO.pdf"
import Modal from "react-modal";

/*
Student's Name: Samandar Obidov
Student ID: 301359339
Date: 01.28.2024
*/

Modal.setAppElement("#root");

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="samandar_tm_about">
                <div className="about_image">
                    <img src="assets/img/slider/sam.jpg" alt="about" />
                </div>
                {/* END ABOUT IMAGE */}
                <div className="description">
                    <h3 className="name">Samandar &amp; Full Stack Developer</h3>
                    <div className="description_inner">
                        <div className="left">
                            <p>
                                Hello, I'm a Full Stack Developer with two years of experience,
                                specializing in crafting robust and efficient web solutions.
                                I thrive on turning complex ideas into streamlined,
                                functional code to bring your digital projects to life.
                            </p>
                            <div className="samandar_tm_button">
                                <button onClick={toggleModal} className="ib-button">
                                    Read More
                                </button>

                            </div>

                            <div className="samandar_tm_button">
                                    <a rel="noreferrer" href={ResumeO} target="_blank" className="ib-button ib-new">
                                        Download
                                    </a>

                            </div>
                            {/* END samandar BUTTON */}
                        </div>
                        {/* END LEFT */}
                        <div className="right">
                            <ul>
                                <li>
                                    <p>
                                        <span>Birthday:</span>25.06.2001
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Age:</span>22
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Address:</span>30 Tuxedo CRT,Toronto
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Email:</span>
                                        <a href="mailto:mail@gmail.com">samandarobidovfrd@gmail.com</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Phone:</span>
                                        <a href="tel:+770221770505">+1437 665 4379</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Study:</span>Centennial College
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>Freelance:</span>Available
                                    </p>
                                </li>
                            </ul>
                            {/* END UL */}
                        </div>
                        {/* END RIGHT */}
                    </div>
                    {/* END DESCRIPTION INNER */}
                </div>
            </div>

            {/* START ABOUT POPUP BOX */}
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                <div className="samandar_tm_modalbox_about">
                    <button className="close-modal" onClick={toggleModal}>
                        <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END POPUP CLOSE BUTTON */}
                    <div className="box-inner">
                        <div className="description_wrap scrollable">
                            <div className="my_box">
                                <div className="left">
                                    <div className="about_title">
                                        <h3>Coding Skills</h3>
                                    </div>
                                    {/* END ABOUT TITLE */}

                                    <div className="samandar_progress">
                                        <div className="progress_inner" data-value="55">
                                            <span>
                                                <span className="label">HTML</span>
                                                <span className="number">55%</span>
                                            </span>
                                            <div className="background">
                                                <div className="bar">
                                                    <div className="bar_in" style={{ width: 55 + '%' }}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="progress_inner" data-value="50">
                                            <span>
                                                <span className="label">CSS</span>
                                                <span className="number">50%</span>
                                            </span>
                                            <div className="background">
                                                <div className="bar">
                                                    <div className="bar_in" style={{ width: 50 + '%' }}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="progress_inner" data-value="45">
                                            <span>
                                                <span className="label">React.js</span>
                                                <span className="number">45%</span>
                                            </span>
                                            <div className="background">
                                                <div className="bar">
                                                    <div className="bar_in" style={{ width: 45 + '%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END PROGRESS */}
                                </div>
                                {/* END LEFT */}

                                <div className="right">
                                    <div className="about_title">
                                        <h3>Language Skills</h3>
                                    </div>
                                    {/* END TITLE */}
                                    <div className="samandar_progress">
                                        <div className="progress_inner" data-value="55">
                                            <span>
                                                <span className="label">English</span>
                                                <span className="number">55%</span>
                                            </span>
                                            <div className="background">
                                                <div className="bar">
                                                    <div className="bar_in" style={{ width: 55 + '%' }}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="progress_inner" data-value="45">
                                            <span>
                                                <span className="label">Russian</span>
                                                <span className="number">45%</span>
                                            </span>
                                            <div className="background">
                                                <div className="bar">
                                                    <div className="bar_in" style={{ width: 45 + '%' }}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="progress_inner" data-value="35">
                                            <span>
                                                <span className="label">Arabian</span>
                                                <span className="number">35%</span>
                                            </span>
                                            <div className="background">
                                                <div className="bar">
                                                    <div className="bar_in" style={{ width: 35 + '%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* EDN samandar PROGRESS */}
                                </div>
                                {/* END RIGHT */}
                            </div>
                            {/* END MYBOX */}

                            <div className="counter">
                                <div className="about_title">
                                    <h3>Facts</h3>
                                </div>
                                <ul>
                                    <li>
                                        <div className="list_inner">
                                            <h3>15+</h3>
                                            <span>Projects Completed</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list_inner">
                                            <h3>100+</h3>
                                            <span>Happy Clients</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list_inner">
                                            <h3>5K+</h3>
                                            <span>Lines of Code</span>
                                        </div>
                                    </li>
                                </ul>
                                {/* END COUNTER CONTENT */}
                            </div>
                            {/* END COUNTER */}

                        </div>
                    </div>
                </div>
            </Modal>
            {/* END ABOUT POPUP BOX */}
        </>
    );
};

export default About;
