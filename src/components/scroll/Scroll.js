import React, { useState, useEffect } from 'react'
import './scroll.css'

const Scroll = () => {
  const [showScroll, setShowScroll] = useState(false)
  useEffect(() => {
    const listener = () => {
      if (window.pageYOffset >= 400) setShowScroll(true)
      else if (window.pageYOffset < 400) setShowScroll(false)
    }
    document.addEventListener('scroll', listener)
    return () => {
      document.removeEventListener('scroll', listener)
    }
  }, [showScroll])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const onClick = () => {
    scrollTop()
    setShowScroll(false)
  }
  return (
    <button
      className={`scroll-top scroll-to-target ${showScroll && 'open'}`}
      onClick={onClick}
    >
      <span className="fa fa-arrow-up"></span>
    </button>
  )
}

export default Scroll
