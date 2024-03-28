import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
    
    /*Create a array of 11 objects with property src giving source of icon image 
    The icons are stored as icon1, icon2 and so on so we use a loop to fill in image src
    After this icons array is mapped to jsx to be displayed
    */

    const totalIcons = 11
    const icons = Array.from({ length: totalIcons }, (_, index) => ({
        src: `icon${index + 1}.png`,
        alt: 'Icon'
    }));
    return (
        <div className='sidebar'>
            <div>
                <img src="Ring-Icon.png" alt="Main Icon" className='img ring-icon' />
            </div>
            {icons.map((icon) => {
                return (
                    <div className='icon'>
                        <img src={icon.src} alt={icon.alt} className='img' />
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar
