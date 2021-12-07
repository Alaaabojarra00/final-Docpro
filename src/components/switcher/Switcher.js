import React from 'react'
import './switcher.css'
import { useState, useEffect } from 'react'
const Switcher = () => {
  const [click, setClick] = useState(false)

  useEffect(() => {
    const listener = (event) => {
      document.body.classList.add('boxed')
      localStorage.setItem('screen', 'boxed')
    }
    const listener2 = () => {
      document.body.classList.remove('boxed')
      localStorage.removeItem('screen')
    }
    const listener3 = () => {
      document.body.classList.add('rtl')
      localStorage.setItem('dir', 'rtl')
    }

    const listener4 = () => {
      document.body.classList.remove('rtl')
      localStorage.removeItem('dir')
    }
    document.querySelector('#boxed').addEventListener('click', listener)
    document.querySelector('#full').addEventListener('click', listener2)
    document.querySelector('#rtl').addEventListener('click', listener3)
    document.querySelector('#normal').addEventListener('click', listener4)
  }, [])

  return (
    <div className={`switcher ${click && 'active'} `}>
      <div
        className={click ? 'platte' : null}
        onClick={() => {
          setClick(!click)
        }}
      >
        <i className="fa fa-cog"></i>
      </div>
      <div className="layout-outer ">
        <div className="layout-option">
          <a href="##" id="boxed">
            Boxed
          </a>
        </div>
        <div className="layout-option">
          <a href="##" id="full">
            Full
          </a>
        </div>
        <i className="clearfix"></i>
      </div>

      <div className="layout2 layout-outer ">
        <div className="layout-option">
          <a href="##" id="normal">
            LTR
          </a>
        </div>
        <div className="layout-option">
          <a href="##" id="rtl">
            RTL
          </a>
        </div>
        <i className="clearfix"></i>
      </div>

      <div className="heading-panel"> Primary Color</div>
      <div className="colors-outer primary-color">
        <div className="box" title="default" id="default"></div>
        {Array(11)
          .fill()
          .map((_, index) => (
            <div
              className="box"
              title={`color${index + 2}`}
              id={`color${index + 2}`}
              key={index}
            ></div>
          ))}
      </div>
    </div>
  )
}

export default Switcher
