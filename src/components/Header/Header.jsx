import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'

const Header = ({authUser, userSignOut}) => {
  return (
    <div className='header'>
      <Navbar authUser={authUser} userSignOut={userSignOut}/>
      <Hero authUser={authUser}/>
    </div>
  )
}

export default Header
