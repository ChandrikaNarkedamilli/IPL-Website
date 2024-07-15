import { Box, Breadcrumbs, Button, Card, LinearProgress, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import teamsbg from '../images/teamsbg.png'
import teamsbgimg from '../images/teamsbgimg.png'
import tataipllogo from '../images/tataipllogo.png'
import teamsbgtop from '../images/teamsbgtop.png'
import { Link } from '@mui/material'

function FanPoll() {
  const [selectedOptions, setSelectedOptions] = useState({})

  const handleOptionsClick =(pollIndex,optionIndex)=>{
    setSelectedOptions(prev=>({...prev,[pollIndex]:optionIndex}))
  }

  return (
    <>
      <Box backgroundColor='#061e59'>
        <Breadcrumbs separator='/' sx={{fontSize:'13px',color:'white',padding:'5px',marginLeft:'70px'}} >
          <Link underline='hover' href='/' style={{underline:'hover',textDecoration:'none',color:'white'}}>Home</Link>
          <Link underline='hover' href='/fanpoll' style={{underline:'hover',textDecoration:'none',color:'white'}}>Fanpoll</Link>
        </Breadcrumbs>
      </Box> 
      <Stack sx={{backgroundColor:'#071026'}} >
        <img src={teamsbgimg}  alt='teamsbg' height='328px'/>
        <Stack alignItems='center' marginTop='-200px' height='220px'>
          <img src={tataipllogo} alt='tataipl' width='180px' height='111px'/>
          <Stack marginTop='-260px'><img src={teamsbgtop} alt='bgimg'  /></Stack>
        </Stack>
        <Stack marginBottom='-760px' >
          <img src={teamsbg} alt='teamsbg'/>
        </Stack>
      </Stack>
      {/* <Stack marginTop='40px' alignItems='center' direction='row' spacing={3} width='auto'>
        <Stack width='280px' height='271px'  alignItems='center' sx={{backgroundColor:'white',border:'3px solid #b9ccfd',borderRadius:'15px',padding:'5px',alignItems:'center',justifyContent:'space-between'}}>
            <Typography sx={{fontSize:'18px',fontWeight:'700'}}>Qualifier 2 Q5: What are you looking forward to tonight?</Typography>
            <Stack spacing={1} padding='15px'>
              <Button variant='filled' width='auto' sx={{width:'260px',background:'linear-gradient(90deg, #2d4d9d 0, #18184a 100%)'}}>Klassesn's Klass</Button>
              <Button variant='filled' width='auto' sx={{width:'260px',background:'linear-gradient(90deg, #2d4d9d 0, #18184a 100%)'}}>Powell's Power</Button>
            </Stack>
        </Stack>
        <Stack width='280px' height='271px'  alignItems='center' sx={{backgroundColor:'white',border:'3px solid #b9ccfd',borderRadius:'15px',padding:'5px',alignItems:'center',justifyContent:'space-between'}}>
            <Typography sx={{fontSize:'18px',fontWeight:'700'}}>Qualifier 2 Q4: Which uncapped Indian player has had a bigger impact?</Typography>
            <Stack spacing={1} padding='15px'>
              <Button variant='filled' width='auto' sx={{width:'260px',background:'linear-gradient(90deg, #2d4d9d 0, #18184a 100%)'}}>Nitish Kumar Reddy</Button>
              <Button variant='filled' width='auto' sx={{width:'260px',background:'linear-gradient(90deg, #2d4d9d 0, #18184a 100%)'}}>Riyan Parag</Button>
            </Stack>
        </Stack>
        <Stack width='280px' height='271px'  alignItems='center' sx={{backgroundColor:'white',border:'3px solid #b9ccfd',borderRadius:'15px',padding:'5px',alignItems:'center',justifyContent:'space-between'}}>
            <Typography sx={{fontSize:'18px',fontWeight:'700'}}>Qualifier 2 Q3: Which bowling attack will have the bigger say?</Typography>
            <Stack spacing={1} padding='15px'>
              <Button variant='filled' width='auto' sx={{width:'260px',background:'linear-gradient(90deg, #2d4d9d 0, #18184a 100%)'}}>SRH pacers</Button>
              <Button variant='filled' width='auto' sx={{width:'260px',background:'linear-gradient(90deg, #2d4d9d 0, #18184a 100%)'}}>RR Spinners</Button>
            </Stack>
        </Stack>
        <Stack width='280px' height='271px'  alignItems='center' sx={{backgroundColor:'white',border:'3px solid #b9ccfd',borderRadius:'15px',padding:'5px',alignItems:'center',justifyContent:'space-between'}}>
            <Typography sx={{fontSize:'18px',fontWeight:'700'}}>Qualifier 2 Q2: Will SRH openers provide an explosive start?</Typography>
            <Stack spacing={1} padding='15px'>
              <Button variant='filled' width='auto' sx={{width:'260px',background:'linear-gradient(90deg, #2d4d9d 0, #18184a 100%)'}}>Yes</Button>
              <Button variant='filled' width='auto' sx={{width:'260px',background:'linear-gradient(90deg, #2d4d9d 0, #18184a 100%)'}}>No</Button>
            </Stack>
        </Stack>
        <Stack width='280px' height='271px'  alignItems='center' sx={{backgroundColor:'white',border:'3px solid #b9ccfd',borderRadius:'15px',padding:'5px',alignItems:'center',justifyContent:'space-between'}}>
            <Typography sx={{fontSize:'18px',fontWeight:'700'}}>Qualifier 2 Q1: Who will make it to the final?</Typography>
            <Stack spacing={1} padding='15px'>
              <Button variant='filled' width='auto' sx={{width:'260px',background:'linear-gradient(90deg, #2d4d9d 0, #18184a 100%)'}}>SRH</Button>
              <Button variant='filled' width='auto' sx={{width:'260px',background:'linear-gradient(90deg, #2d4d9d 0, #18184a 100%)'}}>RR</Button>
            </Stack>
        </Stack>
      </Stack> */}


      <Stack marginTop='40px' alignItems='center' justifyContent='center' flexWrap='wrap' direction='row' spacing={3} width='auto'>
        {pollsData.map((poll,pollIndex)=>(
          <Stack width='280px' height='271px'  alignItems='center' sx={{backgroundColor:'white',border:'3px solid #b9ccfd',borderRadius:'15px',padding:'20px',alignItems:'center',justifyContent:'space-between'}}>
            <Typography sx={{fontSize:'18px',fontWeight:'700'}}>{poll.question}</Typography>
            <Stack spacing={1} padding='15px'>
              {poll.options.map((option,optionIndex)=>(
                <div key={optionIndex}>
                  {selectedOptions[pollIndex] !== undefined ? (
                    <Stack>
                      <Stack direction='row' justifyContent='space-between' spacing={1} sx={{ width: '260px' }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>{option}</Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>{selectedOptions[pollIndex] === optionIndex ? poll.val1 : poll.val2}</Typography>
                      </Stack>
                      <LinearProgress
                        variant='determinate'
                        value={selectedOptions[pollIndex] === optionIndex ? parseFloat(poll.val1) : parseFloat(poll.val2)}
                        sx={{ width: '100%', height: '11px', borderRadius: '5px' }}
                      />
                    </Stack>
                  ):(
                    <Button variant='contained' width='auto' sx={{width:'260px',background:'linear-gradient(90deg, #2d4d9d 0, #18184a 100%)'}} onClick={()=>handleOptionsClick(pollIndex,optionIndex)}>
                      {option}
                    </Button>
                  )
                  }
                </div>
              ))} 
            </Stack>
          </Stack>
        ))}
      </Stack>

    </>
  )
}

const pollsData = [
  { question: "Qualifier 2 Q5: What are you looking forward to tonight?", options: ["Klassesn's Klass", "Powell's Power"],val1:'60%',val2:'40%' },
  { question: "Qualifier 2 Q4: Which uncapped Indian player has had a bigger impact?", options: ["Nitish Kumar Reddy", "Riyan Parag"],val1:'57%',val2:'43%' },
  { question: "Qualifier 2 Q3: Which bowling attack will have the bigger say?", options: ["SRH pacers", "RR Spinners"],val1:'47%',val2:'53%'},
  { question: "Qualifier 2 Q2: Will SRH openers provide an explosive start?", options: ["Yes", "No"],val1:'73%',val2:'27%' },
  { question: "Qualifier 2 Q1: Who will make it to the final?", options: ["SRH", "RR"] ,val1:'38%',val2:'63%'}
];

export default FanPoll
