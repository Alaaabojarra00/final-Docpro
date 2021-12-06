import React from 'react'
import './Clinic.css'
const DepartmentItems = [
  'Cardiology',
  'Orthopaedic',
  'Medicine',
  'Eye',
  'Neuro',
  'Cancer',
]
const LocationItems = [
  'Kishoreganj',
  'Kurigram',
  'Natore',
  'Pabna',
  'Bogura',
  'Tangail',
  'Mymensingh',
  'Sylhet',
  'Dhaka',
  'Cumilla',
  'Feni',
  'Noakhali',
  'Jashore',
  'Khulna',
  'Cox`s Bazar',
  'Chattogram',
  'Barishal',
  'Rajshahi',
  'Dinajpur',
  'Rangpur',
]
const ClinicSection = () => {
  return (
    <div className="sidebar-page-container ClinicSection">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-md-12 col-sm-12 content-side col-xs-12 col-sm-12 col-md-12">
            <div className="select-field bg-color-3 mb-5">
              <div className="auto-container">
                <div className="content-box">
                  <div className="form-inner clearfix">
                    <div className="search-fields">
                      <div className="form-group clearfix">
                        <select
                          name="dept"
                          className="wide docpro-filter"
                          id="dept"
                          data-form="archive-search-form"
                        >
                          <option value="">Select Department</option>
                          {DepartmentItems.map((value, index) => (
                            <option value={index} key={index}>
                              {value}
                            </option>
                          ))}
                        </select>

                        <select
                          name="loc"
                          className="wide docpro-filter ignore"
                          id="loc"
                          data-form="archive-search-form"
                        >
                          <option value="">Select Location</option>
                          {LocationItems.map((value, index) => (
                            <option value={index} key={index}>
                              {value}
                            </option>
                          ))}
                        </select>

                        <input
                          type="text"
                          placeholder="Ex. Name.."
                          autoComplete=""
                        />
                        <button type="submit">
                          <i className="fa fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                    <ul className="select-box clearfix">
                      <li>
                        <div className="single-checkbox">
                          <input
                            className="docpro-filter"
                            data-form="archive-search-form"
                            type="radio"
                            name="status"
                            id="status-all"
                            checked="checked"
                            onChange={(e) => e.target.checked}
                          />
                          <label htmlFor="status-all">
                            <span></span>All
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="single-checkbox">
                          <input
                            className="docpro-filter"
                            data-form="archive-search-form"
                            type="radio"
                            name="status"
                            id="status-available"
                            value="available"
                          />
                          <label htmlFor="status-available">
                            <span></span>Available
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClinicSection
