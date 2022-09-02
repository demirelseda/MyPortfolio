import React from 'react'
import "../topbar/topbar.scss"


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")} >
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>myPortfolio..</a>
                    <div className='itemContainer'>
                        <span>+44 924 12 74</span>
                    </div>
                    <div className='itemContainer'>
                        <span>sedeyldem@gmail.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
