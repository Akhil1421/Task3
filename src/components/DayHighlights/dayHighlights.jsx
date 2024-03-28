import React from 'react'
import TopSection from './topSection/topSection'
import "./dayHighlights.css"
import MidSection from './midSection/midSection'
import BottomSection from './bottomSection/bottomSection'

const DayHighlights = () => {
  return (
    <div className='day-highlights'>
        <TopSection/>
        <MidSection/>
        <BottomSection/>
    </div>
  )
}

export default DayHighlights
