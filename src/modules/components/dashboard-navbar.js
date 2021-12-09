import React, { useState } from 'react';  
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, withRouter} from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import ViewListIcon from '@mui/icons-material/ViewList';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../auth';

function Navbar({history}) { 

  const handleLogout = evt => {
    logout(() => {
      history.push('/');
  });
  };  

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/dashboard' className='nav-text a'>
              <DashboardIcon />
              Dashboard
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/users' className='nav-text a'>
              <PeopleIcon />
              Users
              </Link>
              </li>
              <li className='nav-text'>
              <Link to='/items' className='nav-text a'>
              <ViewListIcon />
              Items
              </Link>
              </li>
              <li className='nav-text'>
              <Link to='/orders' className='nav-text a'>
              <ShoppingCartIcon />
              Orders
              </Link>
              </li>
              <li className='nav-text'>
              <button className='btn btn-link' onClick =  {handleLogout}>
              <LogoutIcon />
              Logout
              </button>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default withRouter(Navbar);