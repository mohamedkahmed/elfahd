import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsFillTelephoneFill,
} from "react-icons/bs";

// import { PiTiktokLogoFill } from "react-icons/pi"
import { FaTiktok } from "react-icons/fa";

import { ImLocation } from "react-icons/im";
import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import image from  "../../pages/images/alfahad3.png"
import icon from  "../../pages/images/tiktok-svgrepo-com.svg"
const Footer = () => {
 
  const footerEndLinks = [
    {
        id: 1,
        text: "إنشاء المواقع الإلكترونية",
        href: "/servies"
    },
    {
        id: 2,
        text: "إنشاء تطبيقات الجوال",
        href: "/servies"
    },
    {
        id: 3,
        text: "خدمات التسويق الرقمي",
        href: "/servies"
    },
    {
        id: 4,
        text: "تصميم الهوية البصرية",
        href: "/servies"
    },
    {
        id: 5,
        text: "تصميم واجهة المستخدم",
        href: "/servies"
    },
    {
        id: 6,
        text: "جرافيك ديزاين",
        href: "/servies"
    }
];

  const [loading, setloading] = useState(false);
  const    footerCenterLinks = [
    {
      id:1,
      text:"الرئيسية",
      href:"/"
    },
    {
      id:32,
      text:"خدماتنا",
      href:"/servies"
    },
    {
      id:3,
      text:"من نحن",
      href:"/about"
    },
    {
        id:4,
        text:"اعمالنا",
        href:"/our-work"
    },
    {
        id:5,
       text:"تواصل معنا",
        href:"/contact"
    }

]
  const [subscribe_user, setsubscribe_user] = useState({
    name: "subscribe user",
    email: "",
    message: "subscribe user",
  });
  const handel_user = (e) => {
    setsubscribe_user({ ...subscribe_user, [e.target.id]: e.target.value });
  };
  const form_submit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      await emailjs.send(
        "service_xcr9kal",
        "template_8392w2u",
        subscribe_user,
        "MvvmMcHoZ4pfShaNN"
      );
      setsubscribe_user({
        name: "",
        email: "",
        message: "",
      });
      setloading(false);
      toast.success("the best offers in your box");
    } catch (error) {
      setloading(false);
      toast.error("there is an erorr check your internet and try again");
    }
  };
  return (
    <>
 
      <footer
        className="footer-center"
        style={{ borderBottom: "1px solid #3b4149" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-6">
              <div className="txt-footer-center">
                <div className="footer-center-links">
                  <div className="img-logo-footer">
                    <img src={image} alt="logo" loading="lazy"  height={180} />
                  </div>
                  <div className="social_icons">
                    <ul className="wrapper">
                   

                      <Link
                        to={
                          "https://www.instagram.com/alfahaddevelop/"
                        }
                        className="icon instagram"
                      >
                        <span className="tooltip">Instagram</span>
                        <span>
                          {" "}
                          <BsInstagram />{" "}
                        </span>
                      </Link>
                      <Link className="icon github" to="https://www.tiktok.com/@alfahaddevelop?is_from_webapp=1&sender_device=pc">
                        <span className="tooltip">Tiktok 
                        </span>
                        <span>
                          {" "}
                          <FaTiktok />
                        </span>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="txt-footer-center">
                <h4>تواصل معنا
                </h4>
                <div className="footer-center-links">
                  <address
                    style={{
                      color: "#dadada",
                      fontSize: "14px",
                      marginBottom: "5px",
                    }}
                  >
                    <ImLocation style={{ margin: "0 3px" }} />{" "}
                    Kuwait, Kuwait City
                  </address>
                  <a className="bages_links" href="tel: +965 6909 4485">
                    {" "}
                    <BsFillTelephoneFill style={{ margin: "0 3px" }} />
                    00965-69094485
                  </a>
                  <a
                    className="bages_links"
                    style={{ textTransform: "lowercase" }}
                    href="mailto: Info@alfahaddevelop.com"
                  >
                    <FaEnvelope style={{ margin: "0 3px" }} />{" "}
                    Info@alfahaddevelop.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="txt-footer-center">
                <h4> شركة الفهد الاقليمية</h4>
                <div className="footer-center-links">
                  {footerCenterLinks.map((item) => {
                    return (
                      <Link
                        className="bages_links"
                        key={item.id}
                        to={item.href}
                      >
                        {" "}
                        {item.text}{" "}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6">
              <div className="txt-footer-center">
                <h4>خدماتنا</h4>
                <div className="footer-center-links">
                  {footerEndLinks.map((item) => {
                    return (
                      <Link
                        className="bages_links"
                        key={item.id}
                        to={item.href}
                      >
                        {" "}
                        {item.text}{" "}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="txt-co">
                <p style={{ textTransform: "capitalize" }}>
                  &copy; شركة الفهد الاقليمية  . 2024 .جميع الحقوق محفوظة
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
