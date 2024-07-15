import { Route, Routes } from 'react-router-dom';
import './App.css';
import Matches from './components/Matches';
import NavBar from './components/NavBar';
import Videos from './components/Videos';
import HomePage from './components/HomePage';
import Stats from './components/Stats';
import PointsTable from './components/PointsTable';
import News from './components/News';
import FanPoll from './components/FanPoll';
import Teams from './components/Teams';
import MatchCentre from './components/MatchCentre'
import Footer from './components/Footer';
import PlayersList from './components/PlayersList';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route  exact path='/' element={<HomePage />}/>
        <Route path='/matches' element={<Matches />} />
        <Route path='/matches/matchcentre/:matchId' element={<MatchCentre />} />
        <Route path='/videos' element={<Videos />}/>
        <Route path='/stats' element={<Stats />}/>
        <Route path='/pointstable' element={<PointsTable />}/>
        <Route path='/teams' element={<Teams />} />
        <Route path='/teams/playerslist/:teamName' element={<PlayersList />} />
        <Route path='/news' element={<News />}/>
        <Route path='/fanpoll' element={<FanPoll />}/>
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
