import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsCard.scss";
import { useGlobalContext } from "../../../context/context";

const ProjectsCard = (props) => {
  const { myData } = useGlobalContext();
  const { grid } = props;
  

  return (
    <React.Fragment>
      {myData.map((item) => {
        return (
          <div
            key={item.id}
            className={grid ? ` col-${grid} ` : `col-lg-4 col-md-6 col-sm-12`}
          >
            <article className="card">
              <div className="temporary_image">
                <img
                  loading="lazy"
                  className="img"
                  src={item?.image}
                  alt={item?.projectName}
                />
              </div>
              <div className="card_content">
                <span className="card_title">{item?.projectName}</span>
                <span className="card_subtitle">
                  {item?.projectdetails.slice(0, 70)}...
                </span>
                <Link className="link_to" to={`/SingleProduct/${item.id}`}>
                 رؤيه المزيد
                </Link>
              </div>
            </article>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ProjectsCard;
