import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import nw from '../assets/images/nw.webp';
import london from '../assets/images/london.jpeg';
import chennai from '../assets/images/chennai.jpeg';

const Location = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Animation happens only once
      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing type
      // Add other configuration options as needed
    });
  }, []);

  return (
    <div>
      <section>
        <div className="container">
          <h1 className='text-center text-white text-4xl font-rich' id="topic">Our Global <span className='text-orange-700'>Locations</span></h1>

          <div className="cards flex justify-evenly flex-wrap mb-5">
            <div className="card w-[18rem] mt-5" data-aos="fade-up">
              <div className="card-img-top">
                <img src={nw} alt="New York" className='rounded-4xl h-[5cm] w-100' />
              </div>
              <div className="card-body text-center">
                <h1 className='font-rich text-3xl'>New York</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa nostrum non nam iste.</p>
                <div className="btns flex justify-evenly mt-3">
                  <button className='bg-black text-white p-1 w-24 rounded-3'>Reviews</button>
                  <button className="bg-black text-white p-1 w-24 rounded-3">Direction</button>
                </div>
              </div>
            </div>

            <div className="card w-[18rem] mt-5" data-aos="fade-up">
              <div className="card-img-top">
                <img src={london} alt="London" className='rounded-4xl h-[5cm] w-100' />
              </div>
              <div className="card-body text-center">
                <h1 className='font-rich text-3xl'>London</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa nostrum non nam iste.</p>
                <div className="btns flex justify-evenly mt-3">
                  <button className='bg-black text-white p-1 w-24 rounded-3'>Reviews</button>
                  <button className="bg-black text-white p-1 w-24 rounded-3">Direction</button>
                </div>
              </div>
            </div>

            <div className="card w-[18rem] mt-5" data-aos="fade-up">
              <div className="card-img-top">
                <img src={chennai} alt="Chennai" className='rounded-4xl h-[5cm] w-100' />
              </div>
              <div className="card-body text-center">
                <h1 className='font-rich text-3xl'>Chennai</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa nostrum non nam iste.</p>
                <div className="btns flex justify-evenly mt-3">
                  <button className='bg-black text-white p-1 w-24 rounded-3'>Reviews</button>
                  <button className="bg-black text-white p-1 w-24 rounded-3">Direction</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Location;
