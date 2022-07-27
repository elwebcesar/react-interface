import React from 'react'
import './menuTop.scss'

export default function MenuTop() {

    const hamburger = event => {
        document.querySelector('.menuHor ul').classList.toggle("show");
        document.querySelector('.hamburger__menu').classList.toggle("open");
    }

    let url="";

    return (
    <nav className='menuHor'>
        <button onClick={hamburger} className="hamburger">
            <div class="hamburger__menu">
                <div class="bar-top"></div>
                <div class="bar-middle"></div>
                <div class="bar-bottom"></div>
            </div>
        </button>
        <ul>
            <li><a href={url}>Home</a></li>
            <li><a href={url}>About</a></li>
            <li><a href={url}>Destinations</a></li>
            <li><a href={url}>Contact</a></li>
        </ul>
    </nav>
    )
}
