import React, {useState, useEffect} from 'react'
import './Results.css'
import { useSelector } from 'react-redux'
import ResultsContainer from './ResultsContainer'
import NoResults from './NoResults'
import Loader from '../UI/Loader'
const Movies = () => {
    const [data, setData] = useState([])
    const keyword = useSelector(state => state.searchData.keyword)
    const [showLoader, setShowLoader] = useState(true)
    const [resquestCompleted, setRequestedCompleted] = useState(false)
    const type = useSelector(state => state.searchData.type)
    console.log(keyword, type)

  
    


useEffect(() => {
    let baseapi = ''
    if(type==='Movies'){
        baseapi = `https://api.themoviedb.org/3/search/movie?api_key=5b43d1ebe66750ccefbad667bde21805&language=en-US&query=${keyword}&include_adult=false`
    }
    if(type==='Series'){
        baseapi = `https://api.themoviedb.org/3/search/tv?api_key=5b43d1ebe66750ccefbad667bde21805&language=en-US&query=${keyword}&include_adult=false`
    }
  fetch(`${baseapi}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setData(data.results);
      setShowLoader(false)
      setRequestedCompleted(true)
    });
}, [type, keyword]);


  return (
    <div className='results'>
       
    {data.length>0 && <ResultsContainer data={data} series={type==='Series' ? true : false}/>}
    {(resquestCompleted && data.length===0) && <NoResults message={'nothing found!'}/>}
    {showLoader &&  <Loader />}
   
    
    </div>
  )
}

export default Movies