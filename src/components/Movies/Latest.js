import React from "react";
import Template from './Template'

const Latest = () => {
 
  return (
    <Template url={process.env.REACT_APP_NOW_PLAYING_URL} text={"Latest and Trending movies"}/>
  )
}

export default Latest;
