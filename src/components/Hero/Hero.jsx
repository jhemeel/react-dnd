import React from 'react'
import './hero.css'

const Hero = ({authUser}) => {
  return (
    <div className='hero'>
      <div >
        <span>Enter a world of <span className='teal' >Photos</span> & Amazing <br /> <span className='teal'>Awards</span></span>
       {
        authUser &&
        <strong className="user-status"> logged in as 
        {authUser.email}
      </strong>
       }
      </div>
    </div>
  )
}

export default Hero
