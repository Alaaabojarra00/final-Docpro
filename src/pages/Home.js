import React from 'react'
import {
  Banner,
  Client,
  Feature,
  About,
  Process,
  Test,
  Team,
  Agent,
} from '../components'
export const Home = () => {
  return (
    <div className="Home-page">
      <Banner />

      <Client />
      <Feature />
      <About />
      <Process />
      <Test />
      <Team />
      <Agent />
    </div>
  )
}
