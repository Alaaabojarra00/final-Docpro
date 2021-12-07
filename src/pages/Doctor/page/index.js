import React, { useEffect } from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import DoctorData from '../../../json/doctor.json'
import { Boxinformation } from '../../../components'

const DoctorPages = ({ children, id = 1 }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])
  const lengthPages = parseInt(DoctorData.length / 5) + 1
  return (
    <div>
      {children}
      <br />
      <div class="auto-container">
        <div class="row clearfix">
          <div class="col-md-12 col-sm-12 content-side col-xs-12 col-sm-12 col-md-12">
            {ReadData(id)}
            <ul className="page-number">
              {Array(lengthPages)
                .fill()
                .map((_, index) => (
                  <li key={index}>
                    <NavLink
                      to={`/all-doctor/pages/${index + 1}`}
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

export default DoctorPages

const ReadData = (id) => {
  const i = id * 5

  return DoctorData.slice(i - 5, i).map((value, index) => {
    return <Boxinformation key={index} obj={value} />
  })
}
