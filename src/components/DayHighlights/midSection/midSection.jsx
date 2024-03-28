import React from 'react'
import "./midSection.css"

const MidSection = () => {

    //This component contains list of completed activities which are here hardcoded rather than being received in an API call
    //could not find a way to generalise the data due to the 4th entry being shown so have to hardcode stuff
    return (
        <div className='completed-activities'>
            <div className='completed-activities-heading'>
                <span>Completed Activities (14)</span>
                <span className='view-all-span'>View All</span>
            </div>
            <div className='activity-container-div'>
                <div className="activity-div">
                    <span style={{color: "#1A3875", fontWeight: 500}}>Gurpreet Singh</span>  (Dispatch team) has created 
                    <span 
                    style={{color: "#000000", fontWeight: 500}}> Load No. I-I-AAA-1325</span>
                </div>
                <div className="activity-div">
                    <span style={{color: "#1A3875", fontWeight: 500}}>Aman</span>  (Driver) Picked up goods at
                    <span 
                    style={{color: "#000000", fontWeight: 500}}> Location_Name for Load No. I-I-AAA-1325</span>
                </div>
                <div className="activity-div">
                    <span style={{color: "#1A3875", fontWeight: 500}}>Gurpreet Singh</span>  (Dispatch team) has created 
                    <span 
                    style={{color: "#000000", fontWeight: 500}}> Load No. I-I-AAA-1325</span>
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

export default MidSection
