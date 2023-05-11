import React from 'react'
import { content } from '../Content'

function Skills() {
    const {skills} = content;
  return (
    <section className='min-h-fit bg-bg_light_primary'>
      <div className='md:container px-5 pt-16 pb-8'>
       <h2 className='md:text-3xl text-2xl'>{skills.title}</h2>
       <h4 className='text-gray'>{skills.subtitle}</h4>
      </div>
      <div className='flex flex-wrap justify-center gap-4 pb-12'>
        {
            skills.skills_content.map((skill, i) =>(
                <div key={i} className='bg-white relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200'>
                  <div>
                    <img src={skill.logo} alt='' className='w-10 group-hover:scale-125 duration-200'></img>
                  </div>
                  <div>
                    <h6>{skill.name}</h6>
                  </div>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default Skills
