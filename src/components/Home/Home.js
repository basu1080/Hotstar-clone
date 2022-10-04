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
import { useSelector, useDispatch } from 'react-redux'
import { getFetchMovies } from '../../store/Slices/MoviesSlice'


const Home = () => {
  const [data, setData] = useState([])
 const showModal = useSelector(state => state.toggleForm.showModal)
 const dispatch = useDispatch()
  const toggleForm = useSelector(state => state.toggleForm.toggleForm)

  const movies = useSelector((state) => state.movies)


 


useEffect(() => {
  dispatch(getFetchMovies(process.env.REACT_APP_NOW_PLAYING_URL))
}, [])

  return (
    <div className='home'>
      {movies.movies.length>0 && <ImageSlider movies={movies.movies}/>}
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