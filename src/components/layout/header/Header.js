import Hero from "../hero/Hero";
import "./Header.scss";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
const Header = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
const downHandelar = () => {
    window.scrollTo({
        top: 2400,
        behavior:"smooth"
    })
}
  return (
    <>
      <header className="header">
        <div className="scroll-down">
           <button onClick={downHandelar}><HiOutlineArrowNarrowDown /></button>
        </div>
        <section className="background-trs">
        <Particles 
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
            color: {
                value: "#161c26",
            },
        },
        style:{
          width: "100%",
          height: "120vh",
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
                value: "#7e7e7e",
            },
            links: {
                color: "#7e7e7e",
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
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1000,
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
        detectRetina: true,
    }}
      
      />
        </section>
        <div className="container">
          <Hero />
        </div>
      </header>
    </>
  );
};

export default Header;
