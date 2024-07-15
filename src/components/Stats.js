import { Box, Button, Card, Stack, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import statsbg from '../images/statsbg.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import batter3 from '../images/rcbplayers/batter3.png'
import RCB from '../images/RCB.png'
// import { pointsTableData } from './PointsTable';
import vk from '../images/rcbplayers/batter3.png'
import gaikwad from '../images/cskplayers/batter1.png'
import parag from '../images/rrplayers/batter6.png'
import head from '../images/srhplayers/batter9.png'
import sudharsan from '../images/GTplayers/allrounder2.png'
import samson from '../images/rrplayers/batter1.png'
import klrahul from '../images/lsgplayers/batter1.png'
import pooran from '../images/lsgplayers/batter4.png'
import sunil from '../images/kkrplayers/bowler5.png'
import fairplaycard from '../images/fairplaycard.png'
import gayle from '../images/recordstabimages/gayle.png'
import bhuvi from '../images/recordstabimages/bhuvi.png'
import alzarri from '../images/recordstabimages/alzarri.png'
import blankimg from '../images/recordstabimages/blankimg.png'
import chahal from '../images/recordstabimages/chahal.png'
import pathirana from '../images/recordstabimages/pathirana.png'
import salt from '../images/recordstabimages/salt.png'
import dhawan from '../images/recordstabimages/dhawan.png'
import mvpcard from '../images/mvpcard.png'


import { TabContext, TabList, TabPanel } from '@mui/lab'
import { HeadsetMic } from '@mui/icons-material';

function Stats() {
  const savedStatsTab= localStorage.getItem('activeTab')|| '1'
  const [statsTab, setStatsTab] = useState(savedStatsTab)
  

  const handleStatsTab =(event,newStatsTab)=>{
    setStatsTab(newStatsTab)
    localStorage.setItem('activeTab',newStatsTab)
  }

  
  return (
    <>
      <Stack width='auto' height='400px' sx={{background: 'black'}}>
        <img src={statsbg} alt='stats bg' width='auto' height='350px' />
      </Stack>
      <Stack alignItems='center' marginTop='-400px'>
        <Stack direction='row' spacing={8} alignItems='center'>
          <Stack width='350px' height='350px' direction='row' spacing={-19} alignItems='center'>
            <Typography sx={{fontSize:'400px',fontWeight:'700px',color:'white',width:'197px', height:'526px'}} >1</Typography>
            <img src={batter3} alt='ViratKohli' width='350px' height='350px' />
          </Stack>
          <Stack width='612px' height='162px' spacing={2}> 
            <Stack direction='row' spacing={4} alignItems='center'>
              <Typography variant='h4' sx={{color:'white',fontWeight:'700'}}>VIRAT KOHLI</Typography>
              <img src={RCB} alt='RCB' width='55px' height='55px'/>
            </Stack>
            <TableContainer>
              <Table>
                <TableRow>
                  <TableCell sx={{border:'1px solid white',color:'white'}}><Typography variant='h6'>741</Typography>Runs</TableCell>
                  <TableCell sx={{border:'1px solid white',color:'white'}}><Typography variant='h6'>15</Typography>Matches</TableCell>
                  <TableCell sx={{border:'1px solid white',color:'white'}}><Typography variant='h6'>61.75</Typography>Average</TableCell>
                  <TableCell sx={{border:'1px solid white',color:'white'}}><Typography variant='h6'>154.69</Typography>Strike Rate</TableCell>
                  <TableCell sx={{border:'1px solid white',color:'white'}}><Typography variant='h6'>113*</Typography>Hs. Score</TableCell>
                  <TableCell sx={{border:'1px solid white',color:'white'}}><Typography variant='h6'>5/1</Typography>50s/100s</TableCell>
                </TableRow>
              </Table>
            </TableContainer>
          </Stack>
        </Stack>
      </Stack>

      <Stack padding='40px' height='auto' sx={{backgroundColor:'#a7b8e2'}} >
        <Stack>
          <TabContext value={statsTab}>
            <Box sx={{backgroundColor:'white',width:'fit-content',alignSelf:'center'}}>
              <TabList onChange={handleStatsTab}>
                <Tab label='Season' value='1'/>
                <Tab label='Awards' value='2'/>
                <Tab label='Records' value='3'/>
              </TabList>
            </Box>  

            <TabPanel value='1'>   
              <Stack padding='50px'  width='auto'>
                <Stack direction='row' spacing={3} marginBottom='30px' >
                  <Button endIcon={<KeyboardArrowDownIcon sx={{marginLeft:'30px'}}/>} sx={{color:'black', backgroundColor:'white',padding:'10px'}}>SEASON 2024</Button>
                  <Button endIcon={<KeyboardArrowDownIcon sx={{marginLeft:'30px'}}/>} sx={{color:'black', backgroundColor:'white',padding:'10px'}}>ORANGE CAP</Button>
                  <Button endIcon={<KeyboardArrowDownIcon sx={{marginLeft:'30px'}}/>} sx={{color:'black', backgroundColor:'white',padding:'10px'}}>ALL TEAMS</Button>
                  <Button endIcon={<KeyboardArrowDownIcon sx={{marginLeft:'30px'}}/>} sx={{color:'black', backgroundColor:'white',padding:'10px'}}>ALL PLAYERS</Button>
                  
                </Stack>

                <Stack>
                  <TableContainer sx={{width:'1305px' ,height:'auto',borderRadius:'10px'}}>
                    <Table sx={{border:'1px solid rgba(0, 0, 0, 0.4)',backgroundColor:'white',borderRadius:'10px'}}>
                        <TableHead >
                          <TableRow sx={{ padding: '30px 10px',backgroundColor:'black',color:'white'}}>
                            <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px',color:'white',width:'2%'}}>POS</TableCell>
                            <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px',color:'white', width: '5%'}}>PLAYER</TableCell>
                            <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px',color:'white', width: '5%'}}>MAT</TableCell>
                            <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px',color:'white', width: '5%'}}>INNS</TableCell>
                            <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px',color:'white', width: '5%'}}>NO</TableCell>
                            <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px',color:'white', width: '5%'}}>RUNS</TableCell>
                            <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px',color:'white', width: '5%'}}>HS</TableCell>
                            <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px',color:'white', width: '5%'}}>AVG</TableCell>
                            <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px',color:'white', width: '5%'}}>BF</TableCell>
                            <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px',color:'white', width: '5%'}}>SR</TableCell>
                            <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px',color:'white', width: '5%'}}>100</TableCell>
                            <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px',color:'white', width: '5%'}}>50</TableCell>
                            <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px',color:'white', width: '5%'}}>4s</TableCell>
                            <TableCell sx={{padding: '30px 10px',textAlign:'center',fontWeight:'600',fontSize:'12px',color:'white', width: '5%'}}>6s</TableCell>
                          </TableRow>
                        </TableHead>                 
                        <TableBody>
                          {statsPlayerData.map(row=>(
                            <TableRow border='collapse' padding='15px 10px' alignItems='center'>
                              <TableCell sx={{textAlign:'left'}}>{row.POS}</TableCell>
                              <TableCell sx={{textAlign:'left'}}>
                                <Stack direction='row' alignItems='center' spacing={1} >
                                  <img src={row.img} alt='' width='80px' height='80px'/>  
                                  <Stack alignItems='left' >
                                    <Typography sx={{fontSize:'14px',fontWeight:'500'}}>{row.name}</Typography>
                                    <Typography sx={{fontSize:'12px',color:'rgba(17, 20, 28, .7)'}}>{row.playersTeam}</Typography>
                                  </Stack>
                                </Stack>
                              </TableCell>
                              <TableCell sx={{textAlign:'left'}}>{row.MAT}</TableCell>
                              <TableCell sx={{textAlign:'left'}}>{row.INNS}</TableCell>
                              <TableCell sx={{textAlign:'left'}}>{row.NO}</TableCell>
                              <TableCell sx={{textAlign:'left'}}>{row.RUNS}</TableCell>
                              <TableCell sx={{textAlign:'left'}}>{row.HS}</TableCell>
                              <TableCell sx={{textAlign:'left'}}>{row.AVG}</TableCell>
                              <TableCell sx={{textAlign:'left'}}>{row.BF}</TableCell>
                              <TableCell sx={{textAlign:'left'}}>{row.SR}</TableCell>
                              <TableCell sx={{textAlign:'left'}}>{row.hundred}</TableCell>
                              <TableCell sx={{textAlign:'left'}}>{row.fifty}</TableCell>
                              <TableCell sx={{textAlign:'left'}}>{row.fours}</TableCell>
                              <TableCell sx={{textAlign:'left'}}>{row.sixes}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                    </Table>
                  </TableContainer>
                </Stack>
              </Stack>
            </TabPanel>
                

            <TabPanel value='2' >
              <Stack direction='row' spacing={4} alignItems='center' justifyContent='center' marginTop='20px'>
                <img src={fairplaycard} alt='fairplay' width='400px' height='250px'/>
                <img src={mvpcard} alt='mvp' width='400px' height='250px'/>
              </Stack>
            </TabPanel>     


            <TabPanel value='3'>
              <Stack spacing={6}>
                {recordsData.map((item,index)=>(
                  <React.Fragment key={index}>
                  <Stack spacing={2}>
                    <Typography variant='h4' sx={{fontWeight:'700', mb: 3}}>{item.heading}</Typography>
                    <Stack alignItems='center' justifyContent='center' direction='row' spacing={3} flexWrap='wrap'>   
                    {item.records.map((record, index)=>(                                       
                      <Stack width='237px' height='332px' sx={{borderRadius:'20px'}}>
                        <Card>
                          <Stack key={index} width='237px' height='200px' alignItems='center' sx={{backgroundImage:'linear-gradient(to top right, #e3cf23, #ff481e)'}}> 
                            <img src={record.recordImg} alt='virat' width='180px' height='180px' style={{marginTop:'20px'}}/>
                          </Stack>
                          <Stack width='237px' height='127px' alignItems='center'>
                            <Typography sx={{fontSize:'16px',fontWeight:'700'}}>{record.recordName}</Typography>
                            <Typography sx={{fontSize:'22px',fontWeight:'900'}}>{record.recordRuns}</Typography>
                            <Typography sx={{fontSize:'11px',color:'#303030',marginBottom:'6px'}}>{record.recordType}</Typography>
                            <Box width='170px' sx={{backgroundColor:'#ff481e',padding:'2px'}} alignSelf='center' justifyContent='center' display='flex'>
                              <Typography sx={{color:'white'}}>{record.record}</Typography>
                            </Box>
                          </Stack>
                        </Card>
                      </Stack>
                      ))}
                    </Stack>
                  </Stack>
                  </React.Fragment>
                ))}
                
              </Stack>
            </TabPanel>         
          </TabContext>
        </Stack>
        
      </Stack>
      
    </>
  )
}

const recordsData=[
  {
    heading:'All Time Batting Leaders',
    records:[
    {
      recordRole:'batter',
      recordImg: vk,
      recordName:'Virat Kohli',
      recordRuns :'8004',
      recordType:'RUNS',
      record:'Orange Cap'
    },
    {
      recordRole:'batter',
      recordImg: dhawan ,
      recordName:'Shikhar Dhawan',
      recordRuns:'768',
      recordType:'FOURS',
      record:'Most Fours'
    },
    {
      recordRole:'batter',
      recordImg: gayle,
      recordName:'Chris Gayle',
      recordRuns:'357',
      recordType:'SIXES',
      record:'Most Sixes'
    },
    {
      recordRole:'batter',
      recordImg: gayle,
      recordName:'Chris Gayle',
      recordRuns:'175',
      recordType:'SCORE',
      record:'Highest Score'
    },
    {
      recordRole:'batter',
      recordImg: salt ,
      recordName:'Phil Salt',
      recordRuns:'175.54',
      recordType:'STRIKE',
      record:'Best Strike Rate'
    },
    ]
  },{
    heading:'All Time Bowling Leaders',
    records:[
      {
        recordRole:'bowler',
        recordImg: chahal ,
        recordName:'Yuzvendra Chahal',
        recordRuns:'205',
        recordType:'WICKETS',
        record:'Purple Cap'
      },
      {
        recordRole:'bowler',
        recordImg: alzarri ,
        recordName:'Alzarri Joseph',
        recordRuns:'6/12',
        recordType:'',
        record:'Best Bowling Figures'
      },
      {
        recordRole:'bowler',
        recordImg: pathirana ,
        recordName:'Matheesha Pathirana',
        recordRuns:'17.41',
        recordType:'',
        record:'Best Bowling Average'
      },
      {
        recordRole:'bowler',
        recordImg: blankimg ,
        recordName:'Daniel Vettori',
        recordRuns:'6.56',
        recordType:'',
        record:'Best Economy'
      },
      {
        recordRole:'bowler',
        recordImg: bhuvi ,
        recordName:'Bhuvneshwar Kumar',
        recordRuns:'1665',
        recordType:'',
        record:'Most Dots'
      }
    ]
  } 
]

export const statsPlayerData=[
  {
    POS:'1',
    img: vk ,
    name:'Virat Kohli',
    playersTeam :'RCB',
    MAT:'15',
    INNS:'15',
    NO:'3',
    RUNS:'741',
    HS:'113*',
    AVG:'61.75',
    BF:'479',
    SR:'154.69',
    hundred:'1',
    fifty:'5',
    fours:'62',
    sixes:'38'
  },{
    POS:'2',
    img: gaikwad,
    name:'Ruthuraj Gaikwad',
    playersTeam :'CSK',
    MAT:'14',
    INNS:'14',
    NO:'3',
    RUNS:'583',
    HS:'108*',
    AVG:'53.00',
    BF:'413',
    SR:'141.16',
    hundred:'1',
    fifty:'4',
    fours:'58',
    sixes:'18'
  },{
    POS:'3',
    img: parag,
    name:'Riyan Parag',
    playersTeam :'RR',
    MAT:'15',
    INNS:'13',
    NO:'3',
    RUNS:'567',
    HS:'84*',
    AVG:'56.70',
    BF:'374',
    SR:'151.60',
    hundred:'0',
    fifty:'4',
    fours:'40',
    sixes:'33'
  },{
    POS:'4',
    img: head,
    name:'Travis Head',
    playersTeam :'SRH',
    MAT:'13',
    INNS:'13',
    NO:'1',
    RUNS:'533',
    HS:'102',
    AVG:'44.42',
    BF:'267',
    SR:'199.62',
    hundred:'1',
    fifty:'4',
    fours:'61',
    sixes:'31'
  },{
    POS:'5',
    img: sudharsan,
    name:'Sai Sudharsan',
    playersTeam :'GT',
    MAT:'12',
    INNS:'12',
    NO:'1',
    RUNS:'527',
    HS:'103',
    AVG:'47.91',
    BF:'373',
    SR:'141.38',
    hundred:'1',
    fifty:'2',
    fours:'48',
    sixes:'16'
  },{
    POS:'6',
    img: samson,
    name:'Sanju Samson',
    playersTeam :'RR',
    MAT:'15',
    INNS:'14',
    NO:'4',
    RUNS:'521',
    HS:'86',
    AVG:'52.10',
    BF:'335',
    SR:'155.52',
    hundred:'0',
    fifty:'5',
    fours:'47',
    sixes:'24'
  },{
    POS:'7',
    img: klrahul,
    name:'KL Rahul',
    playersTeam :'LSG',
    MAT:'14',
    INNS:'14',
    NO:'0',
    RUNS:'520',
    HS:'82',
    AVG:'37.14',
    BF:'382',
    SR:'136.12',
    hundred:'0',
    fifty:'4',
    fours:'45',
    sixes:'19'
  },{
    POS:'8',
    img: pooran,
    name:'Nicholas Pooran',
    playersTeam :'LSG',
    MAT:'14',
    INNS:'14',
    NO:'6',
    RUNS:'499',
    HS:'75',
    AVG:'62.38',
    BF:'280',
    SR:'178.21',
    hundred:'0',
    fifty:'3',
    fours:'35',
    sixes:'36'
  },{
    POS:'9',
    img: sunil,
    name:'Sunil Narine',
    playersTeam :'KKR',
    MAT:'14',
    INNS:'13',
    NO:'0',
    RUNS:'482',
    HS:'109',
    AVG:'37.08',
    BF:'268',
    SR:'179.85',
    hundred:'1',
    fifty:'3',
    fours:'50',
    sixes:'32'
  }
]

export default Stats
