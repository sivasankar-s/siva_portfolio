import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const renderContent = {
    1: (
        <h1 className='  sm:text-xl sm:leading-snug text-center py-4 px-8 bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg text-white mx-5'>
            Hi, I am <span className='font-semibold'>Sivasankar</span> 👋 <br/><p className='mt-1'> I'm a full-stack developer passionate about innovation and dedicated to delivering excellence</p></h1>
    ),
    2: (
        // <div className='relative sm:text-xl sm:leading-snug text-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-900 pt-4 pb-6 px-8 text-white mx-5'>
        <div className='font-medium sm:text-xl text-center    mx-5 relative flex text-white flex-col gap-3 max-w-2xl pt-4 pb-12 px-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-900'>    
        Dive into my expertise as a full-stack developer, fusing innovation with excellence
            <Link to='/about' className='absolute mx-auto right-0 left-0 -bottom-5 py-2 px-4 gap-3 flex justify-center items-center group sm:w-1/2 w-[80%] bg-white border-4 border-gray-500 text-blue-600 rounded-xl '>
                <div className='flex'>
                <p>See my skills</p>
                <div className='ml-2 flex items-center group-hover:translate-x-1.5 transition-all ease-in-out'>
                <FaArrowRightLong /></div>
                </div>
                </Link>
            </div>
    ),
    3: (
        // <div className='relative sm:text-xl sm:leading-snug text-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-900 pt-4 pb-6 px-8 text-white mx-5'>
        <div className='font-medium sm:text-xl text-center    mx-5 relative flex text-white flex-col gap-3 max-w-2xl pt-4 pb-12 px-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-900'>  
            Check out my projects for innovative solutions and top-notch execution
            <Link to='/projects' className='absolute mx-auto right-0 left-0 -bottom-5 py-2 px-4 gap-3 flex justify-center items-center group sm:w-1/2 w-[80%] bg-white border-4 border-gray-500 text-blue-600 rounded-xl'>
                <div className='flex'>
                <p>View Projects</p>
                <div className='ml-2 flex items-center group-hover:translate-x-1.5 transition-all ease-in-out'>
                <FaArrowRightLong /></div>
                </div>
                </Link>
            </div>
    ),
    4: (
        // <div className='relative sm:text-xl sm:leading-snug text-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-900 pt-4 pb-7 px-8 text-white mx-5'>
        <div className='font-medium sm:text-xl text-center    mx-5 relative flex text-white flex-col gap-3 max-w-2xl pt-4 pb-12 px-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-900'>  
            For inquiries and collaboration, feel free to reach out
            <Link to='/contact' className='absolute mx-auto right-0 left-0 -bottom-5 py-2 px-4 gap-3 flex justify-center items-center group sm:w-1/2 w-[80%] bg-white border-4 border-gray-500 text-blue-600 rounded-xl'>
                <div className='flex'>
                <p>Contact</p>
                <div className='ml-2 flex items-center group-hover:translate-x-1.5 transition-all ease-in-out'>
                <FaArrowRightLong /></div>
                </div>
                </Link>
            </div>
    ),
}

const InfoBox = ({text, link, btnText}) => {
    <div>
        {text}
    </div>
}

const HomeInfo = ({currentStage}) => {
    // const [fadeIn, setFadeIn] = useState(false);
  return renderContent[currentStage] || null;
    
  
}

export default HomeInfo