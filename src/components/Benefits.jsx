import React, { useEffect } from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiFruitBowl } from "react-icons/gi";
import { FaAward } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import aos from 'aos'


const Benefits = () => {

    useEffect(() => {
        AOS.init({
          duration: 1200,
          once: true,
        });
      }, []);

  return (
    <div>
      <section className='min-h-[100vh] relative'>
      <div className="container mt-5 text-white">
        <h1 className='text-center text-4xl font-rich' id="topic">Our Quality <span className='text-orange-700'>Services</span></h1>
            <div className="row mt-5">
                <div className="cards d-flex justify-content-evenly flex-wrap gap-4">
                    <div className="card bg-orange-700" data-aos="fade-up"  data-aos-duration="1000" style={{width:'14rem'}}>
                        <div className="card-img-top">
                            <div className="rounded rounded-5 mt-4 flex justify-center items-center" id="box">
                                <MdDeliveryDining style={{fontSize:'80px'}} id='truck'/>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h5><b>FREE DELIVERY</b></h5>
                            <p>ON ORDER OVER $100</p>
                        </div>
                    </div>
                    <div className="card bg-orange-700"  data-aos="fade-up" data-aos-duration="1000" style={{width:'14rem'}}>
                        <div className="card-img-top">
                            <div className="rounded rounded-5 mt-4 flex justify-center items-center" id="box">
                                <GiFruitBowl style={{fontSize:'80px'}} id='truck'/>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h5><b>ALWAYS FRESH</b></h5>
                            <p>FOOD WELL PACKED</p>
                        </div>
                    </div>
                    <div className="card bg-orange-700"  data-aos="fade-up" data-aos-duration="1000"  style={{width:'14rem'}}>
                        <div className="card-img-top">
                            <div className="rounded rounded-5 mt-4 flex justify-center items-center">
                                <FaAward style={{fontSize:'80px'}} id='truck'/>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h5><b>SUPERIOR QUALITY</b></h5>
                            <p>QUALITY PRODUCTS</p>
                        </div>
                    </div>
                    <div className="card bg-orange-700"  data-aos="fade-up" data-aos-duration="1000"  style={{width:'14rem'}}>
                        <div className="card-img-top">
                            <div className="rounded rounded-5 mt-4 flex justify-center items-center" id="box">
                                <MdSupportAgent style={{fontSize:'80px'}} id='truck'/>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h5><b>SUPPORT</b></h5>
                            <p>ANYTIME 24/7 SUPPORT</p>
                        </div>
                    </div>
                </div>    
            </div>  
      </div>
      </section>
    </div>
  );
}

export default Benefits;
