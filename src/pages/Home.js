import React, { useEffect } from 'react'
import {
  Banner,
  Client,
  Feature,
  About,
  Process,
  Test,
  Team,
  Switcher,
} from '../components'
export const Home = () => {
  useEffect(() => {
    const dir = localStorage.getItem('dir')
    const screen = localStorage.getItem('screen')
    document.body.classList.add(dir)
    document.body.classList.add(screen)
  }, [])
  return (
    <div className="Home-page">
      <Banner />
      <Switcher />
      <Client />
      <Feature />
      <About />
      <Process />
      <Test />
      <Team />
    </div>
  )
}
