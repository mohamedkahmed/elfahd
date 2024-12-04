import React from "react";
import "./Projects.scss";
import { Link } from "react-router-dom";
import Coustomheader from "../../../coustom_header/Coustomheader.jsx";
import { useGlobalContext } from "../../../context/context.jsx";
const Projects = () => {
  const [grid2, setGrid] = React.useState(0);
  const { unique_Data, FilterateItems, catgery_active, myData  , loadingprojects} =
    useGlobalContext();
 
if(loadingprojects) {
  return <h2>loadding</h2>
}
  return (
    <section className="projects">
      <div className="container">
        <Coustomheader title="اعمالنا" />
        <div className="filter-data">
          <div className="unqe-catgery">
            {unique_Data.map((item) => {
              return (
                <button
                  key={item}
                  onClick={() => FilterateItems(item)}
                  className={
                    catgery_active === item ? "btn-more active" : "btn-more"
                  }
                >
                  {" "}
                  {item}
                </button>
              );
            })}
          </div>
          <div className="sort-img-ch">
            <p>
              <span className="project_lenght">( {myData.length})</span>
             المشاريع المكتملة
            </p>
            <div className="sort-img-part">
              <img
                className={grid2 === 4 ? "active" : " "}
                onClick={() => {
                  setGrid(4);
                }}
                src="images/gr3.svg"
                alt="sort"
              />
              <img
                className={grid2 === 6 ? "active" : " "}
                onClick={() => {
                  setGrid(6);
                }}
                src="images/gr2.svg"
                alt="sort"
              />
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="row">
            {myData.slice(0, 6).map((item) => {
              return (
                <div
                  className={
                    grid2 ? ` col-${grid2} ` : `col-lg-4 col-md-6 col-sm-12`
                  }
                  key={item.id}
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
                        {item?.projectdetails?.slice(0, 70)}...
                      </span>
                      <Link
                        className="link_to"
                        to={`/SingleProduct/${item.id}`}
                      >
                       رؤية المزيد
                      </Link>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="button-countainer text-center">
        <Link className="custom-btn btn-16" to="/our-work">
          رؤية المزيد !
        </Link>
      </div>
    </section>
  );
};

export default Projects;
