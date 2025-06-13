import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='Nav-left'>Logo</div>
            <ul className='Nav-right'>
                <li> <Link to="">Home </Link></li>
                <li> <Link to="/Contact">Contact </Link></li>
                <li>Collection</li>
                <li>Mes</li>
                <li>Profile</li>
            </ul>
        </div>
    )
}

export default Navbar
