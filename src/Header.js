import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import {Avatar} from '@material-ui/core'; wanna pass it like a component but not able to install @material-ui/core on my system HELP!!!
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
  return (
    <div className='header'>
      {/* <h3>header Component</h3> */}
      <img src="https://dynamic.brandcrowd.com/asset/logo/f26fbab6-d2ac-4944-bc94-09ddf7cde5a2/logo-search-grid-1x?v=636989397566000000&text=Home+stays" alt="HomeStay" className='header__icon' />
      <div className="header__center">
        <input type="text" />
        <SearchIcon/>
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon/>
        <ExpandMoreIcon/>
        <AccountCircleIcon/>
        
      </div>
    </div>
  )
}

export default Header
