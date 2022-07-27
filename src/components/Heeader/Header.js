import React from 'react'
import Menu from '../MenuTop/MenuTop'
import MenuTop from '../MenuTop/MenuTop'
import Dropdown from '../Dropdown/Dropdown'

import './header.scss'

export default function Header() {
  return (
    <header className="header">
        <div className="header__info">
            <div className="container-center">
            <div className='row flex space-between'>
                <h1 className="header__info__logo">AIRLINE</h1>
                <MenuTop />
            </div>
            <div className="row">
                <div className='header__lenguage'>
                    <Dropdown />
                </div>
            </div>
            <div className='row header__info__promo'>
                <div>
                <h2>Visit Canada with prices from $800</h2>
                <p>Prepare your bags and forget your worries to start enjoying holidays in this fantastic country</p>
                <p>
                <a href=''>BUY NOW</a>
                </p>
                </div>
            </div>
            </div>
        </div>
    </header>
  )
}
