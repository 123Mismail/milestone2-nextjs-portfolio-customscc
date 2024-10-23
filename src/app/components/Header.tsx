

import React from 'react'
import Link from "next/link"
const Header = () => {
  return (
    <div>
        <section className='header'>
            {/* deskctop navbar */}
            <div className='navbar'>
                 <h2>Portfolio</h2>
                <ul className='nav-items'>
                    <li><Link href={'/'}  className='nav-item'>Home</Link></li>
                    <li><Link href={'/about'} className='nav-item'>About</Link></li>
                    <li><Link href={'/skills'} className='nav-item'>Skills</Link></li>
                    <li><Link href={'/contact'} className='nav-item'>Contact</Link></li>
                </ul>
            </div>
            {/* mobile navbar */}
            <div className='mob-navbar'>
                 <h2>Portfolio</h2>
                <ul className='mob-nav-items'>
                    <li><Link href={'/'}  className='mob-nav-item'>Home</Link></li>
                    <li><Link href={'/about'} className='mob-nav-item'>About</Link></li>
                    <li><Link href={'/skills'} className='mob-nav-item'>Skills</Link></li>
                    <li><Link href={'/contact'} className='mob-nav-item'>Contact</Link></li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default Header