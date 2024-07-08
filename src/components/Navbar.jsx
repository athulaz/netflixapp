import React, { useEffect, useState } from 'react'
import './Navbar.css'
function Navbar() {

const [show, setShow]=useState(false)

useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 400){
            setShow (true)
        } else{
            setShow(false)
        }
           
        console.log(show);

    })
},[])
                                                   // if show state is true , navba will works
  return (
    <div className={`nav ${show && 'navba'} `}> 
    
  <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
    </div>
  )
}

export default Navbar
