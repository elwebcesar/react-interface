import React from 'react'
import './dropdown.scss'
import arrow from './arrow.svg';

export default function Dropdown() {

  const dropdown = event => {
    document.getElementById("languageDropdown").classList.toggle("show");
    document.querySelector('.arrow').classList.toggle("active");
  }

  return (
    <>
    <div className="dropdown">
        <button onClick={dropdown} className="dropbtn">
          <span>en</span> <img src={arrow} className="arrow" />
        </button>
        <div id="languageDropdown" className="dropdown-content">
            <a href="#">RU - Russian</a>
            <a href="#">DE - German</a>
            <a href="#">FR - French</a>
        </div>
    </div>
    </>
  )
}
