// import React from 'react';
// import { GiFruitBowl } from "react-icons/gi";
// import { FaAward } from "react-icons/fa6";
// import { MdSupportAgent } from "react-icons/md";
// import { MdDeliveryDining } from "react-icons/md";
// import nv from '../assets/images/nv.webp'
// import v from '../assets/images/v.jpg';
// import egg from '../assets/images/egg.jpg';

// const Menu = () => {
//   return (
//     <div>
//       <section>
//         <div className="container text-white">
//         <h1 className='text-center text-4xl font-rich' id="topic">Our Major <span className='text-orange-700'>Categories</span></h1>
//         <div className="container mt-5 text-white">
//             <div className="row mt-5">
//                 <div className="cards d-flex justify-content-evenly flex-wrap gap-4">
//                     <div className="card bg-orange-700" data-aos="fade-up"  data-aos-duration="1000" style={{width:'14rem',height:"4.7cm"}}>
//                         <div className="card-img-top">
//                             <div className="rounded rounded-5  flex justify-center items-center" id="box">
//                               <img className="rounded h-[3.5cm]" src={nv}></img>
//                             </div>
//                         </div>
//                         <div className="card-body text-center">
//                             <h5 className='font-rich'><b>NON VEGETERIAN</b></h5>
//                         </div>
//                     </div>
//                     <div className="card bg-orange-700"  data-aos="fade-up" data-aos-duration="1000" style={{width:'14rem',height:"4.7cm"}}>
//                         <div className="card-img-top">
//                             <div className="rounded rounded-5  flex justify-center items-center" id="box">
//                               <img className='rounded h-[3.5cm] w-100' src={v}></img>
//                             </div>
//                         </div>
//                         <div className="card-body text-center">
//                             <h5 className='font-rich'><b>VEGETERIAN</b></h5>
//                         </div>
//                     </div>
//                     <div className="card bg-orange-700"  data-aos="fade-up" data-aos-duration="1000"  style={{width:'14rem',height:"4.7cm"}}>
//                         <div className="card-img-top">
//                             <div className="rounded rounded-5 flex justify-center items-center">
//                                 <img className='rounded h-[3.5cm] w-100' src={egg}></img>
//                             </div>
//                         </div>
//                         <div className="card-body text-center">
//                             <h5 className='font-rich'><b>EGGITERIAN</b></h5>
//                         </div>
//                     </div>
                   
//                 </div>    
//                 <div className="foods mt-5">
//                 <h1 className='text-center text-4xl font-rich' id="topic">Our Authentic Flavourful Picks  <span className='text-orange-700'>For You</span></h1>
                  
//                 <div className="cards d-flex justify-content-evenly flex-wrap gap-4 mt-5">


//                     <div className="card bg-orange-700" data-aos="fade-up"  data-aos-duration="1000" style={{width:'14rem',height:"4.7cm"}}>
//                         <div className="card-img-top">
//                             <div className="rounded rounded-5  flex justify-center items-center" id="box">
//                               <img className="rounded h-[3.5cm]" src={nv}></img>
//                             </div>
//                         </div>
//                         <div className="card-body text-center">
//                             <h5 className='font-rich'><b>NON VEGETERIAN</b></h5>
//                         </div>
//                     </div>
                    
                    
                   
//                 </div> 
//                 </div>
//             </div>  
//       </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Menu;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { GiFruitBowl } from "react-icons/gi";
// import { FaAward } from "react-icons/fa6";
// import { MdSupportAgent } from "react-icons/md";
// import { MdDeliveryDining } from "react-icons/md";
// import nv from '../assets/images/nv.webp';
// import v from '../assets/images/v.jpg';
// import egg from '../assets/images/egg.jpg';

// const Menu = () => {
//   const [items, setItems] = useState([]);
//   const [category, setCategory] = useState('Non-Vegetarian');

//   const fetchItems = async (category) => {
//     let url = '';
//     if (category === 'Vegetarian') {
//       url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian';
//     } else if (category === 'Non-Vegetarian') {
//       url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
//     } else if (category === 'Eggiterian') {
//       url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Egg';
//     }

//     try {
//       const response = await axios.get(url);
//       setItems(response.data.meals);
//       setCategory(category);
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//     }
//   };

//   useEffect(() => {
//     // Fetch non-vegetarian (chicken) items by default on component mount
//     fetchItems('Non-Vegetarian');
//   }, []);

