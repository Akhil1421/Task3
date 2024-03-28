import React, { useEffect, useState } from 'react'
import "./topSection.css"

const TopSection = () => {
    /*currentDate is defined here because the time is always flowing and if time passes 12:00 a.m. then if user has entered at web page 
      at say 11:59 p.m. then without having a state which is getting updated every 30s  the past day will appear on the screen
      Basically, a clock is created which is initially  initialised to new Date() object and gets updated to that time every 30s
    */
    const [currentDate, setCurrentDate] = useState(new Date())
    /*
        Since we are working with a sideeffect here , we use useeffect. When this component mounts, this useeffect is run once and it sets up
        an interval of 30s using setInterval to update currentDate
    */
    useEffect(()=>{
        const updateDate = () => {
            setCurrentDate(new Date());
        };
        const interval = setInterval(updateDate,30000)
        //cleanup function here is to remove the interval once the component unmounts
        return () => clearInterval(interval);
    },[])
    //Current Day,Month and Year is calculated using Date() class and functionalities it provides
    const day = currentDate.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

    //Stored the 2 categories' data  in an array to aoid redundancy
    const categoriesData = [{
        "title": "Income",
        "amount": "100000 CAD",
        "description": "2 payments received",
        "color": "#148714"
    },{
        "title": "Expenses",
        "amount": "50000 CAD",
        "description": "5 payments paid",
        "color": "#D04141"
    }]
    return (
        <div className='top-section'>
            <span className='highlight-title'>Todays Highlights</span>
            <span className='today-date'>{formattedDate}</span>
            <div className='categories-flex-div'>
                {categoriesData.map((data,index)=>{
                    return(
                        <div key={`data${index}`} className='category'>
                            <span className='category-title'>{data.title}</span>
                            <span style={{color: data.color, fontWeight: 500}}>{data.amount}</span>
                            <span className='category-description'>{data.description}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TopSection
