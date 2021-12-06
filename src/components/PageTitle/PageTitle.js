import React from 'react'
import { Link } from 'react-router-dom'
import shape70 from '../../assets/images/shape-70.png'
import shape71 from '../../assets/images/shape-71.png'
import './PageTitle.css'
const PageTitle = (props) => {
  const { title } = props
  return (
    <div className="page-heading">
      <div className="title-box centred bg-color-2">
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{ backgroundImage: ` url(${shape70})` }}
          ></div>
          <div
            className="pattern-2"
            style={{ backgroundImage: ` url(${shape71})` }}
          ></div>
        </div>
        <div className="auto-container">
          <div className="title">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
      <div className="lower-content">
        <div className="auto-container">
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PageTitle
