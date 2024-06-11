
import React, { useState } from 'react';
import login from '../assets/login.json';
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/signup', {
        username: username,
        email: email,
        password: password,
        cpassword: cpassword
      });
      console.log("Data posted successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error posting data", error);
    }
  };

  return (
    <div>
      <div className="row flex justify-center items-center flex-wrap pt-5">
        <div className="col-lg-6 col-md-6 text-white">
          <div className="max-w-[280px] mx-auto">
            <div className="flex flex-col items-center mt-[10vh]">
              <h2 className="mb-3 text-white font-rich font-bold text-3xl">Sign <span className='text-orange-700'>Up</span></h2>
              <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setUsername(e.target.value)} className="w-full px-6 py-3 mb-2 border text-black border-slate-600 rounded-lg font-medium h-[1cm]" placeholder="Username" />
                <input type="text" onChange={e => setEmail(e.target.value)} className="w-full px-6 py-3 mb-2 border text-black border-slate-600 rounded-lg font-medium h-[1cm]" placeholder="Email" />
                <input type="password" onChange={e => setPassword(e.target.value)} className="w-full px-6 py-3 mb-2 text-black border border-slate-600 rounded-lg font-medium h-[1cm]" placeholder="Password" />
                <input type="password" onChange={e => setcPassword(e.target.value)} className="w-full px-6 py-3 mb-2 text-black border border-slate-600 rounded-lg font-medium h-[1cm]" placeholder="Confirm Password" />
                <input type="submit" value="SIGN UP" className="text-black bg-orange-500 hover:text-black text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]" />
              </form>
              <p className="text-center mt-3 text-[14px] text-orange-700">Already have an account?
                <Link to="/login" className="text-white">Login Now</Link>
              </p>
              <p className="text-center mt-3 text-[14px] text-orange-700">By clicking continue, you agree to our 
                <a href="/terms" className="text-white">Terms of Service</a> and <a href="/privacy" className="text-gray-600">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <Lottie animationData={login} className='h-[11cm] mt-[3cm] hidden sm:block'></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Signup;

// import React, { useState } from 'react';
// import login from '../assets/login.json';
// import Lottie from 'lottie-react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import warn from '../assets/warn.json'

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [cpassword, setcPassword] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8000/signup', {
//         username: username,
//         email: email,
//         password: password,
//         cpassword: cpassword,
//       });
//       console.log("Data posted successfully");
//       navigate("/login");
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setErrorMessage("Email already exists");
//         setShowModal(true);
//       } else {
//         console.error("Error posting data", error);
//       }
//     }
//   };

//   return (
//     <div>
//       <div className="row flex justify-center items-center flex-wrap pt-5">
//         <div className="col-lg-6 col-md-6 text-white">
//           <div className="max-w-[280px] mx-auto">
//             <div className="flex flex-col items-center mt-[10vh]">
//               <h2 className="mb-3 text-white font-rich font-bold text-3xl">
//                 Sign <span className='text-orange-700'>Up</span>
//               </h2>
//               <form onSubmit={handleSubmit}>
//                 <input
//                   type="text"
//                   onChange={e => setUsername(e.target.value)}
//                   className="w-full px-6 py-3 mb-2 border text-black border-slate-600 rounded-lg font-medium h-[1cm]"
//                   placeholder="Username"
//                 />
//                 <input
//                   type="text"
//                   onChange={e => setEmail(e.target.value)}
//                   className="w-full px-6 py-3 mb-2 border text-black border-slate-600 rounded-lg font-medium h-[1cm]"
//                   placeholder="Email"
//                 />
//                 <input
//                   type="password"
//                   onChange={e => setPassword(e.target.value)}
//                   className="w-full px-6 py-3 mb-2 text-black border border-slate-600 rounded-lg font-medium h-[1cm]"
//                   placeholder="Password"
//                 />
//                 <input
//                   type="password"
//                   onChange={e => setcPassword(e.target.value)}
//                   className="w-full px-6 py-3 mb-2 text-black border border-slate-600 rounded-lg font-medium h-[1cm]"
//                   placeholder="Confirm Password"
//                 />
//                 <input
//                   type="submit"
//                   value="SIGN UP"
//                   className="text-black bg-orange-500 hover:text-black text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
//                 />
//               </form>
//               <p className="text-center mt-3 text-[14px] text-orange-700">
//                 Already have an account?
//                 <Link to="/login" className="text-white">Login Now</Link>
//               </p>
//               <p className="text-center mt-3 text-[14px] text-orange-700">
//                 By clicking continue, you agree to our
//                 <a href="/terms" className="text-white"> Terms of Service </a> and
//                 <a href="/privacy" className="text-gray-600"> Privacy Policy</a>.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-6 col-md-6">
//           <Lottie animationData={login} className='h-[11cm] mt-[3cm] hidden sm:block'></Lottie>
//         </div>
//       </div>
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-5 rounded-lg">
//             <Lottie animationData={warn} className='h-[6cm]' />
//             <p className="text-black">{errorMessage}</p>
//             <button
//               onClick={() => setShowModal(false)}
//               className="bg-orange-500 text-white py-2 px-4 rounded"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Signup;
