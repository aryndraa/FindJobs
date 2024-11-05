import React from 'react'
import AboutService from '../molecules/AboutService'
import CardContactPerson from '../molecules/Detail Service/Card/CardContactPerson'

const SectionAboutService = () => {
  return (
    <div className='flex gap-3 mt-6 flex-col lg:flex-row'>
        <AboutService/>
        <div>
        <CardContactPerson/>
        </div>
    </div>
  )
}

export default SectionAboutService