
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import logo from "../../assets/common/logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from '@emotion/styled';
import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
    const pages = ['Home', 'Shop', 'Blog', 'About', 'Services', 'Contact'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const StyledBadge = styled(Badge)(() => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            //   border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }))

    return (
        <AppBar position="static" >
            <Container maxWidth="xl" className='bg-slate-200 shadow-none'>
                <Toolbar disableGutters >
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                    }}>
                        <img className='w-[170px]' src={logo} alt="logo" />
                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
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
                            {pages.map((page) => (
                                <MenuItem key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}


                        </Menu>

                    </Box >
                    <Box sx={{
                        display: { xs: 'block', md: 'none', flexGrow: 1, },
                    }}>
                        <img className='w-[130px]' src={logo} alt="logo" />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#212121', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>



                    {/* search function */}
                    <Box sx={{
                        display: { xs: 'none', md: 'flex', spacing: 4, color: "#212121" },
                    }}>
                    <SearchIcon></SearchIcon>
                    </Box>



                    {/* addCart section */}
                    <Box sx={{
                        display: { xs: 'none', md: 'flex', spacing: 4, color: "#212121" },
                    }}>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={4} className='mr-5' color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar