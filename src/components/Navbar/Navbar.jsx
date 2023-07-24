import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '/assets/shared/logo.svg'
import hamburger from '/assets/shared/icon-hamburger.svg'
import close from '/assets/shared/icon-close.svg'

const Navbar = () => {

    let [shoNav, setshowNav] = useState('');
    let [opacityList, setOpacityList] = useState('');

    useEffect(() => {
        addEventListener('resize', () => {
            if (window.innerWidth >= 765) {
                setshowNav('')
                setOpacityList('')
            }
        })
    }, [])

    return (
        <div className='nav-container'>
            <div className='container-right'>
                <Link to='/'> <img className='logo' src={logo} alt="logo" /></Link>
                <div className="line"></div>
                <div className={`glass-container ${shoNav}`}>
                    <button onClick={() => { setshowNav('close-nav'), setOpacityList('opacity-list-reverse') }}><img className={`close ${shoNav}`} src={close} /></button>
                    <nav className={`list-links ${opacityList}`}>

                        <NavLink to='/' className='hover' >{({ isActive }) => (<>
                            <span>00</span>
                            <p>HOME</p>
                            <div className={isActive ? 'selection' : 'reverse-selection'} />
                        </>)}</NavLink>


                        <NavLink to='/destination' className='hover' >{({ isActive }) => (<>
                            <span>01</span>
                            <p>DESTINATION</p>
                            <div className={isActive ? 'selection' : 'reverse-selection'} />
                        </>)}</NavLink>


                        <NavLink to='/crew' className='hover' >{({ isActive }) => (<>
                            <span>02</span>
                            <p>CREW</p>
                            <div className={isActive ? 'selection' : 'reverse-selection'} />
                        </>)}</NavLink>


                        <NavLink to='/technology' className='hover' >{({ isActive }) => (<>
                            <span>03</span>
                            <p>TECHNOLOGY</p>
                            <div className={isActive ? 'selection' : 'reverse-selection'} />
                        </>)}</NavLink>

                    </nav>
                </div>
                <button onClick={() => { setshowNav('show-nav'), setOpacityList('opacity-list') }}><img className={'hamburger'} src={hamburger} /></button>
            </div>
        </div>
    )
}

export default Navbar