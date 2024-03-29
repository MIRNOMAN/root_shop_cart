
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { useState } from 'react';
import logo from "../../assets/common/logo.png"
import { NavLink } from 'react-router-dom';

import ModelCart from '../../utils/Cart/ModelCart';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import { useSelector } from 'react-redux';


const Navbar = () => {
    
  
  const {name} = useSelector((state)=> state.userSlice)
    const [anchorElNav, setAnchorElNav] = useState(null);


    const navlinks = <>
     <li>
     <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "#009688" : ""
  }
>
  Home
</NavLink>
     </li>
     <li>
     <NavLink
  to="/shop"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "#009688"
  }
>
  Shop
</NavLink>
     </li>
     <li>
     <NavLink
  to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "#009688"
  }
>
  About
</NavLink>
     </li>
     <li>
     <NavLink
  to="/services"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "#009688"
  }
>
  Services
</NavLink>
     </li>
     <li>
     <NavLink
  to="/contacts"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "#009688"
  }
>
  Contacts
</NavLink>
     </li>
    </>

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
 

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    
   
    return (
        <AppBar position="static" >
            <Container maxWidth="xl" className='bg-[#F4F3F4] shadow-none'>
                <Toolbar disableGutters >
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                    }}>
                        <img className='w-[200px]' src={logo} alt="logo" />
                    </Box>
                    


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="#111111"
                        >
                            <MenuIcon />
                        </IconButton>

                        

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <ul className='list-none p-4 space-y-3'>
                            {navlinks}
                            </ul>
                          


                        </Menu>

                        

                    </Box >
                   
                  
                    <Box sx={{
                        display: { xs: 'block', md: 'none', flexGrow: 1, },
                    }}>
                        <img className='w-[160px]' src={logo} alt="logo" />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                       <ul className='list-none flex gap-4 text-black'>
                       {navlinks}
                       </ul>
                       
                    </Box>

                    <Box sx={{
                        display: { xs: 'none', md: 'flex', spacing: 4, color: "#212121" },
                    }}>
                      <div className='mr-6 text-lg flex justify-center items-center'>
                       <LoginPage />
                        <span>/</span>
                      <RegisterPage />
                      </div>
                    </Box>

                {/* wish list */}
                <Box sx={{
                        display: { xs: 'none', md: 'flex', spacing: 4, color: "#212121" },
                    }}>
                          <ModelCart />
                    </Box>
                  
                    <Box sx={{
                        display: { xs: 'none', md: 'flex', },
                    }}>
                       <div>
                        <h1 className='text-black'>{name}</h1>
                       </div>
                    </Box>
                
                    
                    <Box sx={{ flexGrow: 0, display: { xs: 'block', md: 'none', spacing: 4, color: "#212121" } }}>  
                            <IconButton
                                sx={{ p: 0 }}>
                                <ModelCart />
                            </IconButton>                      
                    </Box>
                    <Box sx={{
                        display: { xs: 'block', md: 'none', flexGrow: 1, },
                    }}>
                      
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar