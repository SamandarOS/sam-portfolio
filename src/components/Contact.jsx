import React, {useRef} from "react";
import emailjs from "emailjs-com";

/*
Student's Name: Samandar Obidov
Student ID: 301359339
Date: 01.28.2024
*/

const Contact = () => {
    const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pbuoqpn",
        "template_w1i1otn",
        form.current    ,
        "KfCg2lcApjsFaHdYX"
      )
      .then((res) => {
        console.log("SALOM")
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  }

  return (
    <>
      <div className="samandar_tm_contact">
        <div className="samandar_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Contact</span>
              <h3>Get in Touch</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

     
        <div className="fields">
          <form className="contact_form" ref={form} onSubmit={sendEmail}>
            <div className="first">
              <ul>
                <li>
                  <input type="text" name="name" placeholder="Name" />
                </li>
                {/* END FIRST NAME */}

                <li>
                  <input type="email" name="user_email" placeholder="Email" />
                </li>
                {/* END EMAIL */}

                <li>
                  <textarea name="message" placeholder="Message"></textarea>
                </li>
                {/* END SUBJECT MESSAGE */}
              </ul>
            </div>
            <div className="samandar_tm_button">
              <button type="submit" className="ib-button">
                Send Message
              </button>
            </div>
            {/* END SUBMIT BUTTON */}
          </form>
          {/* END FORM */}
        </div>
        {/* END FIELDS */}
      </div>
      {/* END COTACT */}
    </>
  );
};

export default Contact;
