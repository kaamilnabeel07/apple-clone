import React from 'react'
import Nav from './components/page1/Nav'
import Section1 from './components/page1/Section1'
import Section2 from './components/page1/Section2'
import Section3 from './components/page1/Section3'
import Section4 from './components/page1/Section4'
import Footer from './components/page1/Footer'

const Page1 = () => {
  return (
    <div>
        <Nav/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Footer/>
    </div>
  )
}

export default Page1