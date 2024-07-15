import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Breadcrumbs, Button, Link, Stack, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KKR from '../images/KKR.png'
import DC from '../images/DC.png'
import SRH from '../images/SRH.png'
import RCB from '../images/RCB.png'
import CSK from '../images/CSK.png'
import RR from '../images/RR.png'
import GT from '../images/GT.png'
import MI from '../images/MI.png'
import PBKS from '../images/PBKS.png'
import LSG from '../images/LSG.png'

import playoffsbg from '../images/playoffsbg.png'
import React, { useState } from 'react'

function PointsTable() {

  const savedTab = localStorage.getItem('activeTab') || '1'
  const [tab, setTab] = useState(savedTab)

  const handleTabChange =(event,newTab)=>{
    setTab(newTab)
    localStorage.setItem('activeTab',newTab)
  }

  return (
    <>
      <Box backgroundColor='#061e59'>
        <Breadcrumbs separator='/' sx={{fontSize:'13px',color:'white',padding:'5px',marginLeft:'70px'}} >
          <Link underline='hover' href='/' style={{underline:'hover',textDecoration:'none',color:'white'}}>Home</Link>
          <Link underline='hover' href='/matches' style={{underline:'hover',textDecoration:'none',color:'white'}}>Points Table</Link>
        </Breadcrumbs>
      </Box>    
      <Box backgroundColor='#081033' width='auto' height='auto' padding='30px'>
        <Typography  sx={{fontSize:'33px', fontWeight:'700',color:'white',marginLeft:'42px'}}>POINTS TABLE</Typography>
      </Box>
      
        <Stack alignItems='center' marginTop='15px' >
          <TabContext value={tab}>
            <Box sx={{backgroundColor:'white',width:'auto',height:'auto',marginTop:'15px'}}>
              <TabList onChange={handleTabChange} indicatorColor="secondary" sx={{alignItems:'center',justifyContent:'center',color:'black',fontSize:'12px'}}>
                <Tab label='Points Table' value='1'/>
                <Tab label='Playoffs' value='2'/>
              </TabList>
            </Box>
            <TabPanel value='1'  >
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

            <TabPanel value='2'  sx={{width:'auto',paddingLeft:'0px',paddingRight:'0px'}}>
              <Stack alignItems='center' justifyContent='center' direction='row' spacing={12} padding='15px'>
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
                    <Stack spacing={0.7} direction='row' width='230px' height='50px' sx={{borderRadius:'10px',border:'0.5px solid #dee2e6',alignItems:'center',backgroundColor:'#ef2d32',justifyContent:'center',display:'flex'}}>
                      <img src={SRH} alt='SRH' width='40px' height='40px'/>
                      <Typography sx={{fontSize:'16px',color:'white'}}>Sunrisers Hyderabad</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </TabPanel>
          </TabContext>
        </Stack>



        
      
    </>
  )
}

export const pointsTableData =[
  {
    POS :'1',
    teamimg :KKR,
    teamname:'KKR',
    P:'14',
    W:'9',
    L:'3',
    NR:'2',
    NRR:'1.428',
    FOR:'2389/225.0',
    AGAINST:'2135/232.2',
    PTS:'20',
    RecentForm:{a:'N',b:'N',c:'W',d:'W',e:'W'}
  },{
    POS :'2',
    teamimg :SRH,
    teamname:'SRH',
    P:'14',
    W:'8',
    L:'5',
    NR:'1',
    NRR:'0.414',
    FOR:'2605/247.0',
    AGAINST:'2599/256.3',
    PTS:'17',
    RecentForm:{a:'W',b:'N',c:'W',d:'L',e:'W'}
  },{
    POS :'3',
    teamimg :RR,
    teamname:'RR',
    P:'14',
    W:'8',
    L:'5',
    NR:'1',
    NRR:'0.273',
    FOR:'2334/252.1',
    AGAINST:'2310/257.1',
    PTS:'17',
    RecentForm:{a:'N',b:'L',c:'L',d:'L',e:'L'}
  },{
    POS :'4',
    teamimg :RCB,
    teamname:'RCB',
    P:'14',
    W:'7',
    L:'7',
    NR:'0',
    NRR:'0.459',
    FOR:'2758/269',
    AGAINST:'2646/270.1',
    PTS:'14',
    RecentForm:{a:'W',b:'W',c:'W',d:'W',e:'W'}
  },{
    POS :'5',
    teamimg :CSK,
    teamname:'CSK',
    P:'14',
    W:'7',
    L:'7',
    NR:'0',
    NRR:'0.392',
    FOR:'2524/274.4',
    AGAINST:'2415/274.3',
    PTS:'14',
    RecentForm:{a:'L',b:'W',c:'L',d:'W',e:'L'}
  },{
    POS :'6',
    teamimg :DC,
    teamname:'DC',
    P:'14',
    W:'7',
    L:'7',
    NR:'0',
    NRR:'-0.377',
    FOR:'2573/267.4',
    AGAINST:'2762/275.5',
    PTS:'14',
    RecentForm:{a:'W',b:'L',c:'W',d:'L',e:'W'}
  },{
    POS :'7',
    teamimg :LSG,
    teamname:'LSG',
    P:'14',
    W:'7',
    L:'7',
    NR:'0',
    NRR:'-0.667',
    FOR:'2483/277.5',
    AGAINST:'2521/262.3',
    PTS:'14',
    RecentForm:{a:'W',b:'L',c:'L',d:'L',e:'W'}
  },{
    POS :'8',
    teamimg :GT,
    teamname:'GT',
    P:'14',
    W:'5',
    L:'7',
    NR:'2',
    NRR:'-1.063',
    FOR:'2040/238.2',
    AGAINST:'2101/218.2',
    PTS:'12',
    RecentForm:{a:'N',b:'N',c:'W',d:'L',e:'L'}
  },{
    POS :'9',
    teamimg :PBKS,
    teamname:'PBKS',
    P:'14',
    W:'5',
    L:'9',
    NR:'0',
    NRR:'-0.353',
    FOR:'2487/274.3',
    AGAINST:'2612/277.3',
    PTS:'10',
    RecentForm:{a:'L',b:'W',c:'L',d:'L',e:'W'}
  },{
    POS :'10',
    teamimg :MI,
    teamname:'MI',
    P:'14',
    W:'4',
    L:'10',
    NR:'0',
    NRR:'-0.318',
    FOR:'2558/268.5',
    AGAINST:'2660/269.3',
    PTS:'8',
    RecentForm:{a:'L',b:'L',c:'W',d:'L',e:'L'}
  }
]

export default PointsTable
