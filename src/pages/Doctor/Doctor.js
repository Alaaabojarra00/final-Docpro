import React from 'react'
import { useParams } from 'react-router-dom'
import { PageTitle, ClinicSection } from '../../components'
import DoctorPages from './page'
export const Doctor = () => {
  const { id } = useParams()
  return (
    <div className="doctor-page">
      <DoctorPages id={id}>
        <PageTitle title="All Doctor" />
        <ClinicSection />
      </DoctorPages>
    </div>
  )
}
