import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import chef from '../assets/chef.json'
import fries from '../assets/fries.json'
import foodies from '../assets/foodies.json'
import Lottie from 'lottie-react'

const Hero = () => {
  return (
    <div>
    <section className='pt-0 bg-black'>
      <div className="container pt-5">
        <div className="row d-flex justify-center items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <Lottie animationData={chef}></Lottie>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-white font-rich">
                <h1 className='text-5xl'><span className='text-orange-700'>Fast</span>est <br />Delivery & <span className='text-orange-700'>Easy</span> Pickup.!</h1><br />
                <p className='font-rich leading-tight'>Lorem shiva dolor sit amet consectetur adipisicing elit. Ea eos sed odit, modi, cum nostrum aliquid non est asperiores enim deserunt ipsa ut officiis inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reprehenderit quidem nam.</p><br />
               <div className="btns">
               <button className='text-white bg-orange-700 p-2  rounded-3xl'>Order Now</button>
               
               </div>
              
            </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Hero;
