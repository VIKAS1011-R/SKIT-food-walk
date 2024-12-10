'use client'

import React,{useEffect,useState} from 'react'
import './TopBar.css'


function TopBar() {
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        };
    }, [scroll]);
  return (
    <div id="topbar" className={`d-flex align-center fixed-top ${scroll > 100 ? 'topbar-scrolled':undefined}`} >
        <div className="container d-flex justify-content-md-between justify-content-center">
            <i className='bi bi-phone d-flex align-items-center' >
                <span>9108636574</span>
            </i>
            <i className='bi bi-clock d-flex align-items-center ms-4' >
                <span> Wed 11th December 2024: 1pm - 3:30pm </span>
            </i>
        </div>
    </div>
  )
}

export default TopBar