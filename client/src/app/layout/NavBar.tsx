import { Group } from '@mui/icons-material'
import { AppBar, Box, Container, MenuItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from 'react-router';
import MenuItemLink from '../shared/components/MenuItemLink';

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a78c 89%)' }}>
                <Container maxWidth='xl'>
                    {/* flex - each children inside flex, justifyContent- equally distant from one another */}
                    <Toolbar variant="dense" sx={{display:'flex', justifyContent: 'space-between'}}>
                        <Box>
                            <MenuItem component={NavLink} to='/' sx={{display: 'flex', gap:2}}>
                            <Group fontSize='large'/>
                                <Typography variant='h4' fontWeight='bold'>Reactivities</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{display:'flex'}}>
                            <MenuItemLink to='/activities'>
                            Activites
                            </MenuItemLink>
                            <MenuItemLink to='/createActivity'>
                            Create Activity
                            </MenuItemLink>
                        </Box>
                        <MenuItem>
                         User Menu
                        </MenuItem>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}