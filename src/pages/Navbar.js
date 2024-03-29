import React from 'react'
import './Navbar.css'
import NavItem from '../component/NavItem/NavItem'

const Navbar = () => {

  const navData = [
    {
      text: 'Home',
      active: false,
      home: true
    },
    {
      text: 'Services',
      active: false,
      home: false
    },
    {
      text: 'News',
      active: true,
      home: false
    },
    {
      text: 'Blog',
      active: false,
      home: false
    },
    {
      text: 'Contact',
      active: false,
      home: false
    },
  ]

  return (
    <div className='navbar'>
      <NavItem text={'More'} active={false} home={true} more='more'/>
      <div className='navbar-box'>
      {navData.map(data => {
        return <NavItem text={data.text} active={data.active} home={data.home}/>
      })}
      </div>
    </div>
  )
}

export default Navbar