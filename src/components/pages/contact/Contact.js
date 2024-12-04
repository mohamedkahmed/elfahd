import React from "react";
import "./contact.scss";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import { useState } from "react";
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import Coustomheader from  "../../coustom_header/Coustomheader.jsx"
import { Helmet } from "react-helmet-async";
const Contact = () => {

  const [customer_data, setcustomer_data] = useState(
    {
    
    name: "",
    email: "",
    phone: "",
    message: "" // Corrected key from "massage" to "message"
  }
  );
  const navgaion = useNavigate()
  const issubmiting = navgaion.state === "submiting"
  const inputHandelar = (e) => {
    const id = e.target.id
    const value = e.target.value
    setcustomer_data({...customer_data,[id]:value})
   
  }
 const handelFormsubmit = (e) => {
  e.preventDefault()

  try {
   
    emailjs.send("service_xzql5hd","template_gi81njr" , customer_data , "LavrD-ScxjLLhT8mr");
    setcustomer_data(
      {
        name: "",
        email: "",
        phone: "",
        message: "" // Corrected key from "massage" to "message"
      }
    
    
    )
   
 
    toast.success("thanks for Your Message")
    return navgaion("/") 
   
  } catch (error) {
 
  return  toast.error(error)
  }

 }

  return (
    <React.Fragment>
      <Helmet>
              <title>Contact</title>
              <meta name='description'content='Contact all contact method to codezen feel free to contact with us for any project you need' />
              <link rel='canonical' href='/contact' />
      </Helmet>
      <BreadCrumb title="تواصل معنا" />
      <div className="contact">
<Coustomheader title ="تواصل معنا" />
        <div className="container">
          <div className="row">
    
            <div className="col-lg-6 col-12">
              <div className="content">
                <p> * ارسل الينا نموذج الطلب وسيتم الرد عليك في اسرع وقت </p>
                <form onSubmit={handelFormsubmit}>
                  <div className="input_section">
                    <label className="lable" htmlFor="name">
                    الإسم*
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={inputHandelar}
                      value={customer_data.name}
                      id="name"
                      placeholder="الإسم"
                      required
                    />
                  
                  </div>
                  <div className="input_section">
                    <label className="lable" htmlFor="phone">
                    الموبايل*
                    </label>
                    <input
                      type="text"
                      name="phone"
                      onChange={inputHandelar}
                      value={customer_data.phone}
                      id="phone"
                      placeholder="الموبايل"
                      required
                    />
                  </div>
                  <div className="input_section">
                    <label className="lable" htmlFor="email">
                   الإيميل*
                    </label>
                    <input
                      type="text"
                      name="email"
                      onChange={inputHandelar}
                      value={customer_data.email}
                      id="email"
                      placeholder="الإيميل"
                      required
                    />
                  </div>

                  <div className="input_section">
                    <label className="lable" htmlFor="massage">
                    كيف يمكننا خدمتك ؟"
                    </label>
                    <textarea
                      className="massage"
                      name="message"
                      onChange={inputHandelar}
                      id="message"
                      value={customer_data.message}
                    
                    ></textarea>
                  </div>
                  <button type="submit"> إرسال</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
