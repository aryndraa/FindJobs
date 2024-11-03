import React from 'react'
import CardRecomendedJobs from '../molecules/CardRecomendedJobs'
import CardCategory from '../molecules/CardCategory'
const CategoryDekstop = () => {
  return (
    <div>
        <div className="flex justify-between gap-10 ">
            <CardCategory />
            <CardRecomendedJobs />
        </div>
    </div>
  )
}

export default CategoryDekstop