import React, { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTelegram,
  FaTwitterSquare
} from "react-icons/fa";
import { MdExpandLess } from "react-icons/md";
import { animateScroll } from "react-scroll";

const Footer = ({ theme }) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer
      className={`footer-area ${theme === "white" ? "footer--2" : "footer--1"}`}
    >
      <div
        className={`dg__footer__container ${
          theme === "white" ? "bg--white" : "bg__color--2"
        }`}
      >
        <div className="container">
        
        </div>
      </div>
      <div
        className={`copyright ${
          theme === "white" ? "bg__color--1" : "bg--black"
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="copyright__inner">
                <p className="copyright-text">
                Copyright
                  &copy; OneBond {new Date().getFullYear()} All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-12">
              <ul className="footer__right social__icon">
                <li>
                  <a
                    href="https://www.facebook.com/share/p/HrKYorNmqcNwxNLL/?mibextid=WC7FNe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="//linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/onebond1/status/1813106071751295196?s=46"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitterSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/onebond.foundation?igsh=MXBnd2FjcjVtYTByZQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagramSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/Onebondcrypto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <MdExpandLess />
      </button>
    </footer>
  );
};

export default Footer;
