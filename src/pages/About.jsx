import Lottie from 'lottie-react';
import React from 'react';
import fries from '../assets/fries.json'

const About = () => {
  return (
    <div>
      <section className='min-h-[100vh] text-white'>
      <div className="container">
      <h1 className='text-center text-4xl font-rich' id="topic">All <span className='text-orange-700'>About Us</span></h1>
      <div className="row flex justify-center items-center flex-wrap">
      <div className="col-lg-6 col-md-6 ">
        <Lottie animationData={fries}></Lottie>
        </div>
        <div className="col-lg-6 col-md-6  p-4 float-right">
            <h1 className='font-rich text-4xl  sm:text-5xl'>We Deliver you the <br /> Most delicious & <br /> healthy food Ever.</h1>
            <br />
            <p className='text-justify font-sans'>Welcome to Foodies, your go-to platform for delicious meals delivered straight to your door. We partner with top local restaurants to bring you a wide variety of cuisines, ensuring fast and reliable service. Enjoy fresh, high-quality food from the comfort of your home with just a few clicks! </p><br />
            <button className='bg-orange-700 p-1.5 rounded font-rich'>Book A Table</button>
        </div>
       
      </div>

      </div>
      </section>
    </div>
  );
}

export default About;
