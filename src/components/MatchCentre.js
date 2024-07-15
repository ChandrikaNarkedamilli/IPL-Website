import {  Box, Divider, ImageList, ImageListItem, Stack, Tab, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from '@mui/material'
import React, { useState } from 'react'
import {matchData} from './Matches'
import {playerData} from './PlayersList'
import { useParams } from 'react-router-dom'
import versus from '.././images/versus.png'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import bgimge from '../images/bgimge.png'
import holdtightimg from '../images/holdtightimg.png'
import batter1 from '../images/cskplayers/batter1.png'
import CSK from '../images/CSK.png'
import RCB from '../images/RCB.png'
import {useTeamData} from './PlayersList'



const MatchCentre = () => {
  const teamDATA = useTeamData();

  const savedSubTab= localStorage.getItem('activeTab' || '1')
  const savedTeamTab= localStorage.getItem('activeTab' || '1')
  const [val, setVal] = useState(savedSubTab)
  const [teamTab, setTeamTab] =useState(savedTeamTab)
  const {matchId} = useParams();
  const match = matchData.find((m)=> m.id === matchId)

  const handleSubTabChange =(event,newVal)=>{
    setVal(newVal)
    localStorage.setItem('activeTab',newVal)
  }

  const handleTeamTabChange =(event,newTeamTab)=>{
    setTeamTab(newTeamTab)
    localStorage.setItem('activeTab',newTeamTab)
  }
  return (
    <>
      {match ? (
        <>
          <Stack sx={{backgroundColor:'#061e59', width:'auto',height:'259px',padding:'30px'}} alignItems='center'>           
            <Stack alignItems='center' spacing={0.5}>
              <Box sx={{clipPath:'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',backgroundColor:'rgba(236, 0, 140, 1)',fontSize:'16px',fontWeight:'500',color:'white',width:'fit-content',padding:'4px 15px'}} alignItems='center'>Match {matchId}</Box>
              <Stack direction='row' alignItems='center' spacing={7}>
                <img src={match.teamAimg} alt='team-a' width='90px' height='90px'/>
                <Typography sx={{fonstSize:'20px', fontWeight:'700',color:'white'}}>{match.teamAsmall}</Typography>
                <img src={versus} alt='vs' width='30px' height='30px'/>
                <Typography sx={{fonstSize:'20px', fontWeight:'700',color:'white'}}>{match.teamBsmall}</Typography>
                <img src={match.teamBimg} alt='team-b' width='90px' height='90px'/>
              </Stack>

              <Stack direction='row' spacing={0.5} alignItems='center'>
                <Stack sx={{backgroundColor:'white',color:'white',width:'32px',height:'39px',borderRadius:'4px',padding:'5px'}} >
                  <Typography variant='h6' sx={{color:'black',fontWeight:'700'}}>16</Typography>
                  <Typography variant='body2' sx={{color:'black'}}>hrs</Typography>
                </Stack>
                <Stack sx={{backgroundColor:'white',color:'white',width:'32px',height:'39px',borderRadius:'4px',padding:'5px'}}>
                  <Typography variant='h6' sx={{color:'black',fontWeight:'700'}}>44</Typography>
                  <Typography variant='body2' sx={{color:'black'}}>mins</Typography>
                </Stack>
                <Stack sx={{backgroundColor:'white',color:'white',width:'32px',height:'39px',borderRadius:'4px',padding:'5px'}}>
                  <Typography variant='h6' sx={{color:'black',fontWeight:'700'}}>20</Typography>
                  <Typography variant='body2' sx={{color:'black'}}>secs</Typography>
                </Stack>
              </Stack>

              <Stack direction='row' spacing={1} sx={{paddingTop:'20px'}}>
                <Typography sx={{fontSize:'13px',color:'#D6DDFF'}}>{match.location}</Typography>
                <Typography sx={{fontSize:'13px',color:'#D6DDFF'}}>- 18 May 2024</Typography>
                <Typography sx={{fontSize:'13px',color:'#D6DDFF'}}>-  7:30 PM IST</Typography>
              </Stack>

            </Stack>
          </Stack>
          <Stack marginTop='-600px' >
            <img src={bgimge} alt='bg' />
          </Stack>

          <TabContext value={val}>

            <Stack alignItems='center' marginTop='-25px'>
              <Box sx={{backgroundColor:'white',width:'auto',height:'auto'}}>
                <TabList indicatorColor="secondary" sx={{alignItems:'center',justifyContent:'center',color:'black',fontSize:'12px'}}
                  onChange={handleSubTabChange}
                >
                  <Tab label='Match Info' value='1' />
                  <Tab label='Squad' value='2' />
                  <Tab label='Expert analysis' value='3' />
                </TabList>
              </Box>
            </Stack>
            <TabPanel value='1'>
              <Typography variant='h6' sx={{fontWeight:'700',marginLeft:'460px'}}>Match Info</Typography><br />
              <Stack alignItems='center'>
                <TableContainer sx={{width:'570px' ,height:'auto'}}>
                  <Table sx={{borderCollapse: 'collapse',backgroundColor:'white'}}>
                    <TableBody>
                      <TableRow>
                        <TableCell sx={{fontSize:'14px',fontWeight:'700',fontStyle:'italic', border: '1px solid black'}}>Venue</TableCell>
                        <TableCell sx={{ border: '1px solid black'}}>{match.location}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{fontSize:'14px',fontWeight:'700',fontStyle:'italic', border: '1px solid black'}}>On Field Umpires</TableCell>
                        <TableCell sx={{ border: '1px solid black'}}>
                          <Stack direction='row' spacing={5}>
                            <Typography sx={{fontSize:'14px'}}>Nithin Menon</Typography>
                            <Divider  orientation='vertical' sx={{backgroundColor:'black', height:'auto'}}/>
                            <Typography sx={{fontSize:'14px'}}>Virender Kumar Sharma</Typography>
                          </Stack>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{fontSize:'14px',fontWeight:'700',fontStyle:'italic', border: '1px solid black'}}>Third Umpire</TableCell>
                        <TableCell sx={{ border: '1px solid black'}}>Khalid Saiyed</TableCell>
                      </TableRow>
                    </TableBody>         
                  </Table> 
                </TableContainer>
              </Stack>
              
            </TabPanel>

            <TabPanel value='2'>
            <Stack alignItems='center' spacing={6} margin='20px' >
              {teamDATA && Object.entries(teamDATA.DATA).map(([role, players]) => (
                <React.Fragment key={role}>
                  <Stack width='1280px' height='auto' alignItems='center' spacing={4}>
                    <Typography variant='h5' sx={{color:'black', fontWeight:'700',alignSelf:'flex-start'}}>{role.charAt(0).toUpperCase()+ role.slice(1)}</Typography>
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
                  
              {/* <Typography variant='h5'>match page</Typography> */}
            </TabPanel>







            <TabPanel value='3'>
              <Stack padding='0px 70px' spacing={4} alignItems='center'>
                <TabContext value={teamTab}>
                  <Box sx={{backgroundColor:'white',width:'auto',height:'auto'}}>
                    <TabList onChange={handleTeamTabChange} indicatorColor="secondary" sx={{alignItems:'center',justifyContent:'center',color:'black',fontSize:'12px'}}>
                      <Tab label='CSK' value='1'/>
                      <Tab label='RCB' value='2' />
                    </TabList>
                  </Box>
                  <TabPanel value='1'>
                    <Stack spacing={3} direction='row' >
                    <Stack width='535px' height='auto'>
                      <Typography sx={{fontSize:'18px',fontWeight:'700',color:'black'}}>Player Status</Typography>
                      <Typography sx={{color:"rgba(0, 0, 0, 0.4)", fontSize:'13px',marginTop:'2px',marginBottom:'10px'}}>Stats from this league</Typography>
                      <TableContainer sx={{width:'535px' ,height:'auto',borderRadius:'10px'}} >
                        <Table sx={{border:'1px solid rgba(0, 0, 0, 0.4)',backgroundColor:'white',borderRadius:'10px'}} >
                          <TableBody >
                            {tableRows.map((row)=>(
                              <TableRow key={row.name} >
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)',width:'223px'}}>
                                <Stack direction='row' spacing={1} padding='3px' width='fit-content'>
                                  <img src={batter1} alt='batter' height='38px' width='38px' />
                                  <Stack>
                                    <Typography  sx={{fontSize:'14px',fontWeight:'700'}} >{row.name}</Typography>
                                    <Typography variant='body2' sx={{fontSize:'12px',color:'rgba(17, 20, 28, 0.6);'}}>{row.role}</Typography>
                                  </Stack>
                                </Stack>
                              </TableCell>
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack alignItems='center' padding='3px'>
                                  <Typography  sx={{fontSize:'14px',fontWeight:'700'}}>{row.matches}</Typography>
                                  <Typography variant='body2' sx={{fontSize:'12px',color:'rgba(17, 20, 28, 0.6);'}}>Matches Played</Typography>
                                </Stack>  
                              </TableCell>
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack alignItems='center' padding='3px'>
                                  <Typography  sx={{fontSize:'14px',fontWeight:'700'}}>{row.runs}</Typography>
                                  <Typography variant='body2' sx={{fontSize:'12px',color:'rgba(17, 20, 28, 0.6);'}}>Runs</Typography>
                                </Stack>
                              </TableCell>
                            </TableRow>
                            ))}
                            
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Stack>

                    <Stack width='755px' height='auto'>
                      <Typography sx={{fontSize:'18px',fontWeight:'700',color:'black',marginBottom:'17px',marginTop:'15px'}}>Weather & Pitch Report</Typography>
                      {/* <Typography sx={{color:"rgba(0, 0, 0, 0.4)", fontSize:'13px',marginTop:'2px',marginBottom:'10px'}}></Typography> */}
                      <TableContainer sx={{width:'755px' ,height:'auto',borderRadius:'10px'}} >
                        <Table sx={{border:'1px solid rgba(0, 0, 0, 0.4)',backgroundColor:'white',borderRadius:'10px'}} >
                          <TableBody>
                            <TableRow>
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack alignItems='center' padding='24px'>
                                  <Typography  sx={{fontSize:'14px',fontWeight:'700'}}>36°C</Typography>
                                  <Typography variant='body2' sx={{fontSize:'12px',color:'rgba(17, 20, 28, 0.6);'}}>Temp.</Typography>
                                </Stack>
                              </TableCell>
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack alignItems='center' padding='24px'>
                                  <Typography  sx={{fontSize:'14px',fontWeight:'700'}}>20%</Typography>
                                  <Typography variant='body2' sx={{fontSize:'12px',color:'rgba(17, 20, 28, 0.6);'}}>Humidity</Typography>
                                </Stack>
                              </TableCell>
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack alignItems='center' padding='24px'>
                                  <Typography  sx={{fontSize:'14px',fontWeight:'700'}}>11 km/h</Typography>
                                  <Typography variant='body2' sx={{fontSize:'12px',color:'rgba(17, 20, 28, 0.6);'}}>Wind Gusts</Typography>
                                </Stack>
                              </TableCell>
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack alignItems='center' padding='24px'>
                                  <Typography  sx={{fontSize:'14px',fontWeight:'700'}}>Clouds</Typography>
                                  <Typography variant='body2' sx={{fontSize:'12px',color:'rgba(17, 20, 28, 0.6);'}}>Weather Forecast</Typography>
                                </Stack>
                              </TableCell>
                            </TableRow>
                            <TableRow width='753' height='auto'>
                              <TableCell sx={{overflowX:'hidden'}}>
                              
                                <img src={holdtightimg} alt='hold tight!' width='473px' height='149px'/>
                              
                              </TableCell>
                              
                            </TableRow>
                            <TableRow>
                              <TableCell >
                                <Typography  sx={{fontSize:'14px',textAlign:'center'}}>Narendra Modi Stadium, Ahmedabad</Typography>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Stack>

                  </Stack>
                  
                  <Stack spacing={3} direction='row'>                 
                    <Stack>
                    <Typography sx={{fontSize:'18px',fontWeight:'700',color:'black'}}>Recent Form</Typography>
                    <Typography sx={{color:"rgba(0, 0, 0, 0.4)", fontSize:'13px',marginTop:'2px',marginBottom:'10px'}}>Matches Played Recently</Typography>
                      <TableContainer sx={{width:'535px' ,height:'auto',borderRadius:'10px'}} >
                          <Table sx={{border:'1px solid rgba(0, 0, 0, 0.4)',backgroundColor:'white',borderRadius:'10px'}} >
                            <TableBody>
                              <TableRow>
                                <TableCell  sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                  <Stack alignItems='center'>
                                    <img src={CSK} alt='teamA' width='38px' height='38px'/>
                                    <Typography sx={{fontSize:'12px'}}>CSK</Typography>
                                  </Stack>
                                </TableCell>
                                <TableCell>
                                  <Stack direction='row' spacing={2}>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>N</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>L</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>L</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>L</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>L</Box>
                                  </Stack>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell  sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                  <Stack alignItems='center'>
                                    <img src={CSK} alt='teamA' width='38px' height='38px'/>
                                    <Typography sx={{fontSize:'12px'}}>RCB</Typography>
                                  </Stack>
                                </TableCell>
                                <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}} >
                                  <Stack direction='row' spacing={2}>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>W</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>W</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>W</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>W</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>W</Box>
                                  </Stack>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                    </Stack>

                    <Stack>
                      <Typography sx={{fontSize:'18px',fontWeight:'700',color:'black'}}>Head To Head</Typography>
                      <Typography sx={{color:"rgba(0, 0, 0, 0.4)", fontSize:'13px',marginTop:'2px',marginBottom:'10px'}}>Since 2008</Typography>
                      <TableContainer sx={{width:'755px' ,height:'auto',borderRadius:'10px'}} >
                        <Table sx={{border:'1px solid rgba(0, 0, 0, 0.4)',backgroundColor:'white',borderRadius:'10px'}} >
                          <TableBody>
                            <TableRow>
                              <TableCell border='collapse'>

                              </TableCell>
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack>
                                  <img src={CSK} alt='teamA' width='38px' height='38px'/>
                                  <Typography sx={{fontSize:'12px'}}>CSK</Typography>
                                </Stack>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <Stack>
                                  <Typography sx={{fontSize:'24px'}}>31</Typography>
                                  <Typography>Matches</Typography>
                                  <Typography>Played</Typography>
                                </Stack>
                              </TableCell>
                              <TableCell  sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack>
                                  <img src={RCB} alt='teamA' width='38px' height='38px'/>
                                  <Typography sx={{fontSize:'12px'}}>RCB</Typography>
                                </Stack>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>

                              </TableCell>
                              <TableCell  sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack>
                                  
                                  <Typography sx={{fontSize:'12px'}}>No Result</Typography>
                                </Stack>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Stack>
                  </Stack>
                  </TabPanel>

                  <TabPanel value='2'>
                    <Stack spacing={3} direction='row' >
                    <Stack width='535px' height='auto'>
                      <Typography sx={{fontSize:'18px',fontWeight:'700',color:'black'}}>Player Status</Typography>
                      <Typography sx={{color:"rgba(0, 0, 0, 0.4)", fontSize:'13px',marginTop:'2px',marginBottom:'10px'}}>Stats from this league</Typography>
                      <TableContainer sx={{width:'535px' ,height:'auto',borderRadius:'10px'}} >
                        <Table sx={{border:'1px solid rgba(0, 0, 0, 0.4)',backgroundColor:'white',borderRadius:'10px'}} >
                          <TableBody >
                            {tableRows.map((row)=>(
                              <TableRow key={row.name} >
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)',width:'223px'}}>
                                <Stack direction='row' spacing={1} padding='3px' width='fit-content'>
                                  <img src={batter1} alt='batter' height='38px' width='38px' />
                                  <Stack>
                                    <Typography  sx={{fontSize:'14px',fontWeight:'700'}} >{row.name}</Typography>
                                    <Typography variant='body2' sx={{fontSize:'12px',color:'rgba(17, 20, 28, 0.6);'}}>{row.role}</Typography>
                                  </Stack>
                                </Stack>
                              </TableCell>
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack alignItems='center' padding='3px'>
                                  <Typography  sx={{fontSize:'14px',fontWeight:'700'}}>{row.matches}</Typography>
                                  <Typography variant='body2' sx={{fontSize:'12px',color:'rgba(17, 20, 28, 0.6);'}}>Matches Played</Typography>
                                </Stack>  
                              </TableCell>
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack alignItems='center' padding='3px'>
                                  <Typography  sx={{fontSize:'14px',fontWeight:'700'}}>{row.runs}</Typography>
                                  <Typography variant='body2' sx={{fontSize:'12px',color:'rgba(17, 20, 28, 0.6);'}}>Runs</Typography>
                                </Stack>
                              </TableCell>
                            </TableRow>
                            ))}
                            
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Stack>

                    <Stack width='755px' height='auto'>
                      <Typography sx={{fontSize:'18px',fontWeight:'700',color:'black',marginBottom:'17px',marginTop:'15px'}}>Weather & Pitch Report</Typography>
                      {/* <Typography sx={{color:"rgba(0, 0, 0, 0.4)", fontSize:'13px',marginTop:'2px',marginBottom:'10px'}}></Typography> */}
                      <TableContainer sx={{width:'755px' ,height:'auto',borderRadius:'10px'}} >
                        <Table sx={{border:'1px solid rgba(0, 0, 0, 0.4)',backgroundColor:'white',borderRadius:'10px'}} >
                          <TableBody>
                            <TableRow>
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack alignItems='center' padding='24px'>
                                  <Typography  sx={{fontSize:'14px',fontWeight:'700'}}>36°C</Typography>
                                  <Typography variant='body2' sx={{fontSize:'12px',color:'rgba(17, 20, 28, 0.6);'}}>Temp.</Typography>
                                </Stack>
                              </TableCell>
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack alignItems='center' padding='24px'>
                                  <Typography  sx={{fontSize:'14px',fontWeight:'700'}}>20%</Typography>
                                  <Typography variant='body2' sx={{fontSize:'12px',color:'rgba(17, 20, 28, 0.6);'}}>Humidity</Typography>
                                </Stack>
                              </TableCell>
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack alignItems='center' padding='24px'>
                                  <Typography  sx={{fontSize:'14px',fontWeight:'700'}}>11 km/h</Typography>
                                  <Typography variant='body2' sx={{fontSize:'12px',color:'rgba(17, 20, 28, 0.6);'}}>Wind Gusts</Typography>
                                </Stack>
                              </TableCell>
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack alignItems='center' padding='24px'>
                                  <Typography  sx={{fontSize:'14px',fontWeight:'700'}}>Clouds</Typography>
                                  <Typography variant='body2' sx={{fontSize:'12px',color:'rgba(17, 20, 28, 0.6);'}}>Weather Forecast</Typography>
                                </Stack>
                              </TableCell>
                            </TableRow>
                            <TableRow width='753' height='auto'>
                              <TableCell sx={{overflowX:'hidden'}}>
                              
                                <img src={holdtightimg} alt='hold tight!' width='473px' height='149px'/>
                              
                              </TableCell>
                              
                            </TableRow>
                            <TableRow>
                              <TableCell >
                                <Typography  sx={{fontSize:'14px',textAlign:'center'}}>Narendra Modi Stadium, Ahmedabad</Typography>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Stack>

                  </Stack>
                  
                  <Stack spacing={3} direction='row'>                 
                    <Stack>
                    <Typography sx={{fontSize:'18px',fontWeight:'700',color:'black'}}>Recent Form</Typography>
                    <Typography sx={{color:"rgba(0, 0, 0, 0.4)", fontSize:'13px',marginTop:'2px',marginBottom:'10px'}}>Matches Played Recently</Typography>
                      <TableContainer sx={{width:'535px' ,height:'auto',borderRadius:'10px'}} >
                          <Table sx={{border:'1px solid rgba(0, 0, 0, 0.4)',backgroundColor:'white',borderRadius:'10px'}} >
                            <TableBody>
                              <TableRow>
                                <TableCell  sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                  <Stack alignItems='center'>
                                    <img src={CSK} alt='teamA' width='38px' height='38px'/>
                                    <Typography sx={{fontSize:'12px'}}>CSK</Typography>
                                  </Stack>
                                </TableCell>
                                <TableCell>
                                  <Stack direction='row' spacing={2}>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>N</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>L</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>L</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>L</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>L</Box>
                                  </Stack>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell  sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                  <Stack alignItems='center'>
                                    <img src={CSK} alt='teamA' width='38px' height='38px'/>
                                    <Typography sx={{fontSize:'12px'}}>RCB</Typography>
                                  </Stack>
                                </TableCell>
                                <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}} >
                                  <Stack direction='row' spacing={2}>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>W</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>W</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>W</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>W</Box>
                                    <Box sx={{width:'24px', height:'24px',border:'1px solid black',borderRadius:'50%'}}>W</Box>
                                  </Stack>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                    </Stack>

                    <Stack>
                      <Typography sx={{fontSize:'18px',fontWeight:'700',color:'black'}}>Head To Head</Typography>
                      <Typography sx={{color:"rgba(0, 0, 0, 0.4)", fontSize:'13px',marginTop:'2px',marginBottom:'10px'}}>Since 2008</Typography>
                      <TableContainer sx={{width:'755px' ,height:'auto',borderRadius:'10px'}} >
                        <Table sx={{border:'1px solid rgba(0, 0, 0, 0.4)',backgroundColor:'white',borderRadius:'10px'}} >
                          <TableBody>
                            <TableRow>
                              <TableCell border='collapse'>

                              </TableCell>
                              <TableCell sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack>
                                  <img src={CSK} alt='teamA' width='38px' height='38px'/>
                                  <Typography sx={{fontSize:'12px'}}>CSK</Typography>
                                </Stack>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <Stack>
                                  <Typography sx={{fontSize:'24px'}}>31</Typography>
                                  <Typography>Matches</Typography>
                                  <Typography>Played</Typography>
                                </Stack>
                              </TableCell>
                              <TableCell  sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack>
                                  <img src={RCB} alt='teamA' width='38px' height='38px'/>
                                  <Typography sx={{fontSize:'12px'}}>RCB</Typography>
                                </Stack>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>

                              </TableCell>
                              <TableCell  sx={{border:'1px solid rgba(0, 0, 0, 0.4)'}}>
                                <Stack>
                                  
                                  <Typography sx={{fontSize:'12px'}}>No Result</Typography>
                                </Stack>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Stack>
                  </Stack>
                  </TabPanel>

                </TabContext>

              </Stack>  
            </TabPanel>

          </TabContext>
        </>
      ) : (
        <Typography variant='h6'>No match data available</Typography>
      )}
    </>
  )
}

const tableRows =[
  {
    name:'Ruthuraj',
    matches :'13',
    runs:'583',
    role:'batter'
  },{
    name:'Jadeja',
    matches :'13',
    runs:'461',
    role:'allrounder'
  },{
    name:'Dhoni',
    matches :'13',
    runs:'161',
    role:'batter'
  },{
    name:'Deepak Chahar',
    matches :'13',
    runs:'461',
    role:'bowler'
  },{
    name:'Richard',
    matches :'13',
    runs:'461',
    role:'bowler'
  }
]




export default MatchCentre
