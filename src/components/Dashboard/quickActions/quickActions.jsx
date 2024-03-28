import React from 'react'
import "./quickActions.css"

const QuickActions = () => {
    /*Data array is created so that rather than writing same kind of code for eachof the 5 quick actions
    possible, we can simple map through them
    */
    let data = [{
        "title": "Create Indents",
        "icon": "icon3.png"
    }, {
        "title": "Add Vehicle",
        "icon": "icon6.png"
    }, {
        "title": "Add Trailer",
        "icon": "icon12.png"
    }, {
        "title": "Add Driver",
        "icon": "driver.png"
    }, {
        "title": "Add Indents",
        "icon": "icon6.png"
    }]
    return (
        <div className='quick-action-div'>
            <span>Quick Actions</span>
            <div className='quick-action-row'>
                {
                    data.map((data, index) => {
                        return (
                            <div key={`quick_action${index}`} className='quick-action'>
                                <div className='center'>
                                    <img src={data.icon} alt="Icon" />
                                </div>
                                <div className='center'>
                                    {data.title}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuickActions
