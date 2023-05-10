import React from 'react'
import { content } from '../Content'

function Services() {
    const {services} = content;
  return (
    <section className='mt-8'>
        <div className='md:container px-5 pt-16 pb-8'>
       <h2 className='md:text-3xl text-2xl'>{services.title}</h2>
       <h4 className='text-gray'>{services.subtitle}</h4>
      <div className='flex flex-wrap justify-between gap-5 pt-8'>
        {
            services.service_content.map((service, i) =>(
                <div key={i} className='min-w-[20px] duration-300 cursor-pointer bg-bg_light_primary text-center p-6 rounded-xl border-2 border-slate-200 sm:flex-1 md:flex-1'>
                    <img src={service.logo} alt='' className='mx-auto'></img>
                    <h6 className='my-3'>{service.title}</h6>
                    <p className='leading-7'>{service.para}</p>
                </div>
            ))
        }
      </div>
      </div>
      
    </section>
  )
}

export default Services