//   return (
//     <div>
//       <section>
//         <div className="container text-white">
//           <h1 className='text-center text-4xl font-rich' id="topic">Our Major <span className='text-orange-700'>Categories</span></h1>
//           <div className="container mt-5 text-white">
//             <div className="row mt-5">
//               <div className="cards d-flex justify-content-evenly flex-wrap gap-4">
//                 <div
//                   className="card bg-orange-700"
//                   data-aos="fade-up"
//                   data-aos-duration="1000"
//                   style={{width:'14rem',height:"4.7cm"}}
//                   onClick={() => fetchItems('Non-Vegetarian')}
//                 >
//                   <div className="card-img-top">
//                     <div className="rounded rounded-5 flex justify-center items-center" id="box">
//                       <img className="rounded h-[3.5cm]" src={nv} alt="Non Vegetarian"></img>
//                     </div>
//                   </div>
//                   <div className="card-body text-center">
//                     <h5 className='font-rich'><b>NON VEGETERIAN</b></h5>
//                   </div>
//                 </div>
//                 <div
//                   className="card bg-orange-700"
//                   data-aos="fade-up"
//                   data-aos-duration="1000"
//                   style={{width:'14rem',height:"4.7cm"}}
//                   onClick={() => fetchItems('Vegetarian')}
//                 >
//                   <div className="card-img-top">
//                     <div className="rounded rounded-5 flex justify-center items-center" id="box">
//                       <img className='rounded h-[3.5cm] w-100' src={v} alt="Vegetarian"></img>
//                     </div>
//                   </div>
//                   <div className="card-body text-center">
//                     <h5 className='font-rich'><b>VEGETERIAN</b></h5>
//                   </div>
//                 </div>
//                 <div
//                   className="card bg-orange-700"
//                   data-aos="fade-up"
//                   data-aos-duration="1000"
//                   style={{width:'14rem',height:"4.7cm"}}
//                   onClick={() => fetchItems('Eggiterian')}
//                 >
//                   <div className="card-img-top">
//                     <div className="rounded rounded-5 flex justify-center items-center">
//                       <img className='rounded h-[3.5cm] w-100' src={egg} alt="Eggiterian"></img>
//                     </div>
//                   </div>
//                   <div className="card-body text-center">
//                     <h5 className='font-rich'><b>EGGITERIAN</b></h5>
//                   </div>
//                 </div>
//               </div>
//               <div className="foods mt-5">
//                 <h1 className='text-center text-4xl font-rich' id="topic">Our Authentic Flavourful Picks <span className='text-orange-700'>For You</span></h1>
//                 <div className="cards d-flex justify-content-evenly flex-wrap gap-4 mt-5">
//                   {items.length > 0 && items.map(item => (
//                     <div className="card bg-orange-700" data-aos="fade-up" data-aos-duration="1000" style={{width:'14rem',height:"4.7cm"}} key={item.idMeal}>
//                       <div className="card-img-top">
//                         <div className="rounded rounded-5 flex justify-center items-center" id="box">
//                           <img className="rounded h-[3.7cm] w-full" src={item.strMealThumb} alt={item.strMeal}></img>
//                         </div>
//                       </div>
//                       <div className="card-body text-center">
//                         <h5 className='font-rich'><b>{item.strMeal}</b></h5>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Menu;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GiFruitBowl } from "react-icons/gi";
import { FaAward } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import nv from '../assets/images/nv.webp';
import v from '../assets/images/v.jpg';
import aos from 'aos'
import seafood from '../assets/images/egg.jpg'; // Updated import for seafood image

const Menu = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('Non-Vegetarian');

  const fetchItems = async (category) => {
    let url = '';
    if (category === 'Vegetarian') {
      url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian';
    } else if (category === 'Non-Vegetarian') {
      url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
    } else if (category === 'Seafood') { // Updated category name
      url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'; // Updated API category
    }

    try {
      const response = await axios.get(url);
      setItems(response.data.meals);
      setCategory(category);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    // Fetch non-vegetarian (chicken) items by default on component mount
    fetchItems('Non-Vegetarian');
  }, []);

  return (
    <div>
      <section className='bg-black min-h-auto'>
        <div className="container text-white">
          <h1 className='text-center text-4xl font-rich' id="topic">Our Major <span className='text-orange-700'>Categories</span></h1>
          <div className="container mt-5 text-white">
            <div className="row mt-5">
              <div className="cards d-flex justify-content-evenly flex-wrap gap-4">
                <div
                  className="card bg-orange-700"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  style={{width:'14rem',height:"4.7cm"}}
                  onClick={() => fetchItems('Non-Vegetarian')}
                >
                  <div className="card-img-top">
                    <div className="rounded rounded-5 flex justify-center items-center" id="box">
                      <img className="rounded h-[3.5cm]" src={nv} alt="Non Vegetarian"></img>
                    </div>
                  </div>
                  <div className="card-body text-center">
                    <h5 className='font-rich'><b>NON VEGETERIAN</b></h5>
                  </div>
                </div>
                <div
                  className="card bg-orange-700"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  style={{width:'14rem',height:"4.7cm"}}
                  onClick={() => fetchItems('Vegetarian')}
                >
                  <div className="card-img-top">
                    <div className="rounded rounded-5 flex justify-center items-center" id="box">
                      <img className='rounded h-[3.5cm] w-100' src={v} alt="Vegetarian"></img>
                    </div>
                  </div>
                  <div className="card-body text-center">
                    <h5 className='font-rich'><b>VEGETERIAN</b></h5>
                  </div>
                </div>
                <div
                  className="card bg-orange-700"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  style={{width:'14rem',height:"4.7cm"}}
                  onClick={() => fetchItems('Seafood')}
                >
                  <div className="card-img-top">
                    <div className="rounded rounded-5 flex justify-center items-center">
                      <img className='rounded h-[3.5cm] w-100' src={seafood} alt="Seafood"></img>
                    </div>
                  </div>
                  <div className="card-body text-center">
                    <h5 className='font-rich'><b>SEAFOOD</b></h5>
                  </div>
                </div>
              </div>
              <div className="foods mt-5">
                <h1 className='text-center text-4xl font-rich' id="topic">Our Authentic Flavourful Picks <span className='text-orange-700'>For You</span></h1>
                <div className="cards d-flex justify-content-evenly flex-wrap gap-4 mt-5">
                  {items.length > 0 && items.map(item => (
                    <div className="card bg-orange-700" data-aos="fade-up" data-aos-duration="1000" style={{width:'14rem',height:"5.3cm"}} key={item.idMeal}>
                      <div className="card-img-top">
                        <div className="rounded rounded-5 flex justify-center items-center" id="box">
                          <img className="rounded h-[3.7cm] w-full" src={item.strMealThumb} alt={item.strMeal}></img>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <h5 className='font-rich'><b>{item.strMeal}</b></h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu;
