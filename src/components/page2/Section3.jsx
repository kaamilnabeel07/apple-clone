import React from 'react'
import '../../styles/page2/Section3.css'
import cardImage1 from '../../asset/images/cardImage1.jpg'
import cardImage2 from '../../asset/images/cardImage2.jpg'
import cardImage3 from '../../asset/images/cardImage3.jpg'
import down from '../../asset/images/section3Down.jpg'
import { GoArrowUpRight } from "react-icons/go";

const Section3 = () => {
    return (
        <div id='page2Section3_outer'>
            <div id='page2Section3_inner'>
                <h2>View recent Apple events</h2>
            </div>
            <div id='page2Section3Slider'>
                <div id='page2Section3Card'>
                    <div id="page2Section3Image">
                        <img src={cardImage1} alt="" />
                    </div>
                    <div id='page2Section3Content'>
                        <div id="page2Section3Heading">
                            <h2>Apple Event</h2>
                            <p>7 May 2024</p>
                        </div>
                        <div id="page2Section3Description">
                            <p>Introducing the unbelievably thin and portable iPad Pro with Apple M4 chip, the redesigned iPad Air in two sizes and the all-new Apple Pencil Pro.</p>
                        </div>
                    </div>
                    <div id='page2Section3Buttons'>
                        <a href='/'>Watch ïŒž</a>
                        <a href='/'>Watch our ASL recap ïŒž</a>
                    </div>
                </div>

                <div id='page2Section3Card'>
                    <div id="page2Section3Image">
                        <img src={cardImage2} alt="" />
                    </div>
                    <div id='page2Section3Content'>
                        <div id="page2Section3Heading">
                            <h2>Apple Event</h2>
                            <p>30 October 2023</p>
                        </div>
                        <div id="page2Section3Description">
                            <p>Introducing the new MacBook Pro 14″ and MacBook Pro 16″, and the new iMac. Now supercharged by the M3 family of chips.</p>
                        </div>
                    </div>
                    <div id='page2Section3Buttons'>
                        <a href='/'>Watch ïŒž</a>
                        <a href='/'>Watch our ASL recap ïŒž</a>
                    </div>
                </div>

                <div id='page2Section3Card'>
                    <div id="page2Section3Image">
                        <img src={cardImage3} alt="" />
                    </div>
                    <div id='page2Section3Content'>
                        <div id="page2Section3Heading">
                            <h2>Apple Event</h2>
                            <p>12 September 2023</p>
                        </div>
                        <div id="page2Section3Description">
                            <p>Introducing iPhone 15 Pro, iPhone 15, Apple Watch Series 9, Apple Watch Ultra 2 and a major step towards making all our products carbon neutral by 2030.</p>
                        </div>
                    </div>
                    <div id='page2Section3Buttons'>
                        <a href='/'>Watch ïŒž</a>
                        <a href='/'>Watch our ASL recap ïŒž</a>
                    </div>
                </div>
            </div>




            <div id='page2Section3_down'>
                <img src={down} alt="" />
                <p><a href="/">View all Apple events <GoArrowUpRight/></a></p>
            </div>
        </div>
    )
}

export default Section3