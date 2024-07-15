import { Box, Breadcrumbs,  Card, Grid,  Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from '@mui/material'
import teamsbg from '../images/teamsbg.png'
import teamsbgimg from '../images/teamsbgimg.png'
import tataipllogo from '../images/tataipllogo.png'
import teamsbgtop from '../images/teamsbgtop.png'
import CSKoutline from '../images/teamsimages/CSKoutline.png'
import RCBoutline from '../images/teamsimages/RCBoutline.png'
import GToutline from '../images/teamsimages/GToutline.png'
import KKRoutline from '../images/teamsimages/KKRoutline.png'
import LSGoutline from '../images/teamsimages/LSGoutline.png'
import RRoutline from '../images/teamsimages/RRoutline.png'
import MIoutline from '../images/teamsimages/MIoutline.png'
import SRHoutline from '../images/teamsimages/SRHoutline.png'
import PBKSoutline from '../images/teamsimages/PBKSoutline.png'
import DCoutline from '../images/teamsimages/DCoutline.png'
import {Link as RouterLink} from 'react-router-dom'


const Teams = () => {

  return (
    <>
      <Box backgroundColor='#061e59'>
        <Breadcrumbs separator='/' sx={{fontSize:'13px',color:'white',padding:'5px',marginLeft:'70px'}} >
          <Link underline='hover' href='/' style={{underline:'hover',textDecoration:'none',color:'white'}}>Home</Link>
          <Link underline='hover' href='/teams' style={{underline:'hover',textDecoration:'none',color:'white'}}>Teams</Link>
        </Breadcrumbs>
      </Box> 
      <Stack sx={{backgroundColor:'#071026'}} >
        <img src={teamsbgimg}  alt='teamsbg'/>
        <Stack alignItems='center' marginTop='-380px'>
          <img src={tataipllogo} alt='tataipl' width='180px' height='111px'/>
          <Stack marginTop='-260px'><img src={teamsbgtop} alt='bgimg'  /></Stack>
        </Stack>
        <Stack marginBottom='-760px' >
          <img src={teamsbg} alt='teamsbg'/>
        </Stack>

        <Stack alignItems='center' marginBottom='30px'>
          <Grid container spacing={2.5} marginTop='-170px' justifyContent='center' width='1280px' height='auto'>
            {teamsData.map((team) => (
              <Grid item xs={12} sm={6} md={3} key={team.teamId} >
                <RouterLink to={`/teams/playerslist/${team.name}`} style={{textDecoration:'none'}}>
                  <Card sx={{ width: '296px', height: '296px',borderRadius: '10px' }} >
                    <Stack alignItems='center' width='auto' height='200px' sx={{ backgroundColor: team.bgTop ,textDecoration:'none'}} justifyContent='center'>
                      <img src={team.teamImage} alt='teams' width='120px' height='120px' />
                    </Stack>
                    <Stack sx={{ backgroundColor: team.bgBottom }} width='auto' height='100%' >
                      <Typography variant='h6' sx={{ fontWeight: '700', color: 'white',textAlign:'center' }}>{team.teamName}</Typography>
                    </Stack>
                  </Card>
                </RouterLink>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </>
  )
}

export const teamsData =[
  {
    teamId: 1,
    teamImage : CSKoutline,
    name:'CSK',
    teamName :'Chennai Super Kings',
    bgTop:'#ffc107',
    bgBottom:'#262b38',  
  },{
    teamId: 2,
    name:'DC',
    teamImage : DCoutline,
    teamName :'Delhi Capitals',
    bgTop:'#b9251c',
    bgBottom:'#02175b',  
  },{
    teamId: 3,
    teamImage : GToutline,
    name:'GT',
    teamName :'Gujarat Titans',
    bgTop:'#77c7f2',
    bgBottom:'#0d1a30',  
  },{
    teamId: 4,
    teamImage : KKRoutline,
    name:'KKR',
    teamName :'Kolkata Knight Riders',
    bgTop:'#ecc542',
    bgBottom:'#271f4a',  
  },{
    teamId: 5,
    teamImage : LSGoutline,
    name:'LSG',
    teamName :'Lucknow Super Giants',
    bgTop:'#ffffff',
    bgBottom:'#0147bc',  
  },{
    teamId: 6,
    teamImage : MIoutline,
    name:'MI',
    teamName :'Mumbai Indians',
    bgTop:'#2d6ab1',
    bgBottom:'#133166',  
  },{
    teamId: 7,
    teamImage : PBKSoutline,
    name:'PBKS',
    teamName :'Punjab Kings',
    bgTop:'#d71920',
    bgBottom:'#283766',  
  },{
    teamId: 8,
    teamImage : RRoutline,
    name:'RR',
    teamName :'Rajasthan Royals',
    bgTop:'#eb83b5',
    bgBottom:'#043169',  
  },{
    teamId: 9,
    teamImage : RCBoutline,
    name:'RCB',
    teamName :'Royal Challengers Bengaluru',
    bgTop:'#2b2a29',  
    bgBottom:'#7c2327'
  },{
    teamId: 10,
    teamImage : SRHoutline,
    name:'SRH',
    teamName :'Sunrisers Hyderabad',
    bgTop:'#f26522',
    bgBottom:'#702324',  
  }
]

export default Teams
