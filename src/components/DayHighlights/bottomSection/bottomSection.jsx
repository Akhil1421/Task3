import React from 'react'
import "./bottomSection.css"

const BottomSection = () => {
    /*This component is highly similar to completed activities component and contains some basic html*/
    return (
        <div className='completed-activities scheduled-outer-div'>
            <div className='completed-activities-heading'>
                <span>Scheduled Activities (14)</span>
                <span className='view-all-span'>View All</span>
            </div>
            <div className='activity-container-div'>
                <div className="activity-div">
                <span 
                    style={{color: "#000000", fontWeight: 500}}> Load No. I-I-AAA-1325 </span>
                will be delivered by <span style={{color: "#1A3875", fontWeight: 500}}> Aman (Driver)</span>
                </div>
                <div className="activity-div">
                    <span style={{color: "#1A3875", fontWeight: 500}}>Aman</span>  (Driver) will be Picked up goods at
                    <span 
                    style={{color: "#000000", fontWeight: 500}}> Location_Name for Load No. I-I-AAA-1325</span>
                </div>
                <div className="activity-div">
                    <span 
                    style={{color: "#000000", fontWeight: 500}}>Load No. I-I-AAA-1325</span> will start added by
                    <span style={{color: "#1A3875", fontWeight: 500}}> Gurpreet Singh</span>
                </div>
                <div className="activity-div">
                    <span 
                    style={{color: "#000000", fontWeight: 500}}>Load No. I-I-AAA-1325</span> will start added by
                    <span style={{color: "#1A3875", fontWeight: 500}}> Gurpreet Singh</span>
                </div>
            </div>
        </div>
    )
}

export default BottomSection
