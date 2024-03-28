import React from 'react'
import "./dashboard.css"
import TopSection from './topSection/topSection'
import QuickActions from './quickActions/quickActions'
import PriorityAlerts from './priorityAlerts/priorityAlerts'
import DoughnutChart from './charts/charts'

const Dashboard = () => {
  /* Dashboard is divided into 4 components with each component specifying row of elements to be displayed on the page
    
    TopSection contains the dashboard heading and usual options of notification, search to the right
    
    DoughnutChart contain the 4 charts being displayed

    QuickActions contains the quick actions soecifying row elements being displayed

    Same for priorityAlerts
  */

  return (
    <div className='dashboard'>
      <TopSection/>
      <DoughnutChart/>
      <QuickActions/>
      <PriorityAlerts/>
    </div>
  )
}

export default Dashboard
