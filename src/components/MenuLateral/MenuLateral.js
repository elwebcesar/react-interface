import React from 'react'

import './menuLateral.scss'

export default function MenuLateral() {
  return (
    <div className='menuLateral'>
        <h3>Menu</h3>
        <nav>
            <ul>
                <li><a href="#">Check-in</a></li>
                <li><a href="#">Manage My Booking</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">Members</a></li>
            </ul>
        </nav>
    </div>
  )
}
