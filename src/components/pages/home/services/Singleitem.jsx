import React from 'react'
import './services.scss'

const Singleitem = ({services  , index}) => {
  
    const services_index = services[index]
    const my_Expoler = services_index?.knowMore
  
  return (
    <div className='col-8'>
    <div className="content_items">
    <h5 className='head-serv'>{services_index?.title}</h5>
            <p >{services_index?.details}</p>
            <div className="realt_servies">
              <h4>المزيد عن الخدمة</h4>

               <div className="row">
                    {
                        my_Expoler?.map((item) => {
                            return (
                                <div className="col-6" key={item}>
                                        <h5 className='h5'>{item}</h5>
                                </div>
                            )
                        })
                    }
                  
                   
               </div>
            </div>
    </div>
    
    </div>
  )
}

export default Singleitem
