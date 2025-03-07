import image from '../Pictures/Logo.png'
import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <div className='flex bg-gradient-to-b from-[#95d2eb] to-[#E6F7FF] w-full '>
    <div className=" min-h-screen bg-man-pic bg-cover  items-center pl-8 pb-28 w-[70%] hidden md:flex">
        <div className=''>
        <h1 className='text-cyan-500 font-semibold text-4xl text-left drop-shadow-md'>Power Up Your Shop Management <br/>with BizPilot!</h1>
        </div>
    </div>
    <div className='md:w-[30%] w-full min-h-screen '>
        <div className='flex flex-col  items-center'> 
             <img src={image} alt='logo' className='w-[50%] '/>
             <h1 className='text-black text-lg font-bold text-center '>Hello! Registered to get Started</h1>
        </div>
        <div className='flex flex-col gap-y-3 justify-center items-center px-3  pt-[150px] '>
            <button className='bg-black text-white rounded-xl py-3 px-4 w-[70%]' onClick={() => loginWithRedirect()}>Sign Up</button>
            <button className='bg-black text-white rounded-xl py-3 px-4 w-[70%]' onClick={() => loginWithRedirect()}>Log in</button>
        </div>
      
    </div>

    </div>
  );
};

export default Signup;