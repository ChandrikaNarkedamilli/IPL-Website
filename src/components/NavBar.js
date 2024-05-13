import { AppBar, Button, IconButton, Stack, Toolbar, } from '@mui/material'
import React from 'react'
import logo from '../images/logo.png'
import fanpoll from '../images/fanpoll.png'
import poll from '../images/poll.png'

const NavBar = () => {
  return (
    <AppBar position='static' sx={{backgroundColor:'#061e59'}}>
      <Toolbar >
        <Stack direction='row'  alignItems='center' justifyContent='space-between' > 
          <IconButton size='small' edge='start' style={{ width: 90, height: 50 ,marginRight:'200px',marginLeft:'40px'}}>
            <img src={logo} alt='ipllogo' style={{ width: '100%', height: '100%' }} />
          </IconButton>
          <Stack direction='row' spacing={3 } sx={{flexGrow:1}} >
            <Button color='inherit'>MATCHES</Button>
            <Button color='inherit'>VIDEOS</Button>
            <Button color='inherit'>STATS</Button>
            <Button color='inherit'>POINTS TABLE</Button>
            <Button color='inherit'>TEAMS</Button>
            <Button color='inherit'>MATCHES</Button>
            <Button color='inherit'>MORE</Button>
          </Stack>
          <Stack direction='row' sx={{alignItems:'center', marginLeft: '250px' }} >
            <img src={poll} alt='pol' style={{width:'40px' ,height:'40px' ,color:'inherit'}}/>
            <img src={fanpoll} alt='fanpoll'  style={{ marginLeft: '-40px' }}/>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
