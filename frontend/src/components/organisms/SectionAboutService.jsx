import React from 'react'
import AboutService from '../molecules/AboutService'
import CardContactPerson from '../molecules/CardContactPerson'

const SectionAboutService = () => {
  return (
    <div className='flex gap-3 mt-6 flex-col lg:flex-row'>
        <AboutService/>
        <CardContactPerson/>
    </div>
  )
}

export default SectionAboutService