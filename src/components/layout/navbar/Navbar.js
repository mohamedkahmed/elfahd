import { useLocation, NavLink, Link } from "react-router-dom";
import "./Navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import logo from  "../../pages/images/alfahad3.png"
import { useRef } from "react";
import { useEffect } from "react";

const Navbar = () => {
const btn = useRef(null);

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

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const menuBtn = btn.current;
    if (menuBtn) {
      if(menuBtn.getAttribute('aria-expanded') == 'true'){
        menuBtn?.click();
      }
    }
  })

  return (
    <nav
      className={
        location.pathname === "/"
          ? "navbar navbar-expand-lg"
          : "navbar navbar-expand-lg active"
      }
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          {" "}
          <img
            className="logo"
            src={logo}
            alt="alfahad"
            loading="lazy"
            width={180}
            height={170}
          />{" "}
        </Link>
    
        <button
        ref={btn}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <AiOutlineMenu className="icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navbarlinks.map((item) => {
              return (
                <li className="nav-item" key={item.id}>
                  <NavLink className="nav-link" to={item.href}>
                    {item.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="langs">
         
            <Link to="contact"> <span>أبدا مشروعك</span> </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
