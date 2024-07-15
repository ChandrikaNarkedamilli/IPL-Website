import { Box, Breadcrumbs, Button, Divider, IconButton, ImageList, ImageListItem, ImageListItemBar, Stack, Table, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React from 'react'
import battericon from '../images/battericon.png'
import allroundericon from '../images/allroundericon.png'
import wicketkeepericon from '../images/wicketkeepericon.png'

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import bowlericon from '../images/bowlericon.png'
import cskbatter1 from '../images/cskplayers/batter1.png'
import cskbatter2 from '../images/cskplayers/batter2.png'
import cskbatter3 from '../images/cskplayers/batter3.png'
import cskbatter4 from '../images/cskplayers/batter4.png'
import cskbatter5 from '../images/cskplayers/batter5.png'
import cskbatter6 from '../images/cskplayers/batter6.png'
import cskbatter7 from '../images/cskplayers/batter7.png'
import cskbowler1 from '../images/cskplayers/bowler1.png'
import cskbowler2 from '../images/cskplayers/bowler2.png'
import cskbowler3 from '../images/cskplayers/bowler3.png'
import cskbowler4 from '../images/cskplayers/bowler4.png'
import cskbowler5 from '../images/cskplayers/bowler5.png'
import cskbowler6 from '../images/cskplayers/bowler6.png'
import cskbowler7 from '../images/cskplayers/bowler7.png'
import cskbowler8 from '../images/cskplayers/bowler8.png'
import cskbowler9 from '../images/cskplayers/bowler9.png'
import cskbowler10 from '../images/cskplayers/bowler10.png'
import cskallrounder1 from '../images/cskplayers/allrounder1.png'
import cskallrounder2 from '../images/cskplayers/allrounder2.png'
import cskallrounder3 from '../images/cskplayers/allrounder3.png'
import cskallrounder4 from '../images/cskplayers/allrounder4.png'
import cskallrounder5 from '../images/cskplayers/allrounder5.png'
import cskallrounder6 from '../images/cskplayers/allrounder6.png'
import cskallrounder7 from '../images/cskplayers/allrounder7.png'
import cskallrounder8 from '../images/cskplayers/allrounder8.png'
import cskallrounder9 from '../images/cskplayers/allrounder9.png'

import dcbatter1 from '../images/DCplayers/batter1.png'
import dcbatter2 from '../images/DCplayers/batter2.png'
import dcbatter3 from '../images/DCplayers/batter3.png'
import dcbatter4 from '../images/DCplayers/batter4.png'
import dcbatter5 from '../images/DCplayers/batter5.png'
import dcbatter6 from '../images/DCplayers/batter6.png'
import dcbatter7 from '../images/DCplayers/batter7.png'
import dcallrounder1 from '../images/DCplayers/allrounder1.png'
import dcallrounder2 from '../images/DCplayers/allrounder2.png'
import dcallrounder3 from '../images/DCplayers/allrounder3.png'
import dcallrounder4 from '../images/DCplayers/allrounder4.png'
import dcallrounder5 from '../images/DCplayers/allrounder5.png'
import dcbowler1 from '../images/DCplayers/bowler1.png'
import dcbowler2 from '../images/DCplayers/bowler2.png'
import dcbowler3 from '../images/DCplayers/bowler3.png'
import dcbowler4 from '../images/DCplayers/bowler4.png'
import dcbowler5 from '../images/DCplayers/bowler5.png'
import dcbowler6 from '../images/DCplayers/bowler6.png'
import dcbowler7 from '../images/DCplayers/bowler7.png'
import dcbowler8 from '../images/DCplayers/bowler8.png'

import gtbatter1 from '../images/GTplayers/batter1.png'
import gtbatter2 from '../images/GTplayers/batter2.png'
import gtbatter3 from '../images/GTplayers/batter3.png'
import gtbatter4 from '../images/GTplayers/batter4.png'
import gtbatter5 from '../images/GTplayers/batter5.png'
import gtbatter6 from '../images/GTplayers/batter6.png'
import gtallrounder1 from '../images/GTplayers/allrounder1.png'
import gtallrounder2 from '../images/GTplayers/allrounder2.png'
import gtallrounder3 from '../images/GTplayers/allrounder3.png'
import gtallrounder4 from '../images/GTplayers/allrounder4.png'
import gtallrounder5 from '../images/GTplayers/allrounder5.png'
import gtallrounder6 from '../images/GTplayers/allrounder6.png'
import gtbowler1 from '../images/GTplayers/bowler1.png'
import gtbowler2 from '../images/GTplayers/bowler2.png'
import gtbowler3 from '../images/GTplayers/bowler3.png'
import gtbowler4 from '../images/GTplayers/bowler4.png'
import gtbowler5 from '../images/GTplayers/bowler5.png'
import gtbowler6 from '../images/GTplayers/bowler6.png'
import gtbowler7 from '../images/GTplayers/bowler7.png'

import kkrbatter1 from '../images/kkrplayers/batter1.png'
import kkrbatter2 from '../images/kkrplayers/batter2.png'
import kkrbatter3 from '../images/kkrplayers/batter3.png'
import kkrbatter4 from '../images/kkrplayers/batter4.png'
import kkrbatter5 from '../images/kkrplayers/batter5.png'
import kkrbatter6 from '../images/kkrplayers/batter6.png'
import kkrbatter7 from '../images/kkrplayers/batter7.png'
import kkrbatter8 from '../images/kkrplayers/batter8.png'
import kkrbowler1 from '../images/kkrplayers/bowler1.png'
import kkrbowler2 from '../images/kkrplayers/bowler2.png'
import kkrbowler3 from '../images/kkrplayers/bowler3.png'
import kkrbowler4 from '../images/kkrplayers/bowler4.png'
import kkrbowler5 from '../images/kkrplayers/bowler5.png'
import kkrbowler6 from '../images/kkrplayers/bowler6.png'
import kkrbowler7 from '../images/kkrplayers/bowler7.png'
import kkrallrounder1 from '../images/kkrplayers/allrounder1.png'
import kkrallrounder2 from '../images/kkrplayers/allrounder2.png'
import kkrallrounder3 from '../images/kkrplayers/allrounder3.png'
import kkrallrounder4 from '../images/kkrplayers/allrounder4.png'

import lsgbatter1 from '../images/lsgplayers/batter1.png'
import lsgbatter2 from '../images/lsgplayers/batter2.png'
import lsgbatter3 from '../images/lsgplayers/batter3.png'
import lsgbatter4 from '../images/lsgplayers/batter4.png'
import lsgbatter5 from '../images/lsgplayers/batter5.png'
import lsgbowler1 from '../images/lsgplayers/bowler1.png'
import lsgbowler2 from '../images/lsgplayers/bowler2.png'
import lsgbowler3 from '../images/lsgplayers/bowler3.png'
import lsgbowler4 from '../images/lsgplayers/bowler4.png'
import lsgbowler5 from '../images/lsgplayers/bowler5.png'
import lsgbowler6 from '../images/lsgplayers/bowler6.png'
import lsgbowler7 from '../images/lsgplayers/bowler7.png'
import lsgbowler8 from '../images/lsgplayers/bowler8.png'
import lsgallrounder1 from '../images/lsgplayers/allrounder1.png'
import lsgallrounder2 from '../images/lsgplayers/allrounder2.png'
import lsgallrounder3 from '../images/lsgplayers/allrounder3.png'
import lsgallrounder4 from '../images/lsgplayers/allrounder4.png'
import lsgallrounder5 from '../images/lsgplayers/allrounder5.png'
import lsgallrounder6 from '../images/lsgplayers/allrounder6.png'
import lsgallrounder7 from '../images/lsgplayers/allrounder7.png'
import lsgallrounder8 from '../images/lsgplayers/allrounder8.png'

import mibatter1 from '../images/miplayers/batter1.png'
import mibatter2 from '../images/miplayers/batter2.png'
import mibatter3 from '../images/miplayers/batter3.png'
import mibatter4 from '../images/miplayers/batter4.png'
import mibatter5 from '../images/miplayers/batter5.png'
import mibatter6 from '../images/miplayers/batter6.png'
import mibatter7 from '../images/miplayers/batter7.png'
import mibatter8 from '../images/miplayers/batter8.png'
import mibowler1 from '../images/miplayers/bowler1.png'
import mibowler2 from '../images/miplayers/bowler2.png'
import mibowler3 from '../images/miplayers/bowler3.png'
import mibowler4 from '../images/miplayers/bowler4.png'
import mibowler5 from '../images/miplayers/bowler5.png'
import mibowler6 from '../images/miplayers/bowler6.png'
import miallrounder1 from '../images/miplayers/allrounder1.png'
import miallrounder2 from '../images/miplayers/allrounder2.png'
import miallrounder3 from '../images/miplayers/allrounder3.png'
import miallrounder4 from '../images/miplayers/allrounder4.png'
import miallrounder5 from '../images/miplayers/allrounder5.png'
import miallrounder6 from '../images/miplayers/allrounder6.png'

import pbksbatter1 from '../images/pbksplayers/batter1.png'
import pbksbatter2 from '../images/pbksplayers/batter2.png'
import pbksbatter3 from '../images/pbksplayers/batter3.png'
import pbksbatter4 from '../images/pbksplayers/batter4.png'
import pbksbatter5 from '../images/pbksplayers/batter5.png'
import pbksbatter6 from '../images/pbksplayers/batter6.png'
import pbksbatter7 from '../images/pbksplayers/batter7.png'
import pbksbatter8 from '../images/pbksplayers/batter8.png'
import pbksbowler1 from '../images/pbksplayers/bowler1.png'
import pbksbowler2 from '../images/pbksplayers/bowler2.png'
import pbksbowler3 from '../images/pbksplayers/bowler3.png'
import pbksbowler4 from '../images/pbksplayers/bowler4.png'
import pbksbowler5 from '../images/pbksplayers/bowler5.png'
import pbksbowler6 from '../images/pbksplayers/bowler6.png'
import pbksbowler7 from '../images/pbksplayers/bowler7.png'
import pbksbowler8 from '../images/pbksplayers/bowler8.png'
import pbksallrounder1 from '../images/pbksplayers/allrounder1.png'
import pbksallrounder2 from '../images/pbksplayers/allrounder2.png'
import pbksallrounder3 from '../images/pbksplayers/allrounder3.png'
import pbksallrounder4 from '../images/pbksplayers/allrounder4.png'
import pbksallrounder5 from '../images/pbksplayers/allrounder5.png'
import pbksallrounder6 from '../images/pbksplayers/allrounder6.png'
import pbksallrounder7 from '../images/pbksplayers/allrounder7.png'

import rrbatter1 from '../images/rrplayers/batter1.png'
import rrbatter2 from '../images/rrplayers/batter2.png'
import rrbatter3 from '../images/rrplayers/batter3.png'
import rrbatter4 from '../images/rrplayers/batter4.png'
import rrbatter5 from '../images/rrplayers/batter5.png'
import rrbatter6 from '../images/rrplayers/batter6.png'
import rrbatter7 from '../images/rrplayers/batter7.png'
import rrbatter8 from '../images/rrplayers/batter8.png'
import rrbatter9 from '../images/rrplayers/batter9.png'
import rrbatter10 from '../images/rrplayers/batter10.png'
import rrbowler1 from '../images/rrplayers/bowler1.png'
import rrbowler2 from '../images/rrplayers/bowler2.png'
import rrbowler3 from '../images/rrplayers/bowler3.png'
import rrbowler4 from '../images/rrplayers/bowler4.png'
import rrbowler5 from '../images/rrplayers/bowler5.png'
import rrbowler6 from '../images/rrplayers/bowler6.png'
import rrbowler7 from '../images/rrplayers/bowler7.png'
import rrallrounder1 from '../images/rrplayers/allrounder1.png'
import rrallrounder2 from '../images/rrplayers/allrounder2.png'
import rrallrounder3 from '../images/rrplayers/allrounder3.png'

import rcbbatter1 from '../images/rcbplayers/batter1.png'
import rcbbatter2 from '../images/rcbplayers/batter2.png'
import rcbbatter3 from '../images/rcbplayers/batter3.png'
import rcbbatter4 from '../images/rcbplayers/batter4.png'
import rcbbatter5 from '../images/rcbplayers/batter5.png'
import rcbbatter6 from '../images/rcbplayers/batter6.png'
import rcbbatter7 from '../images/rcbplayers/batter7.png'
import rcbbatter8 from '../images/rcbplayers/batter8.png'
import rcbbowler1 from '../images/rcbplayers/bowler1.png'
import rcbbowler2 from '../images/rcbplayers/bowler2.png'
import rcbbowler3 from '../images/rcbplayers/bowler3.png'
import rcbbowler4 from '../images/rcbplayers/bowler4.png'
import rcbbowler5 from '../images/rcbplayers/bowler5.png'
import rcbbowler6 from '../images/rcbplayers/bowler6.png'
import rcbbowler7 from '../images/rcbplayers/bowler7.png'
import rcbbowler8 from '../images/rcbplayers/bowler8.png'
import rcballrounder1 from '../images/rcbplayers/allrounder1.png'
import rcballrounder2 from '../images/rcbplayers/allrounder2.png'
import rcballrounder3 from '../images/rcbplayers/allrounder3.png'
import rcballrounder4 from '../images/rcbplayers/allrounder4.png'
import rcballrounder5 from '../images/rcbplayers/allrounder5.png'
import rcballrounder6 from '../images/rcbplayers/allrounder6.png'
import rcballrounder7 from '../images/rcbplayers/allrounder7.png'

import srhbatter1 from '../images/srhplayers/batter1.png'
import srhbatter2 from '../images/srhplayers/batter2.png'
import srhbatter3 from '../images/srhplayers/batter3.png'
import srhbatter4 from '../images/srhplayers/batter4.png'
import srhbatter5 from '../images/srhplayers/batter5.png'
import srhbatter6 from '../images/srhplayers/batter6.png'
import srhbatter7 from '../images/srhplayers/batter7.png'
import srhbatter8 from '../images/srhplayers/batter8.png'
import srhbatter9 from '../images/srhplayers/batter9.png'
import srhbowler1 from '../images/srhplayers/bowler1.png'
import srhbowler2 from '../images/srhplayers/bowler2.png'
import srhbowler3 from '../images/srhplayers/bowler3.png'
import srhbowler4 from '../images/srhplayers/bowler4.png'
import srhbowler5 from '../images/srhplayers/bowler5.png'
import srhbowler6 from '../images/srhplayers/bowler6.png'
import srhbowler7 from '../images/srhplayers/bowler7.png'
import srhallrounder1 from '../images/srhplayers/allrounder1.png'
import srhallrounder2 from '../images/srhplayers/allrounder2.png'
import srhallrounder3 from '../images/srhplayers/allrounder3.png'
import srhallrounder4 from '../images/srhplayers/allrounder4.png'
import srhallrounder5 from '../images/srhplayers/allrounder5.png'
import { Link, useParams } from 'react-router-dom'
  
import { teamsData } from './Teams'

import CSKoutline from '../images/teamsimages/CSKoutline.png'
import teamtrophy from '../images/teamtrophy.png'

export const useTeamData = () => {
  const { teamName } = useParams();
  const teamDATA = playerData.find((m) => m.name === teamName);
  return teamDATA;
};

const PlayersList = () => {

  const { teamName } = useParams();
  const teamDATA = useTeamData();
  const teamInfo = teamsData.find(team => team.name === teamName);
  
  // console.log(teamDATA,'ccccc')
  return (
  <>
  <Box backgroundColor='#061e59'>
        <Breadcrumbs separator='/' sx={{fontSize:'13px',color:'white',padding:'5px',marginLeft:'70px'}} >
          <Link underline='hover' href='/' style={{underline:'hover',textDecoration:'none',color:'white'}}>Home</Link>
          <Link underline='hover' href='/teams' style={{underline:'hover',textDecoration:'none',color:'white'}}>Teams</Link>
          <Link underline='hover' href='#' style={{underline:'hover',textDecoration:'none',color:'white'}}>CSK</Link>
        </Breadcrumbs>
      </Box>    

  <Stack width='auto' height='365px' sx={{backgroundColor:'#031945'}} alignItems='center' paddingBottom='30px' spacing={5}>
    <Stack direction='row' justifyContent='center' alignItems='center' marginTop='40px' spacing={2}>
      {
        teamsData.map((team,index)=>(
          <Link to={`/teams/playerslist/${team.name}`}><Box key={index} width='100px' height='98px' display='flex' justifyContent='center' alignItems='center' sx={{ borderRadius: '10px', backgroundColor: '#031537' }}>
            <img src={team.teamImage} alt={team.teamName} width='70px' height='70px' />
          </Box>
          </Link>
        ))
      }
    </Stack>
    {teamInfo && (
    <Stack direction='row' spacing={17} alignItems='center'>
      <Stack direction='row' spacing={3}>
        <img src={teamInfo.teamImage} alt='teamname' width='117px' height='117px'/>
        <Stack spacing={2}>
          <Typography variant='h4' sx={{color:"white",fontWeight:'700'}}>{teamInfo.teamName}</Typography>
          <Stack direction='rows'>
            <img src={teamtrophy} alt='trophy' width='46px' height='45px'/>
            <Box sx={{border:'1px solid rgba(255, 255, 255, .2)', padding:'7px',borderRadius:'25px', color:'white'}}>2010,2011,2018,2021,2023</Box>
          </Stack>
          <Button endIcon={<OpenInNewIcon />} variant='filled' sx={{backgroundColor:'#ef4123',color:"white",width:'210px'}}>Official Team Site</Button>
        </Stack>
      </Stack>
      <Stack>
        <TableContainer width='451px' height='166px' sx={{backgroundColor:'#112a5c'}}>
          <Table  width='auto'>
            <TableRow border='collapse'  width='451px'>
              <TableCell sx={{color:'#ffc52f',fontWeight:'700',alignItems: 'center', whiteSpace: 'nowrap' }}>Owner -Chennai Super Kings Cricket Ltd.</TableCell>
            </TableRow>
            <TableRow border='collapse'  width='451px'>
              <TableCell sx={{color:'#ffc52f',fontWeight:'700',alignItems: 'center', whiteSpace: 'nowrap' }}>Coach -Stephen Fleming</TableCell>
            </TableRow>
            <TableRow border='collapse'  width='451px'>
              <TableCell sx={{color:'#ffc52f',fontWeight:'700',alignItems: 'center', whiteSpace: 'nowrap' }}>Venue -M. A. Chidambaram Stadium </TableCell>
            </TableRow>
            <TableRow border='collapse'  width='451px'>
              <TableCell sx={{color:'#ffc52f',fontWeight:'700',alignItems: 'center', whiteSpace: 'nowrap' }}>Captain -Ruturaj Gaikwad</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>    
    )}
  </Stack>

  <Stack alignItems='center' spacing={6} margin='20px' >
      {Object.entries(teamDATA.DATA).map(([role, players]) => (
        <React.Fragment key={role}>
          <Stack width='1280px' height='auto' alignItems='center' spacing={4}>
            <Typography variant='h5' sx={{color:'black', fontWeight:'700',alignSelf:'flex-start'}}>{role.charAt(0).toUpperCase()+ role.slice(1)}</Typography>
            {/* <Divider sx={{ width: '100%', borderColor: 'grey.500' }} /> */}
            <ImageList  cols={5} gap={10}>
              {players.map((player, index) => (
                <ImageListItem width='243px' height='260px'  key={index} >
                  <Stack sx={{backgroundColor:'white',borderRadius:'6px',alignItems:'center'}} width='243px' height='260px' alignItems='center'>
                    <img src={player.img} alt={player.name} width='200px' height='200px' style={{marginBottom :'-9px'}} />
                    <Divider sx={{ width: '90%', margin: '10px 0' }} />
                    <Typography variant='h6' marginTop='-4px'>{player.name}</Typography>
                    <Typography variant='body2' marginTop='-4px' sx={{fontSize:'12px',color:'rgba(17, 20, 28, .7)'}}>{player.role}</Typography>
                  </Stack>
                </ImageListItem>
              ))}
            </ImageList>
          </Stack>
        </React.Fragment>
      ))}
    </Stack>
  </>
  
  )
}

export const playerData =[
  {
    name:'CSK',
    DATA :{
          batters: [
            {
              img: cskbatter1,
              name:'RUTHURAJ GAIKWAD',
              role:'batter',
            },{
              img: cskbatter2,
              name:'DEVON CONWAY',
              role:'batter',
            },{
              img: cskbatter3,
              name:'MS DHONI',
              role:'Wicketkeeper batter',
            },{
              img: cskbatter4,
              name:'AJINKYA RAHANE',
              role:'batter',
            },{
              img: cskbatter5,
              name:'SHAIK RASHEED',
              role:'batter',
            },{
              img: cskbatter6,
              name:'SAMEER RIZVI',
              role:'batter',
            },{
              img: cskbatter7,
              name:'AVANISH RAO',
              role:'Wicketkeeper batter',
            },
          ],
          bowlers: [
            {
              img: cskbowler1,
              name:'RUTHURAJ GAIKWAD',
              role:'bowler',
            },{
              img: cskbowler2,
              name:'DEVON CONWAY',
              role:'bowler',
            },{
              img: cskbowler3,
              name:'MS DHONI',
              role:'Wicketkeeper bowler',
            },{
              img: cskbowler4,
              name:'AJINKYA RAHANE',
              role:'bowler',
            },{
              img: cskbowler5,
              name:'SHAIK RASHEED',
              role:'bowler',
            },{
              img: cskbowler6,
              name:'SAMEER RIZVI',
              role:'bowler',
            },{
              img: cskbowler7,
              name:'AVANISH RAO',
              role:'Wicketkeeper bowler',
            },{
              img: cskbowler8,
              name:'SAMEER RIZVI',
              role:'bowler',
            },{
              img: cskbowler9,
              name:'AVANISH RAO',
              role:'Wicketkeeper bowler',
            },{
              img: cskbowler10,
              name:'AVANISH RAO',
              role:'Wicketkeeper bowler',
            },
          ],
          allrounders:[
            {
              img: cskallrounder1,
              name:'RUTHURAJ GAIKWAD',
              role:'allrounder',
            },{
              img: cskallrounder2,
              name:'DEVON CONWAY',
              role:'allrounder',
            },{
              img: cskallrounder3,
              name:'MS DHONI',
              role:'Wicketkeeper allrounder',
            },{
              img: cskallrounder4,
              name:'AJINKYA RAHANE',
              role:'allrounder',
            },{
              img: cskallrounder5,
              name:'SHAIK RASHEED',
              role:'allrounder',
            },{
              img: cskallrounder6,
              name:'SAMEER RIZVI',
              role:'allrounder',
            },{
              img: cskallrounder7,
              name:'AVANISH RAO',
              role:'Wicketkeeper allrounder',
            },{
              img: cskallrounder8,
              name:'SAMEER RIZVI',
              role:'allrounder',
            },{
              img: cskallrounder9,
              name:'AVANISH RAO',
              role:'Wicketkeeper allrounder',
            }
          ]
        },
  },
  {
    name:'DC',
    DATA :{
          batters: [
            {
              img: dcbatter1,
              name:'RUTHURAJ GAIKWAD',
              role:'batter',
            },{
              img: dcbatter2,
              name:'DEVON CONWAY',
              role:'batter',
            },{
              img: dcbatter3,
              name:'MS DHONI',
              role:'Wicketkeeper batter',
            },{
              img: dcbatter4,
              name:'AJINKYA RAHANE',
              role:'batter',
            },{
              img: dcbatter5,
              name:'SHAIK RASHEED',
              role:'batter',
            },{
              img: dcbatter6,
              name:'SAMEER RIZVI',
              role:'batter',
            },{
              img: dcbatter7,
              name:'AVANISH RAO',
              role:'Wicketkeeper batter',
            },
          ],
          bowlers: [
            {
              img: dcbowler1,
              name:'RUTHURAJ GAIKWAD',
              role:'bowler',
            },{
              img: dcbowler2,
              name:'DEVON CONWAY',
              role:'bowler',
            },{
              img: dcbowler3,
              name:'MS DHONI',
              role:'Wicketkeeper bowler',
            },{
              img: dcbowler4,
              name:'AJINKYA RAHANE',
              role:'bowler',
            },{
              img: dcbowler5,
              name:'SHAIK RASHEED',
              role:'bowler',
            },{
              img: dcbowler6,
              name:'SAMEER RIZVI',
              role:'bowler',
            },{
              img: dcbowler7,
              name:'AVANISH RAO',
              role:'Wicketkeeper bowler',
            },{
              img: dcbowler8,
              name:'SAMEER RIZVI',
              role:'bowler',
            },
          ],
          allrounders:[
            {
              img: dcallrounder1,
              name:'RUTHURAJ GAIKWAD',
              role:'allrounder',
            },{
              img: dcallrounder2,
              name:'DEVON CONWAY',
              role:'allrounder',
            },{
              img: dcallrounder3,
              name:'MS DHONI',
              role:'Wicketkeeper allrounder',
            },{
              img: dcallrounder4,
              name:'AJINKYA RAHANE',
              role:'allrounder',
            },{
              img: dcallrounder5,
              name:'SHAIK RASHEED',
              role:'allrounder',
            }
          ]
        },
  },
  {
    name:'GT',
    DATA :{
          batters: [
            {
              img: gtbatter1,
              name:'RUTHURAJ GAIKWAD',
              role:'batter',
            },{
              img: gtbatter2,
              name:'DEVON CONWAY',
              role:'batter',
            },{
              img: gtbatter3,
              name:'MS DHONI',
              role:'Wicketkeeper batter',
            },{
              img: gtbatter4,
              name:'AJINKYA RAHANE',
              role:'batter',
            },{
              img: gtbatter5,
              name:'SHAIK RASHEED',
              role:'batter',
            },{
              img: gtbatter6,
              name:'SAMEER RIZVI',
              role:'batter',
            },
          ],
          bowlers: [
            {
              img: gtbowler1,
              name:'RUTHURAJ GAIKWAD',
              role:'bowler',
            },{
              img: gtbowler2,
              name:'DEVON CONWAY',
              role:'bowler',
            },{
              img: gtbowler3,
              name:'MS DHONI',
              role:'Wicketkeeper bowler',
            },{
              img: gtbowler4,
              name:'AJINKYA RAHANE',
              role:'bowler',
            },{
              img: gtbowler5,
              name:'SHAIK RASHEED',
              role:'bowler',
            },{
              img: gtbowler6,
              name:'SAMEER RIZVI',
              role:'bowler',
            },{
              img: gtbowler7,
              name:'AVANISH RAO',
              role:'Wicketkeeper bowler',
            }
          ],
          allrounders:[
            {
              img: gtallrounder1,
              name:'RUTHURAJ GAIKWAD',
              role:'allrounder',
            },{
              img: gtallrounder2,
              name:'DEVON CONWAY',
              role:'allrounder',
            },{
              img: gtallrounder3,
              name:'MS DHONI',
              role:'Wicketkeeper allrounder',
            },{
              img: gtallrounder4,
              name:'AJINKYA RAHANE',
              role:'allrounder',
            },{
              img: gtallrounder5,
              name:'SHAIK RASHEED',
              role:'allrounder',
            },{
              img: gtallrounder6,
              name:'SAMEER RIZVI',
              role:'allrounder',
            }
          ]
        },
  },
  {
    name:'KKR',
    DATA: {
        batters: [
            {
                img: kkrbatter1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'batter',
            },{
                img: kkrbatter2,
                name: 'DEVON CONWAY',
                role: 'batter',
            },{
                img: kkrbatter3,
                name: 'MS DHONI',
                role: 'Wicketkeeper batter',
            },{
                img: kkrbatter4,
                name: 'AJINKYA RAHANE',
                role: 'batter',
            },{
                img: kkrbatter5,
                name: 'SHAIK RASHEED',
                role: 'batter',
            },{
                img: kkrbatter6,
                name: 'SAMEER RIZVI',
                role: 'batter',
            },{
                img: kkrbatter7,
                name: 'PLAYER 7',
                role: 'batter',
            },{
                img: kkrbatter8,
                name: 'PLAYER 8',
                role: 'batter',
            },
        ],
        bowlers: [
            {
                img: kkrbowler1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'bowler',
            },{
                img: kkrbowler2,
                name: 'DEVON CONWAY',
                role: 'bowler',
            },{
                img: kkrbowler3,
                name: 'MS DHONI',
                role: 'Wicketkeeper bowler',
            },{
                img: kkrbowler4,
                name: 'AJINKYA RAHANE',
                role: 'bowler',
            },{
                img: kkrbowler5,
                name: 'SHAIK RASHEED',
                role: 'bowler',
            },{
                img: kkrbowler6,
                name: 'SAMEER RIZVI',
                role: 'bowler',
            },{
                img: kkrbowler7,
                name: 'AVANISH RAO',
                role: 'Wicketkeeper bowler',
            }
        ],
        allrounders: [
            {
                img: kkrallrounder1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'allrounder',
            },{
                img: kkrallrounder2,
                name: 'DEVON CONWAY',
                role: 'allrounder',
            },{
                img: kkrallrounder3,
                name: 'MS DHONI',
                role: 'Wicketkeeper allrounder',
            },{
                img: kkrallrounder4,
                name: 'AJINKYA RAHANE',
                role: 'allrounder',
            }
        ]
    }
  },
  {
    name: 'LSG',
    DATA: {
        batters: [
            {
                img: lsgbatter1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'batter',
            },{
                img: lsgbatter2,
                name: 'DEVON CONWAY',
                role: 'batter',
            },{
                img: lsgbatter3,
                name: 'MS DHONI',
                role: 'Wicketkeeper batter',
            },{
                img: lsgbatter4,
                name: 'AJINKYA RAHANE',
                role: 'batter',
            },{
                img: lsgbatter5,
                name: 'SHAIK RASHEED',
                role: 'batter',
            },
        ],
        bowlers: [
            {
                img: lsgbowler1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'bowler',
            },{
                img: lsgbowler2,
                name: 'DEVON CONWAY',
                role: 'bowler',
            },{
                img: lsgbowler3,
                name: 'MS DHONI',
                role: 'Wicketkeeper bowler',
            },{
                img: lsgbowler4,
                name: 'AJINKYA RAHANE',
                role: 'bowler',
            },{
                img: lsgbowler5,
                name: 'SHAIK RASHEED',
                role: 'bowler',
            },{
                img: lsgbowler6,
                name: 'SAMEER RIZVI',
                role: 'bowler',
            },{
                img: lsgbowler7,
                name: 'AVANISH RAO',
                role: 'Wicketkeeper bowler',
            },{
                img: lsgbowler8,
                name: 'SAMEER RIZVI',
                role: 'bowler',
            },
        ],
        allrounders: [
            {
                img: lsgallrounder1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'allrounder',
            },{
                img: lsgallrounder2,
                name: 'DEVON CONWAY',
                role: 'allrounder',
            },{
                img: lsgallrounder3,
                name: 'MS DHONI',
                role: 'Wicketkeeper allrounder',
            },{
                img: lsgallrounder4,
                name: 'AJINKYA RAHANE',
                role: 'allrounder',
            },{
                img: lsgallrounder5,
                name: 'SHAIK RASHEED',
                role: 'allrounder',
            },{
                img: lsgallrounder6,
                name: 'SAMEER RIZVI',
                role: 'allrounder',
            },{
                img: lsgallrounder7,
                name: 'AVANISH RAO',
                role: 'Wicketkeeper allrounder',
            },{
                img: lsgallrounder8,
                name: 'SAMEER RIZVI',
                role: 'allrounder',
            },
        ]
    }
  },
  {
    name: 'MI',
    DATA: {
        batters: [
            {
                img: mibatter1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'batter',
            },{
                img: mibatter2,
                name: 'DEVON CONWAY',
                role: 'batter',
            },{
                img: mibatter3,
                name: 'MS DHONI',
                role: 'Wicketkeeper batter',
            },{
                img: mibatter4,
                name: 'AJINKYA RAHANE',
                role: 'batter',
            },{
                img: mibatter5,
                name: 'SHAIK RASHEED',
                role: 'batter',
            },{
                img: mibatter6,
                name: 'SAMEER RIZVI',
                role: 'batter',
            },{
                img: mibatter7,
                name: 'AVANISH RAO',
                role: 'Wicketkeeper batter',
            },{
                img: mibatter8,
                name: 'SAMEER RIZVI',
                role: 'batter',
            },
        ],
        bowlers: [
            {
                img: mibowler1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'bowler',
            },{
                img: mibowler2,
                name: 'DEVON CONWAY',
                role: 'bowler',
            },{
                img: mibowler3,
                name: 'MS DHONI',
                role: 'Wicketkeeper bowler',
            },{
                img: mibowler4,
                name: 'AJINKYA RAHANE',
                role: 'bowler',
            },{
                img: mibowler5,
                name: 'SHAIK RASHEED',
                role: 'bowler',
            },{
                img: mibowler6,
                name: 'SAMEER RIZVI',
                role: 'bowler',
            },
        ],
        allrounders: [
            {
                img: miallrounder1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'allrounder',
            },{
                img: miallrounder2,
                name: 'DEVON CONWAY',
                role: 'allrounder',
            },{
                img: miallrounder3,
                name: 'MS DHONI',
                role: 'Wicketkeeper allrounder',
            },{
                img: miallrounder4,
                name: 'AJINKYA RAHANE',
                role: 'allrounder',
            },{
                img: miallrounder5,
                name: 'SHAIK RASHEED',
                role: 'allrounder',
            },{
                img: miallrounder6,
                name: 'SAMEER RIZVI',
                role: 'allrounder',
            },
        ]
    }
  },
  {
    name: 'PBKS',
    DATA: {
        batters: [
            {
                img: pbksbatter1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'batter',
            },{
                img: pbksbatter2,
                name: 'DEVON CONWAY',
                role: 'batter',
            },{
                img: pbksbatter3,
                name: 'MS DHONI',
                role: 'Wicketkeeper batter',
            },{
                img: pbksbatter4,
                name: 'AJINKYA RAHANE',
                role: 'batter',
            },{
                img: pbksbatter5,
                name: 'SHAIK RASHEED',
                role: 'batter',
            },{
                img: pbksbatter6,
                name: 'SAMEER RIZVI',
                role: 'batter',
            },{
                img: pbksbatter7,
                name: 'AVANISH RAO',
                role: 'Wicketkeeper batter',
            },{
                img: pbksbatter8,
                name: 'SAMEER RIZVI',
                role: 'batter',
            },
        ],
        bowlers: [
            {
                img: pbksbowler1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'bowler',
            },{
                img: pbksbowler2,
                name: 'DEVON CONWAY',
                role: 'bowler',
            },{
                img: pbksbowler3,
                name: 'MS DHONI',
                role: 'Wicketkeeper bowler',
            },{
                img: pbksbowler4,
                name: 'AJINKYA RAHANE',
                role: 'bowler',
            },{
                img: pbksbowler5,
                name: 'SHAIK RASHEED',
                role: 'bowler',
            },{
                img: pbksbowler6,
                name: 'SAMEER RIZVI',
                role: 'bowler',
            },{
                img: pbksbowler7,
                name: 'AVANISH RAO',
                role: 'Wicketkeeper bowler',
            },{
                img: pbksbowler8,
                name: 'SAMEER RIZVI',
                role: 'bowler',
            },
        ],
        allrounders: [
            {
                img: pbksallrounder1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'allrounder',
            },{
                img: pbksallrounder2,
                name: 'DEVON CONWAY',
                role: 'allrounder',
            },{
                img: pbksallrounder3,
                name: 'MS DHONI',
                role: 'Wicketkeeper allrounder',
            },{
                img: pbksallrounder4,
                name: 'AJINKYA RAHANE',
                role: 'allrounder',
            },{
                img: pbksallrounder5,
                name: 'SHAIK RASHEED',
                role: 'allrounder',
            },{
                img: pbksallrounder6,
                name: 'SAMEER RIZVI',
                role: 'allrounder',
            },{
                img: pbksallrounder7,
                name: 'AVANISH RAO',
                role: 'Wicketkeeper allrounder',
            },
        ]
    }
  },
  {
    name: 'RR',
    DATA: {
        batters: [
            {
                img: rrbatter1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'batter',
            },{
                img: rrbatter2,
                name: 'DEVON CONWAY',
                role: 'batter',
            },{
                img: rrbatter3,
                name: 'MS DHONI',
                role: 'Wicketkeeper batter',
            },{
                img: rrbatter4,
                name: 'AJINKYA RAHANE',
                role: 'batter',
            },{
                img: rrbatter5,
                name: 'SHAIK RASHEED',
                role: 'batter',
            },{
                img: rrbatter6,
                name: 'SAMEER RIZVI',
                role: 'batter',
            },{
                img: rrbatter7,
                name: 'AVANISH RAO',
                role: 'Wicketkeeper batter',
            },{
                img: rrbatter8,
                name: 'SAMEER RIZVI',
                role: 'batter',
            },{
                img: rrbatter9,
                name: 'PLAYER 9',
                role: 'batter',
            },{
                img: rrbatter10,
                name: 'PLAYER 10',
                role: 'batter',
            },
        ],
        bowlers: [
            {
                img: rrbowler1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'bowler',
            },{
                img: rrbowler2,
                name: 'DEVON CONWAY',
                role: 'bowler',
            },{
                img: rrbowler3,
                name: 'MS DHONI',
                role: 'Wicketkeeper bowler',
            },{
                img: rrbowler4,
                name: 'AJINKYA RAHANE',
                role: 'bowler',
            },{
                img: rrbowler5,
                name: 'SHAIK RASHEED',
                role: 'bowler',
            },{
                img: rrbowler6,
                name: 'SAMEER RIZVI',
                role: 'bowler',
            },{
                img: rrbowler7,
                name: 'AVANISH RAO',
                role: 'Wicketkeeper bowler',
            },
        ],
        allrounders: [
            {
                img: rrallrounder1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'allrounder',
            },{
                img: rrallrounder2,
                name: 'DEVON CONWAY',
                role: 'allrounder',
            },{
                img: rrallrounder3,
                name: 'MS DHONI',
                role: 'Wicketkeeper allrounder',
            },
        ]
    }
  },
  {
    name: 'RCB',
    DATA: {
        batters: [
            {
                img: rcbbatter1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'batter',
            },{
                img: rcbbatter2,
                name: 'DEVON CONWAY',
                role: 'batter',
            },{
                img: rcbbatter3,
                name: 'MS DHONI',
                role: 'Wicketkeeper batter',
            },{
                img: rcbbatter4,
                name: 'AJINKYA RAHANE',
                role: 'batter',
            },{
                img: rcbbatter5,
                name: 'SHAIK RASHEED',
                role: 'batter',
            },{
                img: rcbbatter6,
                name: 'SAMEER RIZVI',
                role: 'batter',
            },{
                img: rcbbatter7,
                name: 'AVANISH RAO',
                role: 'Wicketkeeper batter',
            },{
                img: rcbbatter8,
                name: 'SAMEER RIZVI',
                role: 'batter',
            },
        ],
        bowlers: [
          {
              img: rcbbowler1,
              name: 'RUTHURAJ GAIKWAD',
              role: 'bowler',
          },{
              img: rcbbowler2,
              name: 'DEVON CONWAY',
              role: 'bowler',
          },{
              img: rcbbowler3,
              name: 'MS DHONI',
              role: 'Wicketkeeper bowler',
          },{
              img: rcbbowler4,
              name: 'AJINKYA RAHANE',
              role: 'bowler',
          },{
              img: rcbbowler5,
              name: 'SHAIK RASHEED',
              role: 'bowler',
          },{
              img: rcbbowler6,
              name: 'SAMEER RIZVI',
              role: 'bowler',
          },{
              img: rcbbowler7,
              name: 'AVANISH RAO',
              role: 'Wicketkeeper bowler',
          },{
              img: rcbbowler8,
              name: 'SAMEER RIZVI',
              role: 'bowler',
          },
      ],
      allrounders: [
          {
              img: rcballrounder1,
              name: 'RUTHURAJ GAIKWAD',
              role: 'allrounder',
          },{
              img: rcballrounder2,
              name: 'DEVON CONWAY',
              role: 'allrounder',
          },{
              img: rcballrounder3,
              name: 'MS DHONI',
              role: 'Wicketkeeper allrounder',
          },{
              img: rcballrounder4,
              name: 'AJINKYA RAHANE',
              role: 'allrounder',
          },{
              img: rcballrounder5,
              name: 'SHAIK RASHEED',
              role: 'allrounder',
          },{
              img: rcballrounder6,
              name: 'SAMEER RIZVI',
              role: 'allrounder',
          },{
              img: rcballrounder7,
              name: 'AVANISH RAO',
              role: 'Wicketkeeper allrounder',
          },
        ]
    }
  },
  {
    name: 'SRH',
    DATA: {
        batters: [
            {
                img: srhbatter1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'batter',
            },{
                img: srhbatter2,
                name: 'DEVON CONWAY',
                role: 'batter',
            },{
                img: srhbatter3,
                name: 'MS DHONI',
                role: 'Wicketkeeper batter',
            },{
                img: srhbatter4,
                name: 'AJINKYA RAHANE',
                role: 'batter',
            },{
                img: srhbatter5,
                name: 'SHAIK RASHEED',
                role: 'batter',
            },{
                img: srhbatter6,
                name: 'SAMEER RIZVI',
                role: 'batter',
            },{
                img: srhbatter7,
                name: 'AVANISH RAO',
                role: 'Wicketkeeper batter',
            },{
                img: srhbatter8,
                name: 'SAMEER RIZVI',
                role: 'batter',
            },{
                img: srhbatter9,
                name: 'AVANISH RAO',
                role: 'batter',
            },
        ],
        bowlers: [
            {
                img: srhbowler1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'bowler',
            },{
                img: srhbowler2,
                name: 'DEVON CONWAY',
                role: 'bowler',
            },{
                img: srhbowler3,
                name: 'MS DHONI',
                role: 'Wicketkeeper bowler',
            },{
                img: srhbowler4,
                name: 'AJINKYA RAHANE',
                role: 'bowler',
            },{
                img: srhbowler5,
                name: 'SHAIK RASHEED',
                role: 'bowler',
            },{
                img: srhbowler6,
                name: 'SAMEER RIZVI',
                role: 'bowler',
            },{
                img: srhbowler7,
                name: 'AVANISH RAO',
                role: 'Wicketkeeper bowler',
            },
        ],
        allrounders: [
            {
                img: srhallrounder1,
                name: 'RUTHURAJ GAIKWAD',
                role: 'allrounder',
            },{
                img: srhallrounder2,
                name: 'DEVON CONWAY',
                role: 'allrounder',
            },{
                img: srhallrounder3,
                name: 'MS DHONI',
                role: 'Wicketkeeper allrounder',
            },{
                img: srhallrounder4,
                name: 'AJINKYA RAHANE',
                role: 'allrounder',
            },{
                img: srhallrounder5,
                name: 'SHAIK RASHEED',
                role: 'allrounder',
            },
        ]
    }
  }
]


export default PlayersList
