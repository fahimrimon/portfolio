import React from 'react';
import { content } from '../../Content';

const Banner = () => {
    const {hero} = content;
    return (
        <section>
            <div className='min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center'>
              <div className='absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10'>
               <h1 className='rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]'>{hero.firstName}{" "}
               <span className='text-dark_primary'>{hero.LastName}</span>
               </h1>
              </div>

              <div className='pb-20 px-16'>
                <h2>{hero.title}</h2>
                <br/>
                <div className='flex justify-end'>
                 <button className='btn'>{hero.btnText}</button>
                </div>
                <div className='flex flex-col gap-8 mt-8'>
                  {
                    hero.hero_content.map((content, i) =>(
                        <div key={i} className={`flex items-center gap-5 w-80 ${i === 1 && "flex-row-reverse text-right"}`}>
                          <h3>{content.count}</h3>
                          <p>{content.text}</p>
                        </div>
                    ))
                  }
                </div>
              </div>

              <div className='md:h-[37rem] h-96'>
                <img src={hero.image} alt='..' className='h-full object-cover'></img>
              </div>
            </div>
        </section>
    );
};

export default Banner;