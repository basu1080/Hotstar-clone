import React from 'react'
import Template from './Template'
const TopRated = () => {
   return (
    <Template url={process.env.REACT_APP_TOP_MOVIES_URL} text="Top Rated"/>
   )
}

export default TopRated