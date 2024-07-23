import React from 'react'
import '../../styles/page1/Nav.css'
import { FaApple } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { IoBag } from "react-icons/io5";

const Nav = () => {
    return (
        <div>
            <nav id='page1NavMain'>
                <div id='page1NavSub_main'>
                    <ul>
                    <li><FaApple /></li>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>AirPods</li>
                    <li>TV & Home</li>
                    <li>Entertainment</li>
                    <li>Accessories</li>
                    <li>Support</li>
                    <li><BsSearch /></li>
                    <li><IoBag/></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav