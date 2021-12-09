import React from 'react'
import { useParams } from 'react-router-dom'
import { PageTitle, ClinicSection } from '../components'
import DoctorData from '../json/doctor.json'
import DynamicPage from './DynamicPage'
export const Doctor = () => {
  const { id } = useParams()
  return (
    <DynamicPage id={id} data={DoctorData} url="/all-doctor/pages/">
      <PageTitle title="All Doctor" />
      <ClinicSection />
    </DynamicPage>
  )
}
