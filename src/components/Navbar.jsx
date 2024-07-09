import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from '../components/Hero';
import Contact from '../pages/Contact';
import Menu from './Menu';
import About from '../pages/About';
import Location from '../pages/Location';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Router>
        <nav className="bg-white shadow-md fixed w-full z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-900">Foodies</Link>
              </div>
              <div className="hidden md:flex items-center">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link to="/menu" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Menu</Link>
                  <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                  <Link to="/locations" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Locations</Link>
                  <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                </div>
                <div className="ml-4">
                  <Link to="/login" className="bg-orange-700 p-2 font-rich rounded-lg text-white">Login/Signup</Link>
                </div>
              </div>
              <div className="flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-200 transform"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150 transform"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-full"
          >
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" onClick={handleLinkClick} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                <Link to="/menu" onClick={handleLinkClick} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Menu</Link>
                <Link to="/about" onClick={handleLinkClick} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About</Link>
                <Link to="/locations" onClick={handleLinkClick} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Locations</Link>
                <Link to="/contact" onClick={handleLinkClick} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                <Link to="/login" onClick={handleLinkClick} className="bg-orange-700 p-2 font-rich rounded-lg text-white block mt-4">Login/Signup</Link>
              </div>
            </div>
          </Transition>
        </nav>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Navbar;


// import React, { useState } from 'react';
// import { Transition } from '@headlessui/react';
// import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Hero from '../components/Hero';
// import Contact from '../pages/Contact';
// import Menu from './Menu';
// import About from '../pages/About';
// import Location from '../pages/Location';
// import Login from '../pages/Login';
// import Signup from '../pages/Signup';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <Router>
//         <nav className="bg-white shadow-md fixed w-full z-10">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16">
//               <div className="flex items-center">
//                 <Link to="/" className="text-xl font-bold text-gray-900">Foodies</Link>
//               </div>
//               <div className="hidden md:flex items-center">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                   <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
//                   <Link to="/menu" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Menu</Link>
//                   <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</Link>
//                   <Link to="/locations" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Locations</Link>
//                   <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
//                 </div>
//               </div>
//               <div className="flex md:hidden">
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   type="button"
//                   className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                   aria-controls="mobile-menu"
//                   aria-expanded="false"
//                 >
//                   <span className="sr-only">Open main menu</span>
//                   {!isOpen ? (
//                     <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                     </svg>
//                   ) : (
//                     <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           <Transition
//             show={isOpen}
//             enter="transition ease-out duration-200 transform"
//             enterFrom="opacity-0 -translate-y-full"
//             enterTo="opacity-100 translate-y-0"
//             leave="transition ease-in duration-150 transform"
//             leaveFrom="opacity-100 translate-y-0"
//             leaveTo="opacity-0 -translate-y-full"
//           >
//             <div className="md:hidden" id="mobile-menu">
//               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <Link to="/" onClick={handleLinkClick} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
//                 <Link to="/menu" onClick={handleLinkClick} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Menu</Link>
//                 <Link to="/about" onClick={handleLinkClick} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About</Link>
//                 <Link to="/locations" onClick={handleLinkClick} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Locations</Link>
//                 <Link to="/contact" onClick={handleLinkClick} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
//                 <Link to="/login" onClick={handleLinkClick} className="bg-orange-700 p-2 font-rich rounded-lg text-white block mt-4">Login/Signup</Link>
//               </div>
//             </div>
//           </Transition>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/locations" element={<Location />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path='/signup' element={<Signup />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default Navbar;
