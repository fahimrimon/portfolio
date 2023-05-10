import React from 'react'
import { content } from '../Content';
import { AiOutlineArrowRight } from "react-icons/ai";

const Projects = () => {
    const {projects} = content;
    return (
        <section className='min-h-screen bg-bg_light_primary mt-24'>
          <div className='md:container px-5 pt-16 pb-8'>
            <h2 className='md:text-3xl text-2xl'>{projects.title}</h2>
            <h4 className='text-gray'>{projects.subtitle}</h4>
          </div>

          <div className='flex flex-wrap justify-center gap-4 pb-12'>
          {
            projects.projects_content.map((content, i) =>(
                <div key={i} className='bg-white relative w-full gap-5 p-6 max-w-sm rounded-2xl border-2 border-slate-200'>
                  <div>
                    <img src={content.image} alt='' className='rounded-2xl h-56 w-full hover:scale-90 duration-200'></img>
                  </div>
                  <div>
                    <h6 className='text-green-500 text-xs pt-6 pb-1'>{content.type}</h6>
                    <h6 className='pb-4'>{content.title}</h6>
                    <p className='italic text-justify pb-8'>{content.para}</p>
                  </div>
                  <div className='flex items-center pt-4 absolute bottom-0 pb-4'>
                  <button className='font-semibold text-sm mr-4'><a target='blank' href={content.code}>Code</a></button>
                  <div className='flex items-center'>
                  <button className='font-semibold text-sm mr-2'><a target='blank' href={content.live}>Live Preview</a></button>
                  <AiOutlineArrowRight/>
                  </div>
                  </div>
                </div>
            ))
        }
          </div>

        </section>
    );
};

export default Projects;