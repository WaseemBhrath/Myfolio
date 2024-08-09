import React from 'react'
import Logo from '../../assets/Waseem Bhrath.png'

export default function Navbar() {
  const NavMainu=[
    {
      id: 1,
      title:"Services",
      link:"#",
    },
    {
      id: 2,
      title:"Works",
      link:"#",
    },
    {
      id: 3,
      title:"Blog",
      link:"#",
    }
  ]
  return (
    <div className="container">
      <div className=''>
        <img className='h-[150px]' src={Logo} alt="" />
        <h1>Mr Bhrath is here
          <p>You are so cute and intelligent person in the world </p>
          <p>Bhrath is also here</p>
        </h1>
      </div>
      <div>
       <ul>
          {NavMainu.map((item)=>{
            return(
              <li key = {item.id} > <a href={item.link}>{item.title}</a></li>
            )

          })}
        </ul>
      </div>
    </div>
  )
}
