import React from 'react'
import Banner from './Banner'
import Skills from '../../Pages/Skills'
import Services from '../../Pages/Services'
import Projects from '../../Pages/Projects'
import ContactUs from '../../Pages/ContactUs'

function Home() {
  return (
    <div>
       <Banner></Banner>
       <Skills></Skills>
       <Services></Services>
       <Projects></Projects>
       <ContactUs></ContactUs>
    </div>
  )
}

export default Home
