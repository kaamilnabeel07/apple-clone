import React from 'react'
import '../../styles/page1/Section4.css'
import { FaApple } from "react-icons/fa";


const Section4 = () => {
    return (
        <div id='page1Section4'>
            <div id="page1Section4Outer">

                <div id="page1Section4first">

                    <div id="page1Section4Full">
                        <div id='page1Section4Left'>
                            <div id='page1Section4Inner1'>
                                <h1>iPad Pro</h1>
                                <h3>Unbelievably thin. Incredibly powerful.</h3>
                                <div id="page1Section4Buttons">
                                    <button>Learn more</button>
                                    <button id='page1Section4Button2'>Buy</button>
                                </div>
                            </div>
                        </div>
                        <div id='page1Section4Right'>
                            <div id='page1Section4Inner1'>
                                <h1>iPad air</h1>
                                <p>Two sizes. Faster chip. Does it all.</p>
                                <div id="page1Section4Buttons">
                                    <button>Learn more</button>
                                    <button id='page1Section4Button2'>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="page1Section4Second">
                    <div id="page1Section4Full">
                        <div id='page1Section4Left'>
                            <div id='page1Section4Inner1'>
                                <h1>MacBook Air</h1>
                                <h4>Supercharged by M3</h4>
                                <div id="page1Section4Buttons">
                                    <button>Learn more</button>
                                    <button id='page1Section4Button2'>Buy</button>
                                </div>
                            </div>
                        </div>
                        <div id='page1Section4Right'>
                            <div id='page1Section4Inner1'>
                                <h1><FaApple/> Watch</h1>
                                <span>ULTRA 2</span>
                                <h4>Next-level adventure.</h4>
                                <div id="page1Section4Buttons">
                                    <button>Learn more</button>
                                    <button id='page1Section4Button2'>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="page1Section4Third">
                    <div id="page1Section4Full">
                        <div id='page1Section4Left'>
                            <div id='page1Section4Inner1'>
                                <h1>AirPods Pro</h1>
                                <h3>Adaptive Audio. Now playing.</h3>
                                <div id="page1Section4Buttons">
                                    <button>Learn more</button>
                                    <button id='page1Section4Button2'>Buy</button>
                                </div>
                            </div>
                        </div>
                        <div id='page1Section4Right'>
                            <div id='page1Section4Inner1'>
                                <h1><FaApple/> Trade In</h1>
                                <p>Upgrade and save. It's that easy.</p>
                                <div id="page1Section4Buttons">
                                    <button>Get your estimate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Section4