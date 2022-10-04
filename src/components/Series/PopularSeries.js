import React from "react";
import SeriesTemplate from "./SeriesTemplate";
const PopularSeries = () => {
  return (
    <SeriesTemplate
      url={process.env.REACT_APP_POPULAR_SERIES_URL}
      text="Popular Series"
    />
  );
};

export default PopularSeries;
