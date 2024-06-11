import React from 'react';
import logo from '../assets/images/nv.webp';
import star from '../assets/images/star.png';

const Testimonials = () => {
  return (
    <div>
      <section>
        <div className="container">
        <h1 className='text-center text-white text-4xl font-rich' id="topic">Our Customer <span className='text-orange-700'>Says</span></h1>

            <div className="cards flex justify-evenly flex-wrap mb-5">
                <div className="card w-[18rem] mt-5" data-aos="fade-up" data-aos-duration="1000">
                    
                    <div className="card-img-top">
                        <img src={logo} className='rounded-4xl'></img>
                    </div>
                <div className="card-body text-center">
                    <h1 className='font-rich text-3xl'>ArunKumar</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa nostrum non nam iste officia repellat quo consequatur.</p>
                    <div className="stars flex mt-3 ">
                        <img src={star}className='w-5'></img>
                        <img src={star}className='w-5'></img>
                        <img src={star}className='w-5'></img>
                        <img src={star}className='w-5'></img>
                        <p className='ms-5'>4 Star rating</p>
                    </div>

                </div>
                </div>
                <div className="card w-[18rem] mt-5" data-aos="fade-up" data-aos-duration="1000">
                    
                    <div className="card-img-top">
                        <img src={logo} className='rounded-4xl'></img>
                    </div>
                <div className="card-body text-center">
                    <h1 className='font-rich text-3xl'>GaneshKumar</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa nostrum non nam iste officia repellat quo consequatur.</p>
                    <div className="stars flex mt-3 ">
                        <img src={star}className='w-5'></img>
                        <img src={star}className='w-5'></img>
                        <img src={star}className='w-5'></img>
                        <img src={star}className='w-5'></img>
                        <p className='ms-5'>4 Star rating</p>
                    </div>

                </div>
                </div>
                <div className="card w-[18rem] mt-5" data-aos="fade-up" data-aos-duration="1000">
                    
                    <div className="card-img-top">
                        <img src={logo} className='rounded-4xl'></img>
                    </div>
                <div className="card-body text-center">
                    <h1 className='font-rich text-3xl'>Akash</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ipsa nostrum non nam iste officia repellat quo consequatur.</p>
                    <div className="stars flex mt-3 ">
                        <img src={star}className='w-5'></img>
                        <img src={star}className='w-5'></img>
                        <img src={star}className='w-5'></img>
                        <img src={star}className='w-5'></img>
                        <img src={star}className='w-5'></img>
                        <p className='ms-5'>5 Star rating</p>
                    </div>

                </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
