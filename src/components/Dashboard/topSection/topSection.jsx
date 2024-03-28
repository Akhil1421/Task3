import React from 'react'

const TopSection = () => {
    /*This component contains Dashboard heading and options being provided. Since the logic for what would happen 
    when one clicks on these options is undefined so no state management has been done here
    */
    return (
        <div className="dashboard-top">
            <span>Dashboard</span>
            <div className='dashboard-center'>
                <div className='dashboard-top-sec'>
                    <div className='dashboard-icon'>
                        <img src="search.png" alt="Search" />
                    </div>
                    <div className='dashboard-icon'>
                        <img src="notification.png" alt="Notification" />
                    </div>
                    <div className='dashboard-icon' style={{ borderRight: "none" }}>
                        <img src="options.png" alt="Option" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSection
