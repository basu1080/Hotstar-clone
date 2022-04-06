import React, {useEffect, useState} from 'react'
import Popular from '../Movies/Popular'
import './Home.css'
import Latest from '../Movies/Latest'
import TopRated from '../Movies/TopRated'
import PopularSeries from '../Series/PopularSeries'
import ImageSlider from './ImageSlider'
import RatedSeries from '../Series/RatedSeries'
import Trending from '../Trending/Trending'
import LatestSeries from '../Series/LatestSeries'
import TrendingSeries from '../Series/TrendingSeries'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import { useSelector } from 'react-redux'



const Home = () => {
  const [data, setData] = useState([])
 const showModal = useSelector(state => state.toggleForm.showModal)
  const toggleForm = useSelector(state => state.toggleForm.toggleForm)
 
  const baseapi =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=5b43d1ebe66750ccefbad667bde21805&language=en-US";

useEffect(() => {
  fetch(`${baseapi}&page=${1}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setData(data.results);
    });
}, []);

  return (
    <div className='home'>
      {data.length>0 && <ImageSlider movies={data}/>}
      <div>
        <Trending />
      </div>
        <div>
          <Latest />
        </div>
        <div>
          <Popular />
        </div>
        <div>
          <TopRated />
        </div>
        <div>
          <TrendingSeries />
      </div>

      <div>
          <LatestSeries />
      </div>
        <div>
          <PopularSeries />
        </div>
        <div>
          <RatedSeries />
        </div>
        {showModal && <React.Fragment>{!toggleForm ? <Login /> : <SignUp />}</React.Fragment>}
      
        
        
    </div>
  )
}

export default Home