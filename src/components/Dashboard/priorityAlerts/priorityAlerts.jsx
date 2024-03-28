import React from 'react'
import "./priorityAlerts.css"

const PriorityAlerts = () => {
    /*
        Normally data to be displayed is received from API but since there is no sideeffect with which
        we are dealing with, so no use of useeffect or some other hook has been done
        Data is hardcoded into the array and is displayed
    */
    const data = [{
        "title": "Driver Raised Concern",
        "date": "13 Feb 24",
        "icon": "driver.png",
        "location": "Load No : 12454, BillTo : Raodo demo Bangalore",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua"
    }, {
        "title": "Refer Temp. out of range",
        "date": "13 Feb 24",
        "icon": "temp.png",
        "location": "Load No : 12454, BillTo : Raodo demo Bangalore",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua"
    }, {
        "title": "Driver Raised Concern 2",
        "date": "13 Feb 24",
        "icon": "driver.png",
        "location": "Load No : 12454, BillTo : Raodo demo Bangalore",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua"
    }]
    return (
        <div className='priority-alerts-div'>
            <div className='priority-alerts-title'>
                <span>High Priority Alerts ({data.length})</span>
                <span className='view-span pointer'>View All &gt;</span>
            </div>
            <div  className='priority-alert-row'>
                {data.slice(0, 2)?.map((data) => {
                    return (
                        <div className='priority-alert-div'>
                            <div className='alert-data'>
                                <span className='alert-icon'>
                                    <img src={data.icon} alt="Icon" />
                                </span>
                                <div className='alert-main-data'>
                                    <span className='alert-title'>{data.title}</span>
                                    <span className='alert-loc roboto-regular'>{data.location}</span>
                                </div>
                                <div className='alert-date'>
                                    {data.date}
                                </div>
                            </div>
                            <div className='alert-description roboto-regular'>
                                {data.description}
                            </div>
                            <div className='alert-options'>
                                <span className='pointer ignore'>Ignore</span>
                                <button className='pointer resolve'>Resolve</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PriorityAlerts
