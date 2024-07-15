import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import tatalogo from '../images/tatlogo.png'
import angleone from '../images/angleone.png'
import starsports from '../images/starsports.png'
import my11circle from '../images/my11circle.png'
import jiocinema from '../images/jiocinema.png'
import rupay from '../images/rupay.png'
import ceat from '../images/ceat.png'

const Footer = () => {
  return (
    <>
              <Stack direction='row' alignItems='center' width='100%' height='160px' backgroundColor='#081e40'>
          <Box width='200px' height='auto' alignItems='center' justifyContent='center'>
            <Typography variant='body2' sx={{color:'#fef9c4',fontSize:'12px',fontWeight:'700'}}>TITLE SPONSER</Typography>
            <img src={tatalogo} alt='tata' width='131px' height='120px'/>
          </Box> 
          <Divider orientation="vertical" sx={{backgroundColor:'#fef9c4'}}  />
          <Stack direction='row' spacing={7} width='690px' height='auto' >
            <Box width='200px' height='auto' alignItems='center' justifyContent='center'>
              <img src={my11circle} alt='angleone' width='213px' height='120px'/>
            </Box> 
            <Box width='200px' height='auto' alignItems='center' justifyContent='center'>
              <Typography variant='body2' sx={{color:'#fef9c4',fontSize:'12px',fontWeight:'700'}}>ASSOCIATE SPONSER</Typography>
              <img src={angleone} alt='tata' width='131px' height='120px'/>
            </Box>
            <Box width='200px' height='auto' alignItems='center' justifyContent='center'>
              <img src={rupay} alt='tata' width='131px' height='120px'/>
            </Box> 
          </Stack> 
          <Divider orientation="vertical" sx={{backgroundColor:'#fef9c4'}}  />
          <Box width='200px' height='auto' alignItems='center' justifyContent='center'>
              <Typography variant='body2' sx={{color:'#fef9c4',fontSize:'12px',fontWeight:'700'}}>OFFICIAL STRATEGIC TIMEOUT PARTNER</Typography>
              <img src={ceat} alt='tata' width='131px' height='120px'/>
          </Box> 
          <Divider orientation="vertical" sx={{backgroundColor:'#fef9c4'}}  />
          <Box width='200px' height='auto' alignItems='center' justifyContent='center'>
              <Typography variant='body2' sx={{color:'#fef9c4',fontSize:'12px',fontWeight:'700'}}>OFFICIAL BROADCASTER</Typography>
              <img src={starsports} alt='tata' width='131px' height='120px'/>
          </Box> 
          <Divider orientation="vertical" sx={{backgroundColor:'#fef9c4'}}  />
          <Box width='200px' height='auto' alignItems='center' justifyContent='center'>
              <Typography variant='body2' sx={{color:'#fef9c4',fontSize:'12px',fontWeight:'700'}}>OFFICIAL DIGITAL STEAMING PARTNER</Typography>
              <img src={jiocinema} alt='tata' width='131px' height='120px'/>
          </Box>
        </Stack>

        <Stack direction='row' spacing={15} width='auto' height='auto' justifyContent='center' sx={{backgroundColor:'black',padding:'60px'}}>
          <Stack>
          <Typography variant="h6" sx={{color:'white'}}>TEAM</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Chennai Super Kings</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Delhi Capitals</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Gujarat Titans</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Kolkata Knight Riders</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Lucknow Super Giants</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Mumbai Indians</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Punjab Kings</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Rajasthan Royals</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Royal Challengers Bengaluru</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Sunrisers Hyderabad</Typography><br/>
          </Stack>
          <Stack>
            <Typography variant="h6" sx={{color:'white'}}>ABOUT</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>About Us</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Anti Corruption Policy</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Anti Doping Policy</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Tue Application Form</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Anti Discrimination Policy</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Clothing and Equipment Regulations</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Code Of Conduct For Players And Team Officials</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>News Access Regulations</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Image Use Terms</Typography><br/>
          </Stack>
          <Stack>
            <Typography variant="h6" sx={{color:'white'}}>GUIDELINES</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>IPL Code Of Conduct For Match Officials</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Brand And Protection Guidelines</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Governing Council</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>PMOA Minimum Standard</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Suspect Action Policy</Typography><br/>
          </Stack>
          <Stack>
            <Typography variant="h6" sx={{color:'white'}}>CONTACT</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Contact Us</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Sponcership</Typography><br/>
            <Typography variant='subtitle1' sx={{fontSize:'13px',color:'rgba(255, 255, 255, .6)'}}>Privacy Policy</Typography><br/>
          </Stack>
        </Stack>
        <Stack alignItems='center'>
          <Typography variant="body1" sx={{color:"white"}}>Copyright © IPL 2024 All Rights Reserved.</Typography>
        </Stack>
    </>
  )
}

export default Footer
