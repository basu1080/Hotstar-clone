import React from 'react'
import Movie from '../Layout/Movie'
import './ResultsContainer.css'
const ResultsContainer = (props) => {

    const content = props.data.map((movie) => <Movie img={movie.poster_path} movie={movie} key={movie.id} series={props.series}/>)
  return (
    <div className='results-grid'>
        {content}
    </div>
  )
}

export default ResultsContainer