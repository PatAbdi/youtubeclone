import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar }  from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nb_menutitle'>

        <MenuIcon className='navmenu'/>

        <Link to='/' className='nb_menutitleh1'>LicoreTube</Link>
        </div>

        <div className='nb-search'>
            <input type= "text" placeholder='Search'/>
            <SearchIcon className='nb-searches'/>
        </div>


        <div className='nb-profile'>

            <div className='nb-profileicon'>

            <VideoCallIcon className='nb-profile-ic'/>

            <AppsIcon className='nb-profile-ic'/>

            <NotificationsNoneIcon className='nb-profile-ic'/>

            </div>

        
        <Avatar className='nb-profileavat' src='assets/Pascaline.png'/>

        </div>
    </div>
  )
}

export default Navbar