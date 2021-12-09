import React, { useEffect } from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import { Boxinformation } from '../../components'

const DynamicPage = ({ children, id = 1, data, url }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])
  const lengthPages = parseInt(data.length / 5) + 1
  return (
    <div>
      {children}
      <br />
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-md-12 col-sm-12 content-side col-xs-12 col-sm-12 col-md-12">
            {ReadData(data, id)}
            <ul className="page-number">
              {Array(lengthPages)
                .fill()
                .map((_, index) => (
                  <li key={index}>
                    <NavLink
                      to={`${url}${index + 1}`}
                      className={id === index + 1 ? 'active' : ''}
                    >
                      {index + 1}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DynamicPage

const ReadData = (data, id) => {
  const i = id * 5

  return data.slice(i - 5, i).map((value, index) => {
    return <Boxinformation key={index} obj={value} />
  })
}
