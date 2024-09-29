import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"
import AnchorTemporaryDrawer from './Drawer'
import Button from '../Button/Button'

const Header = () => {
  return (
    <>
    <div className='navbar'>
        <h1 className='logo'>
            CryptoVerse<span style={{color:"var(--gold)",
              
            }}>.</span>
            </h1>
            <div className='links'>
                <Link to="/">
                    <p className='link'>Home</p>
                </Link>
                <Link to="/compare">
                    <p className='link'>compare</p>
                </Link>
                <Link to="/watchlist">
                    <p className='link'>Watchlist</p>
                </Link>
                <Link to="/dashboard">
                    
                    <Button text={"Dashboard"} outlined={false}/>
                </Link>

            </div>
            <div className='mobile-drawer'>
                <AnchorTemporaryDrawer/>
            </div>
        
    </div>
    </>
  )
}

export default Header