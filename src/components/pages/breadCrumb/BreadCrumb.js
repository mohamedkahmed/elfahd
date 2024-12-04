import React from "react";
import "./BreadCrumb.scss";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const BreadCrumb = (props) => {
  const { title } = props;
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <div className="breadcrumb-warraper">
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
            color: {
                value: "transparent",
            },
        },
        style:{
          width: "100%",
          height: "250px",
          position: "relative",
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: .4,
                },
            },
        },
        particles: {
            color: {
                value: "#000",
            },
            links: {
                color: "#000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 600,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        interface : {
          height: "400px",
          width: "100%"
      },
      width: "100%",
      height : "400px",
        detectRetina: true,
    }}
      
      />
      <div className="container">
        <div className="breadcrumb-item">
          <Link className="dir-m bages_links" to="/">
          <IoIosHome />  الرئيسية
          </Link>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
