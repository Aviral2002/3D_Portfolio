import React from 'react';
import {skills, experiences} from '../constants';
import { useState } from 'react';
import CTA from '../components/CTA';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text 
         font-semibold drop-shadow'>Aviral</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>       
       Passionate electronics enthusiast in Lucknow, India,
        delving into 3D modeling, animation, web development, and robotics. 
        As a multipod, I blend technology and creativity in diverse projects.
        Outside tech realms, I find joy in lifting weights, walking to music
        , and decoding life and characters through video essays on cinema. 
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>
          My Skills
        </h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>
          Work Experience
        </h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>       
        As a devoted student, my emphasis lies in continuous learning and developing a versatile skill set. I am dedicated to self-improvement, investing time in gaining practical knowledge and honing effective communication skills to articulate ideas proficiently.
        Despite lacking official work experience, my proactive approach reflects my commitment to personal and professional growth.
        </p>
      </div>
      
      {/* Work experience timeline  */}
    
      {/* <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center
                h-full w-full'>
                  <img 
                  src={experience.icon}
                  alt={experience.company_name}
                  className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle ={{
                  background:experience.iconBg
                }}

                  contentStyle={{
                    borderBottom:'8px',
                    borderStyle: 'solid',
                    borderBlockColor:experience.iconBg,
                    boxShadow:'none'
                  }}>
                  <div className='text-black font-poppins text-xl font-semibold'> 
                    <h3>{experience.title}</h3>
                    <p className='text-black-500 font-medium font-base'
                    style={{margin:8}}>
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2 '>
                      {experience.points.map((point, index) => (
                        <li key={`experience.point-${index}`}
                         className='text-black-500/80 pl-1 font-normal text-sm'>
                          {point}
                        </li>
                      ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
      </div> */}
      </div>

      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default About