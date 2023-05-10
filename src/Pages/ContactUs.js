import React from 'react'
import { content } from '../Content'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";

function ContactUs() {
    const {contact} = content;
  return (
    <section className='bg-dark_primary text-white'>
      <div className='md:container px-5 pt-16 pb-8'>
            <h2 className='md:text-3xl text-2xl text-white'>{contact.title}</h2>
            <h4 className='text-gray'>{contact.subtitle}</h4>

          <div className='flex gap-10 md:flex-row flex-col'>
            <form className='flex flex-1 flex-col gap-5'>
                <input type='text' name='user_name' placeholder='Name' required className='border border-slate-600 rounded p-3'/>
                <input type='email' name='user_email' placeholder='Email Id' required className='border border-slate-600 rounded p-3'/>
                <textarea  name='message' placeholder='Message' required className='border border-slate-600 rounded p-3 h-44'></textarea>
                <button className='btn bg-white text-dark_primary self-start'>Submit</button>
            </form>
            <div className='flex flex-1 flex-col gap-5'>
                <div>
                    <div className='flex space-x-2 items-center'>
                    <h4 className='text-white'><MdEmail/></h4>
                    <a href='/' className='text-white'>fahimrimon21@gmail.com</a>
                    </div>
                    <div className='flex space-x-2 items-center my-4'>
                        <h4 className='text-white'><BsFillTelephoneFill/></h4>
                        <a href='/' className='text-white'>+8801765950723</a>
                    </div>
                    <div className='flex space-x-2 items-center'>
                      <h4 className='text-white'><BsInstagram/></h4>
                      <a href='https://www.instagram.com/fahim_rimon/' className='text-white'>fahim_rimon</a>
                    </div>
                </div>
            </div>
          </div>
          </div>
    </section>
  )
}

export default ContactUs
