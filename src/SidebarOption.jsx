import React from 'react'
import './SidebarOption.css'


function SidebarOption({Icon, title, number, selecteed}) {
    return (
        <div className={`sidebarOption ${selecteed && "sidebarOption--active"}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )

}

export default SidebarOption
