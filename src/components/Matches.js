import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Breadcrumbs, Button, Card, IconButton, Link, Stack, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IoTicketOutline } from "react-icons/io5";
import { Link as RedirectLink,Outlet } from 'react-router-dom';
import { pointsTableData } from './PointsTable';
import GT from '../images/GT.png'
import LSG from '../images/LSG.png'
import CSK from '../images/CSK.png'
import RCB from '../images/RCB.png'
import DC from '../images/DC.png'
import PBKS from '../images/PBKS.png'
import RR from '../images/RR.png'
import KKR from '../images/KKR.png'
import MI from '../images/MI.png'
import SRH from '../images/SRH.png'

const Matches = () => {
  const savedTabValue = localStorage.getItem('activeTab') || '1'
  const [value, setValue] = useState(savedTabValue)
  

  const handleMatchesTab =(event,newValue)=>{
    setValue(newValue)
    localStorage.setItem('activeTab', newValue);
  }
  

  return (
    <>
      <Box backgroundColor='#061e59'>
        <Breadcrumbs separator='/' sx={{fontSize:'13px',color:'white',padding:'5px',marginLeft:'70px'}} >
          <Link underline='hover' href='/' style={{underline:'hover',textDecoration:'none',color:'white'}}>Home</Link>
          <Link underline='hover' href='/matches' style={{underline:'hover',textDecoration:'none',color:'white'}}>Matches</Link>
          <Link underline='hover' href='#' style={{underline:'hover',textDecoration:'none',color:'white'}}>Fixtures</Link>
        </Breadcrumbs>
      </Box>    
      <Box backgroundColor='#081033' width='auto' height='auto' padding='30px'>
        <Typography  sx={{fontSize:'33px', fontWeight:'700',color:'white',marginLeft:'42px'}}>MATCHES</Typography>
      </Box>

      <TabContext value={value}>
        <Stack alignItems='center' marginTop='-25px'>
          <Box sx={{backgroundColor:'white',width:'auto',height:'auto'}}>
            <TabList  indicatorColor="secondary" sx={{alignItems:'center',justifyContent:'center',color:'black'}} 
              onChange={handleMatchesTab}
            >
              <Tab label='Fixtures' value='1'/>
              <Tab label='Results' value='2'/>
              <Tab label='Point Table' value='3'/>
              <Tab label='Playoffs' value='4'/>
            </TabList>
          </Box>
        </Stack >
        <TabPanel value='1'>
          <Stack padding='100px 100px 0px 100px'>
            <Stack direction='row' spacing={3} marginBottom='30px'>
              <Button endIcon={<KeyboardArrowDownIcon sx={{marginLeft:'30px'}}/>} sx={{color:'black', backgroundColor:'white',padding:'10px'}}>All Teams</Button>
              <Button endIcon={<KeyboardArrowDownIcon sx={{marginLeft:'30px'}}/>} sx={{color:'black', backgroundColor:'white',padding:'10px'}}>All Venues</Button>
            </Stack>
            <Stack spacing={2} backgroundColor='#f0f2f8' borderRadius='20px' height='auto' width='1183px' padding='50px' alignItems='center' justifyItems='center'>
            
            {matchData.map((match) => (
              <Card key={match.id} sx={{height:'120px',width:'1180px',padding:'20px'}} >
                <Stack direction='row' spacing={14} justifyContent='space-around'>

                  <Stack alignItems='center' justifyContent='center'>
                    <Button variant='outlined' size='small' sx={{color:'#DC5034',border:'1px solid #FF783E'}}>Match {match.id}</Button>
                    <br/><Typography variant='h6'>MAY,WED 15</Typography>
                    <Typography variant='body2' sx={{fontSize:'12px'}}>7:30 pm IST</Typography>
                  </Stack>

                  <Stack alignItems='center' justifyContent='center'>
                    <Typography sx={{fontSize:'14px'}}>{match.location}</Typography> <br/>                   
                    <Stack direction='row' alignItems='center' spacing={5} >
                      <Stack direction='row' alignItems='center' spacing={1} sx={{ maxWidth: '200px', textAlign: 'center' }}>
                        <img src={match.teamAimg} alt='RR' width='45px' height='45px'/>
                        <Typography variant='body1' sx={{fontSize:'13px',fontWeight:'700',wordBreak: 'break-word'}}>{match.teamA}</Typography>
                      </Stack>
                      <Typography variant='h6' sx={{color:'#7b7b7b',fontWeight:'700',fontSize:'20px'}}>VS</Typography>
                      <Stack direction='row' alignItems='center' spacing={1} sx={{ maxWidth: '200px', textAlign: 'center' }}>      
                        <img src={match.teamBimg} alt='RR' width='45px' height='45px'/>
                        <Typography variant='subtitle2' sx={{fontSize:'13px',fontWeight:'700',wordBreak: 'break-word'}}>{match.teamB}</Typography>
                      </Stack>
                    </Stack>
                  </Stack>

                  <Stack direction='row' alignItems='center' margin='0px' spacing={3} justifyContent='center'>
                      <IconButton width='30px' height='50px' ><IoTicketOutline sx={{width :'50px',height:'50px'}} /></IconButton>
                      <RedirectLink to={`/matches/matchcentre/${match.id}`}><Button sx={{backgroundColor:'#DC5034',color:'white'}} >Match Centre</Button></RedirectLink>
                  </Stack>

                </Stack>                    
              </Card>
            ))}
            </Stack>
          </Stack>
        </TabPanel>

        <TabPanel value='2'>
          <Stack padding='100px 100px 0px 100px'>
            <Stack direction='row' spacing={3} marginBottom='30px'>
              <Button endIcon={<KeyboardArrowDownIcon sx={{marginLeft:'30px'}}/>} sx={{color:'black', backgroundColor:'white',padding:'10px'}}>MEN</Button>
              <Button endIcon={<KeyboardArrowDownIcon sx={{marginLeft:'30px'}}/>} sx={{color:'black', backgroundColor:'white',padding:'10px'}}>ALL TEAMS</Button>
              <Button endIcon={<KeyboardArrowDownIcon sx={{marginLeft:'30px'}}/>} sx={{color:'black', backgroundColor:'white',padding:'10px'}}>ALL VENUES</Button>
              <Button endIcon={<KeyboardArrowDownIcon sx={{marginLeft:'30px'}}/>} sx={{color:'black', backgroundColor:'white',padding:'10px'}}>SEASON 2024</Button>
            </Stack>
            <Stack spacing={2} backgroundColor='#f0f2f8' borderRadius='20px' height='auto' width='1183px' padding='50px' alignItems='center' justifyItems='center'>
            
            {matchData.map((match) => (
              <Card key={match.id} sx={{height:'120px',width:'1180px',padding:'20px'}} >
                <Stack direction='row' spacing={14} justifyContent='space-around'>

                  <Stack spacing={2} alignItems='center' >
                    <Button variant='outlined' size='small' sx={{color:'#DC5034',border:'1px solid #FF783E'}}>Match {match.id}</Button>
                    <Typography variant='h6' width='168px' sx={{fontSize:'14px',fontWeight:'600',textTransform:'uppercase'}}>{match.result}</Typography>
                    <Typography variant='body2' sx={{fontSize:'12px'}}></Typography>
                  </Stack>

                  <Stack alignItems='center' justifyContent='center'>
                    <Typography sx={{fontSize:'14px'}}>{match.location}</Typography> <br/>                   
                    <Stack direction='row' alignItems='center' spacing={5} >
                      <Stack direction='row' alignItems='center' spacing={1} sx={{ maxWidth: '200px', textAlign: 'center' }}>
                        <img src={match.teamAimg} alt='RR' width='45px' height='45px'/>
                        <Typography variant='body1' sx={{fontSize:'13px',fontWeight:'700',wordBreak: 'break-word'}}>{match.teamA}</Typography>
                      </Stack>
                      <Typography variant='h6' sx={{color:'#7b7b7b',fontWeight:'700',fontSize:'20px'}}>VS</Typography>
                      <Stack direction='row' alignItems='center' spacing={1} sx={{ maxWidth: '200px', textAlign: 'center' }}>      
                        <img src={match.teamBimg} alt='RR' width='45px' height='45px'/>
                        <Typography variant='subtitle2' sx={{fontSize:'13px',fontWeight:'700',wordBreak: 'break-word'}}>{match.teamB}</Typography>
                      </Stack>
                    </Stack>
                  </Stack>

                  <Stack direction='row' alignItems='center' margin='0px' spacing={3} justifyContent='center'>
                      <IconButton width='30px' height='50px' ><IoTicketOutline sx={{width :'50px',height:'50px'}} /></IconButton>
                      <RedirectLink to={`/matches/matchcentre/${match.id}`}><Button sx={{backgroundColor:'#DC5034',color:'white'}} >Match Centre</Button></RedirectLink>
                  </Stack>

                </Stack>                    
              </Card>
            ))}
            </Stack>
          </Stack>
        </TabPanel>


        <TabPanel value='3'>
          <Stack padding='70px'  width='auto'>
            <Stack direction='row' spacing={3} marginBottom='30px'>
              <Button endIcon={<KeyboardArrowDownIcon sx={{marginLeft:'30px'}}/>} sx={{color:'black', backgroundColor:'white',padding:'10px'}} >MEN</Button>
              <Button endIcon={<KeyboardArrowDownIcon sx={{marginLeft:'30px'}}/>} sx={{color:'black', backgroundColor:'white',padding:'10px'}}>SEASON 2024</Button>
            </Stack>
            <Stack>
              <TableContainer sx={{width:'1305px' ,height:'auto',borderRadius:'10px'}}>
                <Table sx={{border:'1px solid rgba(0, 0, 0, 0.4)',backgroundColor:'white',borderRadius:'10px'}}>
                    <TableHead >
                      <TableRow sx={{ padding: '30px 10px' }}>
                        <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px', width: '5%' }}>POS</TableCell>
                        <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px', width: '5%' }}></TableCell>
                        <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px', width: '18%' }}>TEAM</TableCell>
                        <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px', width: '5%' }}>P</TableCell>
                        <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px', width: '5%' }}>W</TableCell>
                        <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px', width: '5%' }}>L</TableCell>
                        <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px', width: '5%' }}>NR</TableCell>
                        <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px', width: '10%' }}>NRR</TableCell>
                        <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px', width: '10%' }}>FOR</TableCell>
                        <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px', width: '10%' }}>AGAINST</TableCell>
                        <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px', width: '7%' }}>PTS</TableCell>
                        <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px', width: '15%' }}>RECENT FORM</TableCell>
                      </TableRow>
                    </TableHead>                 
                    <TableBody>
                      {pointsTableData.map(row=>(
                        <TableRow border='collapse' padding='15px 10px'>
                          <TableCell sx={{padding:'26px 10px',textAlign:'center'}}>{row.POS}</TableCell>
                          <TableCell sx={{padding:'15px 10px',textAlign:'center'}}>-</TableCell>
                          <TableCell sx={{padding:'15px 10px',textAlign:'center'}}>
                            <Stack direction='row' alignItems='center' spacing={7}>
                              <img src={row.teamimg} alt='' width='25px' height='24.8px'/>
                              <Typography sx={{fontSize:'15px'}}>{row.teamname}</Typography>
                            </Stack>
                          </TableCell>
                          <TableCell sx={{padding:'15px 10px',textAlign:'center'}}>{row.P}</TableCell>
                          <TableCell sx={{padding:'15px 10px',textAlign:'center'}}>{row.W}</TableCell>
                          <TableCell sx={{padding:'15px 10px',textAlign:'center'}}>{row.L}</TableCell>
                          <TableCell sx={{padding:'15px 10px',textAlign:'center'}}>{row.NR}</TableCell>
                          <TableCell sx={{padding:'15px 10px',textAlign:'center'}}>{row.NRR}</TableCell>
                          <TableCell sx={{padding:'15px 10px',textAlign:'center'}}>{row.FOR}</TableCell>
                          <TableCell sx={{padding:'15px 10px',textAlign:'center'}}>{row.AGAINST}</TableCell>
                          <TableCell sx={{padding:'15px 10px',textAlign:'center',fontWeight:'700'}}>{row.PTS}</TableCell>
                          <TableCell sx={{padding:'15px 10px',textAlign:'center'}}>
                            <Stack direction='row' spacing={1} alignItems='center' justifyContent='center'>
                              <Box sx={{width:'21px', height:'21px',  border:'1px solid black' ,borderRadius:'50%'}}>{row.RecentForm.a}</Box>
                              <Box sx={{width:'21px', height:'21px',border:'1px solid black' ,borderRadius:'50%'}}>{row.RecentForm.b}</Box>
                              <Box sx={{width:'21px', height:'21px',border:'1px solid black' ,borderRadius:'50%'}}>{row.RecentForm.c}</Box>
                              <Box sx={{width:'21px', height:'21px',border:'1px solid black' ,borderRadius:'50%'}}>{row.RecentForm.d}</Box>
                              <Box sx={{width:'21px', height:'21px',border:'1px solid black' ,borderRadius:'50%'}}>{row.RecentForm.e}</Box>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Stack>
        </TabPanel>
        <TabPanel value='4'>
          <Stack alignItems='center' justifyContent='center' direction='row' spacing={12} padding='40px'>
                <Stack spacing={5}>
                  <Stack spacing={1}>
                    <Stack spacing={0.7} direction='row' width='230px' height='50px' sx={{borderRadius:'10px',border:'0.5px solid #dee2e6',backgroundColor:'#502688',alignItems:'center',justifyContent:'center',display:'flex'}}>
                      <img src={KKR} alt='KKR' width='40px' height='40px'/>
                      <Typography sx={{fontSize:'16px',color:'white'}}>Kolkata Knight Riders</Typography>
                    </Stack>
                    <Stack spacing={0.7} direction='row' width='230px' height='50px' sx={{borderRadius:'10px',border:'0.5px solid #dee2e6',alignItems:'center',backgroundColor:'white',justifyContent:'center',display:'flex'}}>
                      <Typography sx={{fontSize:'16px'}}>Qualifier 1,May 21</Typography>
                    </Stack>
                    <Stack spacing={0.7} direction='row' width='230px' height='50px' sx={{borderRadius:'10px',border:'0.5px solid #dee2e6',alignItems:'center',backgroundColor:'#ef2d32',justifyContent:'center',display:'flex'}}>
                      <img src={SRH} alt='SRH' width='40px' height='40px'/>
                      <Typography sx={{fontSize:'16px',color:'white'}}>Sunrisers Hyderabad</Typography>
                    </Stack>
                  </Stack>
                  <Stack spacing={1}>
                    <Stack spacing={0.7} direction='row' width='230px' height='50px' sx={{borderRadius:'10px',border:'0.5px solid #dee2e6',backgroundColor:'#c21b7b',alignItems:'center',justifyContent:'center',display:'flex'}}>
                      <img src={RR} alt='RR' width='40px' height='40px'/>
                      <Typography  sx={{fontSize:'16px',color:'white'}}>Rajasthan Royals</Typography>
                    </Stack>
                    <Stack spacing={0.7} direction='row' width='230px' height='50px' sx={{borderRadius:'10px',border:'0.5px solid #dee2e6',alignItems:'center',backgroundColor:'white',justifyContent:'center',display:'flex'}}>
                      <Typography sx={{fontSize:'16px'}}>Eliminator, May 22</Typography>
                    </Stack>
                    <Stack spacing={0.7} direction='row' width='230px' height='50px' sx={{borderRadius:'10px',border:'0.5px solid #dee2e6',backgroundColor:'#393939',alignItems:'center',justifyContent:'center',display:'flex'}}>
                      <img src={RCB} alt='RCB' width='40px' height='40px'/>
                      <Typography sx={{fontSize:'16px',color:'white'}}>Royal Challengers Bengaluru</Typography>
                    </Stack>
                  </Stack>
                </Stack>

                <Stack>
                <Stack spacing={1}>
                    <Stack spacing={0.7} direction='row' width='230px' height='50px' sx={{borderRadius:'10px',border:'0.5px solid #dee2e6',alignItems:'center',backgroundColor:'#ef2d32',justifyContent:'center',display:'flex'}}>
                      <img src={SRH} alt='SRH' width='40px' height='40px'/>
                      <Typography sx={{fontSize:'16px',color:'white'}}>Sunrisers Hyderabad</Typography>
                    </Stack>
                    <Stack spacing={0.7} direction='row' width='230px' height='50px' sx={{borderRadius:'10px',border:'0.5px solid #dee2e6',alignItems:'center',backgroundColor:'white',justifyContent:'center',display:'flex'}}>
                      <Typography sx={{fontSize:'16px'}}>Qualifier 2, May 24</Typography>
                    </Stack>
                    <Stack spacing={0.7} direction='row' width='230px' height='50px' sx={{borderRadius:'10px',border:'0.5px solid #dee2e6',alignItems:'center',backgroundColor:'#c21b7b',justifyContent:'center',display:'flex'}}>
                      <img src={RR} alt='RR' width='40px' height='40px'/>
                      <Typography sx={{fontSize:'16px',color:'white'}}>Rajasthan Royals</Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack>
                <Stack spacing={1}>
                    <Stack spacing={0.7} direction='row' width='230px' height='50px' sx={{borderRadius:'10px',border:'0.5px solid #dee2e6',alignItems:'center',backgroundColor:'#502688',justifyContent:'center',display:'flex'}}>
                      <img src={KKR} alt='KKR' width='40px' height='40px'/>
                      <Typography sx={{fontSize:'16px',color:'white'}}>Kolkata Knight Riders</Typography>
                    </Stack>
                    <Stack spacing={0.7} direction='row' width='230px' height='50px' sx={{borderRadius:'10px',border:'0.5px solid #dee2e6',alignItems:'center',backgroundColor:'white',justifyContent:'center',display:'flex'}}>
                      <Typography sx={{fontSize:'16px'}}>Final, May 26</Typography>
                    </Stack>
                    <Stack spacing={0.7} direction='row' width='230px' height='50px' sx={{borderRadius:'10px',border:'0.5px solid #dee2e6',alignItems:'center',justifyContent:'center',display:'flex'}}>
                      <Typography sx={{fontSize:'16px',color:'white'}}>Winner Q2</Typography>
                    </Stack>
                  </Stack>
                </Stack>
          </Stack>
        </TabPanel>

      </TabContext>
      <Outlet />
    </>
  )
}


export const matchData = [
  {
    id:'67',
    location :'Wankhede Stadium, Mumbai',
    teamAimg : MI,
    teamA :'Mumbai Indians',
    teamAsmall : 'MI',
    teamBsmall :'LSG',
    teamBimg : LSG,
    teamB :'Lucknow Super Giants',
    result:'Lucknow Super Giants won by 18 runs'
  },{
    id:'68',
    location :'M Chinnaswamy Stadium, Bengaluru',
    teamAimg :RCB,
    teamA :'Royal Challengers Bengaluru',
    teamAsmall : 'RCB',
    teamBsmall :'CSK',
    teamBimg : CSK,
    teamB :'Chennai Super Kings',
    result:'Royal Challengers Bengaluru won by 27 runs'
  },{
    id:'69',
    location :'Rajiv Gandhi International Stadium, Hyderabad',
    teamAimg :SRH,
    teamA :'Sunrisers Hyderabad',
    teamAsmall : 'SRH',
    teamBsmall :'PBKS',
    teamBimg :PBKS,
    teamB :'Punjab Kings',
    result:'Sunrisers Hyderabad won by 4 wickets'
  },{
    id:'70',
    location :'Barsapara Cricket Stadium, Guwahati',
    teamAimg : RR,
    teamA :'Rajasthan Royals',
    teamAsmall : 'RR',
    teamBsmall :'KKR',
    teamBimg :KKR,
    teamB :'Kolkata Knight Riders',
    result:'Match Abandoned'
  },{
    id:'71',
    location :'Narendra Modi Stadium, Ahmedabad',
    teamAimg : GT,
    teamA :'Gujarat Titans',
    teamAsmall : 'GT',
    teamBsmall :'RR',
    teamBimg :RR,
    teamB :'Rajasthan Royals',
    result:'Gujarat Titans won by 35 runs'
  },{
    id:'72',
    location :'Narendra Modi Stadium, Ahmedabad',
    teamAimg : KKR,
    teamA :'Kolkata Knight Riders',
    teamAsmall : 'KKR',
    teamBsmall :'DC',
    teamBimg : DC,
    teamB :'Delhi Capitals',
    result:'Delhi Capitals won by 20 runs'
  },{
    id:'73',
    location :'MA Chidambaram Stadium, Chennai',
    teamAimg : PBKS,
    teamA :'Punjab Kings',
    teamAsmall : 'PBKS',
    teamBsmall :'LSG',
    teamBimg :LSG,
    teamB :'Lucknow Super Giants',
    result:'Punjab Kings won by 7 wickets'
  },{
    id:'74',
    location :'MA Chidambaram Stadium, Chennai',
    teamAimg :RCB,
    teamA :'Royal Challengers Bengaluru',
    teamAsmall : 'RCB',
    teamBsmall :'SRH',
    teamBimg : SRH,
    teamB :'Sunrisers Hyderabad',
    result:'Sunrisers Hyderabad won by 1 rUN'
  }
]
export default Matches

