import { useNavigate, useParams } from "react-router-dom";
import "./SingleProduct.scss";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";
import Coustomheader from "../../coustom_header/Coustomheader.jsx";
import "../home/services/services.scss";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet-async";
import { FaLink } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import { useFetchProjects } from "../../../services/authfetch.jsx";
const SingleProduct = () => {
 const{projects} =  useFetchProjects()
  const { id } = useParams();
  // const projects = t("Projects", { returnObjects: true });
  const project = projects.find((p) => p.id === id);

  const navagition = useNavigate();
  const navbarlinks = [
    {
        id: 1,
        text: "الرئيسية",
        href: "/"
    },
    {
        id: 2,
        text: "من نحن",
        href: "/about"
    },
    {
        id: 3,
        text: "خدماتنا",
        href: "/servies"
    },
    {
        id: 4,
        text: "اعمالنا",
        href: "/our-work"
    },
    {
        id: 5,
        text: "تواصل معنا",
        href: "/contact"
    }
];

  const [message_Fit, setMessage_Fit] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handelInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setMessage_Fit({ ...message_Fit, [id]: value });
  };
  const onsubmit_Form = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_xzql5hd",
        "template_gi81njr",
        message_Fit,
        "LavrD-ScxjLLhT8mr"
      );
      setMessage_Fit({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      toast.success("thanks for your comment");
      return navagition("/");
    } catch (error) {
      return toast.error(
        "there is an erorr,pleas check your internet and try again"
      );
    }
  };

  // if (!project) {
  //   toast.error(
  //     " sorry, we cant find product you looking for, please try again"
  //   );
  //   return navagition("/");
  // }

  return (
    <>
      <Helmet>
        <title>{project?.projectName}</title>
        <meta
          name="description"
          content={project?.projectdetails.slice(0, 90)}
        />
        <link rel="canonical" href={`/SingleProduct/${project?.id}`} />
      </Helmet>
      <BreadCrumb title={project?.projectName} />
      <div className="single-product-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="fillter-card-product">
                <div className="title-card">
                  <h4>اين تريد الذهاب</h4>
                </div>
                <div className="card-links-upper">
                  {navbarlinks?.map((item) => {
                    return (
                      <Link to={item.href} key={item.id}>
                        {item.text}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-12">
              <div className="single-product-card">
                <div className="card-title">
                  <Coustomheader title={project?.projectName} />
                </div>
                <div className="card-image">
                  <img loading="lazy" src={project?.image} alt="design" />
                  {project?.projectLink  && (
                    <div className="overlay-link">
                      <Link to={project?.projectLink} target="_blank">
                        <FaLink /> <p> رؤيه العمل </p>
                      </Link>
                    </div>
                  )}
                </div>

{project?.projectLink ? (
          <div className="overlay-link">
                    <Link
                      className="to-web-link"
                      to={project?.projectLink}
                      target="_blank"
                    >
                      <FaLink />
                      <p> رؤيه العمل </p>
                    </Link>
          </div>
        ) : (
          <div className="overlay-link">
            <p style={{color: "#666"}}><FiAlertTriangle /> غير متاح للمشاهده</p>
          </div>
        )}

                <div className="card-description">
                  <p>{project?.projectdetails}</p>
                  <div className="realt_servies">
                    <div className="row">
                      {/* {item_decribe.map((item, i) => {
                        return (
                          <div className="col-6" key={item}>
                            <div className="feat-ser">
                              <span></span>

                              <h6 className="h6">{item}</h6>
                            </div>
                          </div>
                        );
                      })} */}
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <span>
                      <ReactStars
                        count={5}
                        size={18}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="back-to-product">
                <Link to="/our-work">
                  {" "}
                  <HiOutlineArrowNarrowLeft /> جميع الاعمال
                </Link>
              </div>
              <div className="single-product-comment">
                <h4>هل هذا يناسبك</h4>
                <form onSubmit={onsubmit_Form} className="single-form">
                  <div
                    className="inpu-parent"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="form-group">
                      <input
                       
                        type="name"
                        name="name"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        required
                        placeholder="الاسم"
                        value={message_Fit.name}
                        onChange={handelInput}
                      />
                    </div>

                    <div className="form-group">
                      <input
                   
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        required
                        placeholder="الايميل"
                        onChange={handelInput}
                        value={message_Fit.email}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        
                        type="phone"
                        name="phone"
                        className="form-control"
                        id="phone"
                        aria-describedby="emailHelp"
                        required
                        placeholder="الموبايل"
                        onChange={handelInput}
                        value={message_Fit.phone}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        defaultValue={project?.projectName}
                        type="text"
                        name="project"
                        className="form-control"
                        id="project"
                        disabled="disabled"
                      />
                    </div>
                  </div>
                  <div className="form-group" style={{ width: "100%" }}>
                    <textarea
                      onChange={handelInput}
                  
                      required
                      name="message"
                      id="message"
                      placeholder="كيف يمكننا مساعدتك"
                      value={message_Fit.message}
                    ></textarea>
                  </div>

                  <div className="single-product-buttons">
                    <button type="submit" className="btn">
                   إرسال
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
