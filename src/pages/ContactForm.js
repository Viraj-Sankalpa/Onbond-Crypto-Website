import React from "react";
import SectionTitle from "../components/ui/section-titles/SectionTitle";

function ContactForm() {
  return (
    <div className="container-fluid">
      <SectionTitle
        title="Contact Us"
        text="Reach out to our team directly. Whether you have questions, suggestions, or partnership inquiries, we're here to listen and respond."
      />
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="google__map">
            {/* <ContactMap latitude="25.1971" longitude="55.2743" /> */}
            <img
            
              src={process.env.PUBLIC_URL + "/images/about/contact.png"}
              alt="conatct images"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12 sm__mt--40 md__mt--40">
          <div className="dg__contact__wrapper">
            <form className="contact-form">
              <div className="single-contact-form">
                <span>Full Name</span>
                <input type="text" name="firstname" />
              </div>
              <div className="single-contact-form">
                <span>Email</span>
                <input type="email" name="email" />
              </div>
              <div className="single-contact-form">
                <span>Subject</span>
                <input type="text" name="subject" />
              </div>
              <div className="single-contact-form message">
                <span>Message</span>
                <textarea name="message" defaultValue={""} />
              </div>
              <div className="contact-btn">
                <button type="submit">
                  Submit
                  <span className="ti-arrow-right" />
                </button>
                  OR
                <button type="submit">
                  Contact us
                  <span className="ti-arrow-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
