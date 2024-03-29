import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../constants'
import { FaArrowRightLong } from "react-icons/fa6";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Explore my projects page, a testament to my proficiency as a full-stack developer. Each endeavor reflects a commitment to innovative solutions and showcases the depth of my technical expertise. Dive into a curated collection that underscores my dedication to excellence in web development.</p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full overflow-hidden bg-gray-200 drop-shadow-lg rounded-lg' key={project.name}>
            <div className='block-container w-full  mb-5'>
              {/* <div className={`btn-back rounded-xl ${project.theme}`} /> */}
              {/* <div className='btn-front rounded-xl flex justify-center items-center'> */}
                {/* <img src={project.iconUrl} alt={"Project icon"} className='w-1/2 h-1/2 object-contain' /> */}
                <img src={project.iconUrl} alt={"Project image"} className=' object-cover w-full h-60' />
              {/* </div>   */}
            </div>

            <div className='mt-5 flex flex-col px-5 py-5'>
              <h4 className='text-2xl font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-600'>
                {project.description}
              </p>
              <p className='mt-5 text-slate-800'>
                <span className='font-semibold'>Tech stack: </span>{project.techstack}
              </p>
              <div className='mt-8  gap-2 bg-gray-700 rounded-lg py-2 px-4  w-max'>
                <Link to={project.link} target="_blank" rel='noopener noreferrer' className='group font-semibold text-white flex items-center'>
                  <div className='flex'>
                <p>Go to Site </p> 
                <div className='ml-2 flex items-center group-hover:translate-x-1.5 transition-all ease-in-out'><FaArrowRightLong /></div>
                </div>
                </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects