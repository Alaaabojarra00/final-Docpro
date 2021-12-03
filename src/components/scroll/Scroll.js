import React from 'react'
import './scroll.css'
import {useState, useEffect} from 'react'

function Scroll() {
useEffect(() => {
    const listener=()=>{
        if (!showScroll && window.pageYOffset > 20){
            setShowScroll(true)
            
          } else if (showScroll && window.pageYOffset <= 20){
            setShowScroll(false)}

    }
    document.addEventListener('scroll' , listener)
    return () => {
       document.removeEventListener('scroll',listener)
    }
    // eslint-disable-next-line
}, [])

    const [showScroll , setShowScroll]= useState(false)

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };
      const onClick=()=>{
          scrollTop()
          setShowScroll(false)
      }
    return (
        <button className={`scroll-top scroll-to-target ${showScroll &&"open"}`} onClick={onClick}>
		<span className="fa fa-arrow-up"></span>
	</button>
    )
}

export default Scroll
