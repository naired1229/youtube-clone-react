import React from 'react';
import './SidebarRow.css';
import HomeIcon from '@material-ui/icons/Home';
import { Icon } from '@material-ui/core';



function SidebarRow({selected, Icon,title}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow_icon"/>
            <h2 className="sidebarRow_title">{title}</h2>
        </div>
    )
}

export default SidebarRow