import React from 'react'
import styled from 'styled-components'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventIcon from '@mui/icons-material/Event';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import SpeakerNotesRoundedIcon from '@mui/icons-material/SpeakerNotesRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import {NavLink} from "react-router-dom";




let SideNavBar = styled.div`
width:80px;
height:auto;
padding-top:25vh;
color:grey;
position:fixed;
bottom:0;
background-color:#203765;

.link-active{
  padding: 0.5rem 1.2rem;
  font-size:2.3rem;
  text-decoration:none;
  color:grey;
}
.link-active:hover{
  border-right:5px solid #fc6964;
  color:white;
  background:grey;
}

.user-images{
  border-radius:50%;
  width:2.5rem;
  height:2.5rem;
  padding: 0.5rem 1.2rem;
  margin-top:10vh;
}
.active{
 
  font-size:2.3rem;

  border-right:5px solid #fc6964;
  color:white;

}
`;

export default function Navbar() {
  return (
    <SideNavBar>
    
  <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/dashboard"><DashboardIcon className='link-active'/></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/a"><PeopleAltIcon className='link-active'/></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/appointments"><EventIcon className='link-active'/></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/b"><CurrencyRupeeRoundedIcon className='link-active'/></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/c"><SpeakerNotesRoundedIcon className='link-active'/></NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/d"><SettingsRoundedIcon className='link-active'/></NavLink>

 
  <img className='user-images' src="/Images/LoginImg.png" alt="Profile" />
      
    </SideNavBar>
  )
}
