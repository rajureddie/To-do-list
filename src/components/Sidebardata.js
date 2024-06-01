import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SettingsIcon from '@mui/icons-material/Settings';


export const Sidebardata=[{
    title: 'Home',
    link:'/home',
    icon:<MenuIcon/>

},{
    title:'Task',
    link:'/task',
    icon:<DoneOutlineIcon/>
},
{
    title:"Assigned",
    link:'/Assigned',
    icon:<DoubleArrowIcon/>
},
{
    title:"Settings",
    link:"/settings",
    icon:<SettingsIcon/>
}

]


