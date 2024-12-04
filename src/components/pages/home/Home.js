import { BsCheck2Square } from "react-icons/bs";
import "./Home.scss";
import Header from "../../layout/header/Header";
import Servies from "./services/services";
import Projects from "./projects/Projects";
import Coustomheader from "../../coustom_header/Coustomheader.jsx";
import { Helmet } from "react-helmet-async";
import { useFetchHomeAbout, useFetchHomeHero } from "../../../services/authfetch.jsx";

const Home = () => {
const {loading, homeAboutData} = useFetchHomeAbout()
const {homeHero} = useFetchHomeHero()
  return (
    <>
      <Helmet>
        <title>Alfahad develop</title>
        <meta
          name="description"
          content="Home page this home for ALFAHAD included every thing about ALFAHAD project and whor are and how we work"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      {/* header */}

      <Header />

      {/* Home Wrapper 1 */}

      <Servies />

      {/* about us */}

      <div className="container">
        <div className="about-up">
          <Coustomheader title="من نحن" />
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="image">
                <img
                  src={homeAboutData[0]?.image}
                  alt="about-img"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="text">
                <h4>{homeAboutData[0]?.title}</h4>
                <p>{homeAboutData[0]?.about}</p>
                {/* <p>{t("about.about_text_2")}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* projects */}

      <Projects />

      {/* Home Wrapper 2 */}

      <section className="home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-section">
                <h1 className="title-section">{homeHero[0]?.title}</h1>
                <p>{homeHero[0]?.details}</p>
                <div className="check-section">
                  <div className="check check-one">
                    {
                      homeHero[0]?.stepsProject?.map((item) => {
                        return (
                          <div key={item}>
                          <BsCheck2Square />
                          <span>{item}</span>
                        </div>
                        )
                      })
                    }
                 
              
                </div>
              </div>
              </div>
            </div>
            <div className=" col-lg-6  col-md-6 col-12">
              <div className="image-section">
                <img
                  src={homeHero[0]?.image1}
                  alt="design"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
