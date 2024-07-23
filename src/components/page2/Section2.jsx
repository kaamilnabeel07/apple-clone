import React from 'react'
import image1 from '../../asset/images/section2-image1.mp4'
import image2 from '../../asset/images/section2-image2.png'
import '../../styles/page2/Section2.css'
import { MdOutlineDownloadForOffline } from "react-icons/md";


const Section2 = () => {
  return (
    <div id='page2Section2'>
        <video id='page2Section2Video' autoPlay muted loop src={image1} alt="" />
        <img src={image2} alt="" />
        <h3>Apple Worldwide  Developers Conference.</h3>
        <h3>Join us online from 10 to 14 June.</h3>
        <h3 id='page2Section2Download'>Add to your calender <MdOutlineDownloadForOffline/></h3>
    </div>
  )
}

export default Section2