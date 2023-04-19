import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Avatar} from '@material-ui/core';
function Header() {
  return (
    <div className='header md:px-10 sm:px-2 px-4 '>
    <Link to='/'>
    <img src="https://dynamic.brandcrowd.com/asset/logo/f26fbab6-d2ac-4944-bc94-09ddf7cde5a2/logo-search-grid-1x?v=636989397566000000&text=Home+stays" alt="HomeStay" className='header__icon hidden md:block cursor-pointer' />
    </Link>
   
     
      <div className="header__center">
        <input type="text" />
        <SearchIcon/>
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon/>
        <ExpandMoreIcon/>
        {/* <AccountCircleIcon/> */}
        <Avatar/>
        
      </div>
    </div>
  )
}

export default Header
