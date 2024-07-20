import React from "react";
import iplbanner from "../images/iplbanner.jpg";
import trophy from "../images/trophy.jpg";
import vkandbowler from "../images/vkandbowler.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EventIcon from '@mui/icons-material/Event';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import GroupsIcon from '@mui/icons-material/Groups';
import mobileinhand from '../images/mobileinhand.png'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiApple } from "react-icons/si";
// import tatalogo from '../images/tatlogo.png'
// import angleone from '../images/angleone.png'
// import starsports from '../images/starsports.png'
// import my11circle from '../images/my11circle.png'
// import jiocinema from '../images/jiocinema.png'
// import rupay from '../images/rupay.png'
// import ceat from '../images/ceat.png'
import img1 from "../images/img1.png"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.png"
import img4 from  "../images/img4.jpg"
import img5 from  "../images/img5.jpg"
import img6 from  "../images/img6.jpg"
import img7 from  "../images/img7.jpg"
import img8 from  "../images/img8.jpg"
import { Box, Button, colors, ImageList, ImageListItem, ImageListItemBar, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const redirectShorts =()=>{
    
  }

  return (
    <React.Fragment sx={{width:'100%' }}>
      <Stack direction='row' spacing={5} alignItems='center' height='760px'>
      <Box width='980px' height='660px' overflow="hidden">
        <Carousel
          responsive={responsive}
          // centerMode={true}
          autoPlay
          autoPlaySpeed="2000"
          infinite={true}
          showDots={true}
          swipeable={false}
          draggable={false}
          rewind={true}
          partialVisible={false} 
          slidesToSlide={1}
          transition="crossfade"
          containerClass="carousel-container"
          
        >
          <img
            src={trophy}
            alt="trophy"
            style={{ width: "100%", height: "100%", marginTop: "30px" , objectFit: "cover"}}
          />
          <img
            src={iplbanner}
            alt="iplbanner"
            style={{ width: "100%", height: "100%", marginTop: "30px", objectFit: "cover"  }}
          />
          <img
            src={vkandbowler}
            alt=""
            style={{  width: "100%", height: "100%",marginTop: "30px" , objectFit: "cover"}}
          />
          <img
            src={iplbanner}
            alt="iplbanner"
            style={{ width: "100%", height: "100%", marginTop: "30px", objectFit: "cover" }}
          />
        </Carousel>
      </Box>
      <Box>
        <Typography variant="h3" sx={{mt:'-80px',fontWeight:'500'}}>Get Ready for the TATA IPL 2024</Typography><br/>
        <Typography variant="h6" sx={{fontSize:'18px',color:'#626262', wordBreak:'break-word'}}>Get Live Cricket Scores, Scorecard, Schedules of International</Typography>
        <Typography variant="h6" sx={{fontSize:'18px',color:'#626262', wordBreak:'break-word'}}>and Domestic cricket matches along with Latest News, Videos and ICC Cricket Rankings</Typography><br/>
        <Typography variant="h6" sx={{color:"black"}}>Watch live on <Link to='/' style={{color:"#dc5034"}}>jiocinema.in</Link></Typography>
      </Box>
      </Stack>

      <Box width='auto' height='auto' sx={{backgroundColor:'white',borderRadius:'60px', padding:'30px', margin:'8px 20px'}}> 
          <Stack sx={{marginLeft:'90px'}}>
            <Typography variant='h6' sx={{fontWeight:'700'}}>Good Morning!</Typography>
            <Typography variant='body2'sx={{fontSize:'12px'}}>Curated shorts for you</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='center' margin='18px 18px'>
            <ImageList sx={{width :'1232px', height:'auto'}} cols ={8} gap ={7}>
              {itemData.map( item =>(
                  <ImageListItem key={item.img}>
                    <img src={item.img} alt='img' style={{ width: '132px', height: '160px' ,border:'1px solid white', borderRadius:'20px'}} onClick={()=>redirectShorts}/>
                    <ImageListItemBar position='below' sx={{color:'black',textAlign:'center'}}
                      title={item.title} />
                  </ImageListItem>
                ))
              }
            </ImageList>
          </Stack>
        </Box>

        <Stack alignItems='center'>
          <Typography variant='h4' sx={{fontFamily: 'alineaincisew01-boldregular',fontWeight:'800',padding:'30px 0px'}}>What Are You Looking For?</Typography>
          <Stack direction='row' spacing={16} alignItems='center' justifyContent='center' margin='20px'>
            <Link to='/matches'>
              <Button startIcon={<EventIcon />} sx={{backgroundColor:'#DC5034',color:'white',padding:'20px 50px'}} size="large" ><i>Fixtures & Results</i></Button>
            </Link>
            <Link to='/pointstable'>
              <Button startIcon={<LeaderboardIcon/>} sx={{backgroundColor:'#DC5034',color:'white',padding:'20px 50px'}} size="large" ><i>Points Table</i></Button>
            </Link>
            <Link to='/stats'>
              <Button startIcon={<QueryStatsIcon/>} sx={{backgroundColor:'#DC5034',color:'white',padding:'20px 50px'}} size="large" ><i>Overall Stats</i></Button>
            </Link>
            <Link to='/teams'>
              <Button startIcon={<GroupsIcon/>} sx={{backgroundColor:'#DC5034',color:'white',padding:'20px 50px'}} size="large" ><i>All Teams</i></Button>  
            </Link>
          </Stack>
        </Stack>

        <Stack direction='row' spacing={14} width='auto' height='410px' sx={{backgroundColor:'#19398a',borderRadius:'60px',padding:'60px', marginBottom:'-78px'}}>
          <Stack width='500px' height='300px'  >
            <Typography variant="h4" sx={{fontWeight:"700",color:'white'}}>Get the official IPL App</Typography>
            <br/><Typography variant='body1' sx={{color:'white'}}>Get the official IPL App
  Get the latest scores on the go. Find the latest content, including match highlights, press conferences and recap all at your fingertips by downloading the official IPL app.</Typography>
            <br/><Typography variant='body1'  sx={{color:'white'}}>Available on both App store and Playstore.</Typography>
            <br/><Typography variant='h6' sx={{fontWeight:'500',color:'#DC5034'}}>Download here for free.</Typography><br/>
            <Stack direction='row' spacing={2}>
              <a href='https://play.google.com/store/apps/details?id=com.pulselive.bcci.android&pli=1'><Button startIcon={<IoLogoGooglePlaystore/>} sx={{backgroundColor:'black',color:'white',padding:'13px'}}>Google Play</Button></a>
              <a href='https://apps.apple.com/in/app/ipl/id509837419'><Button startIcon={<SiApple/>} sx={{backgroundColor:'black',color:'white',padding:'13px'}}>App Store</Button></a>
            </Stack>
          </Stack>
          <Stack width='391px' height='320px' marginTop='60px' >
            <img src={mobileinhand} alt='mobileimg' w='391px' h='391px' sx={{marginTop:'30px'}}/>
          </Stack>

        </Stack>
        {/* <Stack direction='row' alignItems='center' width='100%' height='160px' backgroundColor='#081e40' marginTop='-78px'>
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
        </Stack> */}
        
    </React.Fragment>
  );
};
const itemData = [
  {
    img:img1,
    title:'M62 CSK vs RR'
  },{
    img:img2,
    title:'M61 DC vs RR'
  },{
    img:img3,
    title:'M60 PBKS vs RCB'
  },{
    img:img4,
    title:'M59 SRH vs MI'
  },{
    img:img5,
    title:'M58 LSG vs SRH'
  },{
    img:img6,
    title:'M57 KKR vs MI'
  },{
    img:img7,
    title:'M56 GT vs CSK'
  },{
    img:img8,
    title:'M55 RCB vs DC'
  }
  
]

export default HomePage;
