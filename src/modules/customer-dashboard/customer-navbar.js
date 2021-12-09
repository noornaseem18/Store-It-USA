import React, { useState } from 'react';  
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link,  withRouter} from 'react-router-dom';
import '../components/Navbar.css';
import { IconContext } from 'react-icons';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ViewListIcon from '@mui/icons-material/ViewList';
import LogoutIcon from '@mui/icons-material/Logout';
import BarChartIcon from '@mui/icons-material/BarChart';
import { logout , isAuthenticated } from '../../auth';

function CustomerNavbar({history}) { 

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
              <Link to= {'/customer-dashboard/'+ isAuthenticated()._id} className='nav-text a'>
              <ViewListIcon />
              Items
              </Link>
            </li>
            <li className='nav-text'>
              <Link to={'/invoice/'+ isAuthenticated()._id} className='nav-text a'>
              <ShoppingCartIcon />
              Invoice
              </Link>
              </li>
              <li className='nav-text'>
              <Link to='/pricing' className='nav-text a'>
              <BarChartIcon />
              Pricing
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

export default withRouter(CustomerNavbar);