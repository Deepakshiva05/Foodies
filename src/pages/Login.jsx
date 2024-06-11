// import Lottie from 'lottie-react';
// import React, { useState } from 'react';
// import login from '../assets/login.json';
// import { Link, useNavigate } from 'react-router-dom';



// const Login = () => {

//   const[email,setEmail]=useState('');
//   const[password,setPassword]=useState('');
//   const navigate=useNavigate();

//   function handleSubmit(){
//       console.log(email +""+ password);
//       navigate("/home")
//   }




//   return (
//     <div>
//       <div className="row flex justify-center items-center flex-wrap pt-5">
//         <div className="col-lg-6 col-md-6">
//             <Lottie animationData={login} className='h-[11cm] mt-[3cm] hidden sm:block'></Lottie>
//         </div>
//         <div className="col-lg-6 col-md-6 text-white">
//         <div className="max-w-[280px] mx-auto">
//         <div className="flex flex-col items-center mt-[10vh]">
//             <h2 className="mb-3 text-white  font-rich font-bold text-3xl">Log <span className='text-orange-700'>In</span> </h2>
            
//             <form onSubmit={handleSubmit}>
//                 <input type="text" onChange={e=>{setEmail(e.target.value)}} className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium h-[1cm]" placeholder="Email" />
//                 <input type="password" onChange={e=>{setPassword(e.target.value)}} className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium h-[1cm]" placeholder="Password"/>
//                 <input value="Log In" type='submit' className="text-black bg-orange-500 hover:text-black  text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"/>
//             </form>
//             <p className="text-center mt-3 text-[14px] text-orange-700">Don&#x27;t have an account? 
//                 <Link to="/signup" className="text-white">Create one</Link>
//             </p>
//             <p className="text-center mt-3 text-[14px] text-orange-700">By clicking continue, you agree to our 
//                 <a href="/terms" className="text-white">Terms of Service</a> and <a href="/privacy" className="text-gray-600">Privacy Policy</a>.
//             </p>
//         </div>
//     </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import Lottie from 'lottie-react';
import React, { useState } from 'react';
import login from '../assets/login.json';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import warn from '../assets/warn.json';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/login', {
        email: email,
        password: password,
      });
      console.log("Login successful");
      navigate("/home"); // Redirect to dashboard or another page after login
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data);
        setShowModal(true);
      } else {
        console.error("Error during login", error);
      }
    }
  };

  return (
    <div>
      <div className="row flex justify-center items-center flex-wrap pt-5">
        <div className="col-lg-6 col-md-6">
          <Lottie animationData={login} className='h-[11cm] mt-[3cm] hidden sm:block'></Lottie>
        </div>
        <div className="col-lg-6 col-md-6 text-white">
          <div className="max-w-[280px] mx-auto">
            <div className="flex flex-col items-center mt-[10vh]">
              <h2 className="mb-3 text-white font-rich font-bold text-3xl">
                Log <span className='text-orange-700'>In</span>
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-6 py-3 mb-2 border text-black border-slate-600 rounded-lg font-medium h-[1cm]"
                  placeholder="Email"
                />
                <input
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-6 py-3 mb-2 border text-black border-slate-600 rounded-lg font-medium h-[1cm]"
                  placeholder="Password"
                />
                <input
                  value="Log In"
                  type='submit'
                  className="text-black bg-orange-500 hover:text-black text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
                />
              </form>
              <p className="text-center mt-3 text-[14px] text-orange-700">
                Don&#x27;t have an account? 
                <Link to="/signup" className="text-white">Create one</Link>
              </p>
              <p className="text-center mt-3 text-[14px] text-orange-700">
                By clicking continue, you agree to our 
                <a href="/terms" className="text-white">Terms of Service</a> and 
                <a href="/privacy" className="text-gray-600">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg">
            <Lottie animationData={warn} className='h-[6cm]' />
            <p className="text-black">{errorMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-orange-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
