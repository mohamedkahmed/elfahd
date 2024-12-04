import "./Hero.scss";
import { Link } from "react-router-dom";
import image1 from  "../../pages/images/her-update.webp"
import { useFetchHomeSection } from "../../../services/authfetch";
import Loading from './../../loading/Loading';
const Fade = () => {
 const {loading  , homeHero2} =  useFetchHomeSection()
 if(loading){
  return <Loading />
 }
  return (
    <div className="waveWrapper waveAnimation">
      <div className="container">
        <div id="title">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="text-title">
                <p>

{
  homeHero2[0]?.details
}                </p>
                <div>
                  <Link className="bages_links" to="contact">
                    <span>تواصل معنا"</span>
                  </Link>
                  <Link className="bages_links" to="about">
                   <span>من نحن</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="ava-img">
                <img src={homeHero2[0]?.image1}  alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fade;
