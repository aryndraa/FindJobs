import React from 'react'
import CardCategory from "../../components/molecules/Home/Card/CardCategory"
import CardRecomendedJobs from "../../components/molecules/Home/Card/CardRecomendedJobs"
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