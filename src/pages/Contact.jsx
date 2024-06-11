import React, { useState } from 'react';

import contact from '../assets/contact.json'
import Lottie from 'lottie-react';


const Contact = () => {

const[username,setUsername]=useState('');
const[email,setEmail]=useState('');
const[Query,setQuery]=useState('');

  return (
    <div>
         <section id='contact' className='flex justify-center items-center' style={{height:'100vh',paddingTop:"2cm"}}>
        <div className="container">
        <h1 className='text-center text-4xl font-rich text-white' id="topic">Contact <span className='text-orange-700'>Us</span></h1>
        <br></br>
      <h5 className='text-center text-light mb-4'>Feel Free to Ask me For any Queries.</h5>
      <div className="row">
      <div className="col-lg-6 col-md-6 d-flex flex-direction-column mt-5 justify-content-center order-2 mb-5"  data-aos="zoom-in-left" data-aos-duration="1000">
      <form >
                <input type="text" onChange={e => setUsername(e.target.value)} className="w-full px-6 py-3 mb-2 border text-black border-slate-600 rounded-lg font-medium h-[1cm]" placeholder="Username" />
                <input type="text" onChange={e => setEmail(e.target.value)} className="w-full px-6 py-3 mb-2 border text-black border-slate-600 rounded-lg font-medium h-[1cm]" placeholder="Email" />
                <input type="text" onChange={e => setQuery(e.target.value)} className="w-full px-6 py-3 mb-2 border text-black border-slate-600 rounded-lg font-medium h-[2cm]" placeholder="Queries" />
                <input type="submit" value="SIGN UP" className="text-black bg-orange-500 hover:text-black text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]" />
              </form>
      </div>
      <div className="col-md-6 col-lg-6 order-1 mt-0"  data-aos="zoom-in-right" data-aos-duration="1000">
          <Lottie animationData={contact} style={{height:'9cm'}}></Lottie>
      </div>
      </div>
      
      </div>
      </section>
    </div>
  );
}

export default Contact;
