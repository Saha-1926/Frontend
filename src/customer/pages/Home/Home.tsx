import React from 'react'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'
const Home = () => {
  return (
    <>
      <div className='space-y-5 lg:space-y-10 relative pb-20'>
        <ElectricCategory />
        <CategoryGrid />
        <div className='pt-20'>
        <h1 className='text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-20 text-center'>
          TODAY'S DEAL
        </h1>
        <Deal/>
      </div>
      </div>
    </>
  )
}

export default Home