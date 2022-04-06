import React from 'react'
import Movie from './Movie'
import './MoviesContainer.css'
import Slider from "react-slick";

const MoviesContainer = (props) => {
   
    const movies = props.items.map((movie) => <Movie img={movie.poster_path} movie={movie} key={movie.id} series={props.series==='trending' ? (movie.media_type==='tv' ? true : false) : props.series}/>)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:8,
        slidesToScroll: 8,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              
            }
          },
          
       
        
        ]
      };
  return (
    <Slider {...settings} className="movies-slider">
            {movies}
    </Slider>
  )
}

export default MoviesContainer