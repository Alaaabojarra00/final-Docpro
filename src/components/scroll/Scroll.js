import React from 'react'
import './scroll.css'
import { useState, useEffect } from 'react'

const Scroll = () => {
  const [showScroll, setShowScroll] = useState(false)
  useEffect(() => {
    const listener = () => {
      if (!showScroll && window.pageYOffset > 500) {
        setShowScroll(true)
        document.getElementById('header-lower').classList.add('sticky-header')
      } else if (showScroll && window.pageYOffset < 500) {
        setShowScroll(false)
        document
          .getElementById('header-lower')
          .classList.remove('sticky-header')
      }
    }
    document.addEventListener('scroll', listener)
    return () => {
      document.removeEventListener('scroll', listener)
    }
    // eslint-disable-next-line
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
