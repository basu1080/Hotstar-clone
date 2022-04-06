import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import MoviesContainer from '../Layout/MoviesContainer'
import Wrapper from '../Layout/Wrapper'
const Related = () => {
    const detailID = useSelector(state => state.detailsID.movie_series_id)
    const [data, setData] = useState([])
    
    const isSeries=detailID.series
    const movie_series_id = detailID.id

    const movieUrl = `https://api.themoviedb.org/3/movie/${movie_series_id}/similar?api_key=5b43d1ebe66750ccefbad667bde21805&language=en-US&page=1`
    const seriesUrl = `https://api.themoviedb.org/3/tv/${movie_series_id}/similar?api_key=5b43d1ebe66750ccefbad667bde21805&language=en-US&page=1`

    useEffect(() => {
        let url=''
        if(isSeries){
            url=seriesUrl
        }
        if(!isSeries){
            url=movieUrl
        }
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
           setData(data.results)
        })
    }, [isSeries, movieUrl, seriesUrl])
  return (
    <Wrapper>
    <h4>{`More Like this`}</h4>
    {data.length>0 && <MoviesContainer items={data} series={isSeries}/>}
  
</Wrapper>
  )
}

export default Related