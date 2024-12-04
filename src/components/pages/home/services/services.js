import React, { useState } from 'react';
import Singleitem from './Singleitem.jsx';
import Coustomheader from '../../../coustom_header/Coustomheader.jsx';


import './services.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { useFetchHomeServices } from '../../../../services/authfetch.jsx';
SwiperCore.use([Autoplay,  Pagination]);
const Services = () => {
 const {loading, homeservicesData} =  useFetchHomeServices()
 

  const unque_headers = [...new Set(homeservicesData?.map((serv) => serv.title))];
  const [index, setindex] = useState(0);

  return (
    <React.Fragment>
      <div className='servies'>
        <div className="container">
          <Coustomheader title="خدماتنا" />
          <div className="servies_container">
            <div className="row">
              <div className="col-4">
                <div className="catgerys">
                  {unque_headers.map((header, i) => (
                    <button
                      onClick={() => setindex(i)}
                      className={index === i ? 'catge-headers active_catgery' : 'catge-headers'}
                      key={header}
                    >
                      {header}
                    </button>
                  ))}
                </div>
                
              </div>
              <Singleitem services={homeservicesData} index={index} />
            </div>
          </div>
        </div>
      </div>
      <div className="slide_servies">
        <div className="container">
          <Coustomheader title="خدماتنا" />
          <Swiper
            autoplay={{ delay: 3000 }}
            
            pagination={{ clickable: true }} // Add pagination configuration
            className="swiper-container"
            spaceBetween={50}
            slidesPerView={1}
          >
            {homeservicesData?.map((service) => (
              <SwiperSlide key={service.id} style={{ width: "100%" }}>
                <div className="servies_item">
                  <h3>{service?.title}</h3>
                  <p>{service?.details}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </React.Fragment>
  );
};

export default Services;