import React from 'react'
import { skills } from '../constants'
import { experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section className='max-container '>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Sivasankar</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>I am a Fullstack developer from Tamil Nadu, India. I build web applications for Fun.</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div title={skill.name} className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
            <h3 className='subhead-text'>Experience</h3>
            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
              <p>I've experience of working under IIT professors and doing them projects. I am a fresher, and looking for Industrial experience.</p>
            </div>

            <div className='mt-12 flex'>
              <VerticalTimeline>
                {experiences.map((experience) => (
                  <VerticalTimelineElement key={experience.company_name} 
                  icon={<div className='flex justify-center items-center w-full h-full'>
                    <img src={experience.icon} alt={experience.company_name} className='w=[60%] h-60% object-contain' />
                  </div>} 
                  iconStyle={{background: experience.iconBg}} contentStyle={{borderBottom: '8px', borderStyle: 'solid', borderBottomColor: experience.iconBg, boxShadow: 'none'}}
                  date={experience.date}  
                  >
                    <div>
                      <h3 className='text-black text-xl font-semibold'>
                        {experience.title}
                      </h3>
                      <p className='text-black-500 font-medium'>
                        {experience.company_name}
                      </p>
                    </div>
                    <ul className='my-5 ml-5 space-y-2 list-disc'>
                        {experience.points.map((point, index) => (
                          <li key={`experience-point-${index}`} className="text-black-500 font-normal pl-1 text-sm">{point}</li>
                        ))}
                    </ul>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
      </div>
    </section>
  )
}

export default About