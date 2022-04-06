import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import DetailsContainer from './DetailsContainer'
import Trailers from './Trailers'
import './Detail.css'
import Related from './Related'
const Detail = () => {
  const detailID = useSelector(state => state.detailsID.movie_series_id)
  const [data, setData] = useState({})
  
 console.log(detailID)
  const apiKey = "5b43d1ebe66750ccefbad667bde21805";
  useEffect(() => {

    fetch(
      `https://api.themoviedb.org/3/${detailID.series ? 'tv' : 'movie'}/${detailID.id}?api_key=${apiKey}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data)
      });
  }, [detailID]);


  return (
    <div className='details-container'>
      {Object.keys(data).length===0 && <div> <h2>Sorry this is not availble</h2></div>}
        {Object.keys(data).length>0 && <DetailsContainer movie={data} series={detailID.series} />}
        {Object.keys(data).length>0 && <Trailers movie={data} series={detailID.series}/>}
        <Related />
    </div>
  )
}

export default Detail