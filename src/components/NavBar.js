import { AppBar, Box, Button, IconButton, Stack, Tab, Tabs, Toolbar, } from '@mui/material'
import React, { useState } from 'react'
import logo from '../images/logo.png'
import fanpoll from '../images/fanpoll.png'
import poll from '../images/poll.png'
import PollIcon from '@mui/icons-material/Poll';
import { TabContext, TabList } from '@mui/lab'
import { Link as RouterLink} from 'react-router-dom'

const NavBar = () => {
  const [value, setValue] = useState(1)

  const handleTabChange=(event,newValue)=>{
    setValue(newValue)
  }
  return (
    <AppBar position='sticky' sx={{backgroundColor:'#19398a'}} >
      <Toolbar >
        <Stack direction='row'  alignItems='center' justifyContent='space-between' > 
          <IconButton component={RouterLink} to='/' size='small' edge='start' style={{ width: 90, height: 50 ,marginRight:'200px',marginLeft:'40px'}}>
            <img src={logo} alt='ipllogo' style={{ width: '100%', height: '100%' }} />
          </IconButton>
            <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                textColor='error'
                onChange={handleTabChange}
                variant="scrollable"
                role="navigation"
                sx={{ color: 'white', '& .MuiTabs-indicator': { backgroundColor: 'white' } }} 
              > 
                <Tab component={RouterLink} to='/matches' label='MATCHES' value='1'></Tab>
                
                <Tab component={RouterLink} to='/videos' label='VIDEOS' value='2' />
                <Tab component={RouterLink} to='/stats' label='STATS' value='3' />
                <Tab component={RouterLink} to='/pointstable' label='POINTS TABLE' value='4' />
                <Tab component={RouterLink} to='/teams' label='TEAMS' value='5' />
                <Tab component={RouterLink} to='/news' label='NEWS' value='6' />
                <Tab component={RouterLink} to='#' label='MORE' value='7' />
              </TabList>
            </Box>
            </TabContext>
          <Stack direction='row' sx={{alignItems:'center', marginLeft: '250px' }} >
            <IconButton  component={RouterLink} to='/fanpoll'>
              <PollIcon src={poll} alt='pol' style={{width:'40px' ,height:'40px' ,color:'#DC5034'}}/>
              <img src={fanpoll} alt='fanpoll' component={RouterLink} to='/fanpoll'  style={{ marginLeft: '-50px' }}/>
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
