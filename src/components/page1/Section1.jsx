import React from 'react'
import '../../styles/page1/Section1.css'
import video from '../../asset/images/section2-image1.mp4'
import image1 from '../../asset/images/section2-image2.png'
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
    <div id='page1Section1'>
      <div id="page1Section1Container-1">
        <p>Get up to 24 months No Cost EMI on all iPhone models from most leading banks.‡ <a href='/'>Shop now</a></p>
      </div>
      <div id="page1Section1Container-2">
        <video src={video} autoPlay muted loop></video>
        <img src={image1} alt="" />
        <h2>Apple Worldwide Developers Conference.</h2>
        <h2>Join us online from 10 to 14 June.</h2>
          <Link to='/events'><button>Learn more</button></Link>
      </div>
    </div>
  )
}

export default Section1