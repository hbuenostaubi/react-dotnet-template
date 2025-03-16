import { Group } from '@mui/icons-material'
import { AppBar, Box, Button, Container, MenuItem, Toolbar, Typography } from "@mui/material";

type Props = {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a78c 89%)' }}>
                <Container maxWidth='xl'>
                    {/* flex - each children inside flex, justifyContent- equally distant from one another */}
                    <Toolbar variant="dense" sx={{display:'flex', justifyContent: 'space-between'}}>
                        <Box>
                            <MenuItem sx={{display: 'flex', gap:2}}>
                            <Group fontSize='large'/>
                                <Typography variant='h4' fontWeight='bold'>Reactivities</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{display:'flex'}}>
                            <MenuItem sx={{fontSize: '1.2rem', textTransform:'uppercase', fontWeight:'bold'}}>
                            Activites
                            </MenuItem>
                            <MenuItem sx={{fontSize: '1.2rem', textTransform:'uppercase', fontWeight:'bold'}}>
                            About
                            </MenuItem>
                            <MenuItem sx={{fontSize: '1.2rem', textTransform:'uppercase', fontWeight:'bold'}}>
                            Contact
                            </MenuItem>
                        </Box>
                        <Button size='large' variant='contained' color='warning' onClick={openForm}>
                            Create activity </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}