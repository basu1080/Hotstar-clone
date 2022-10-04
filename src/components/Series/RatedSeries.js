import React from "react";
import SeriesTemplate from "./SeriesTemplate";
const RatedSeries = () => {
  return (
    <SeriesTemplate
      url={process.env.REACT_APP_RATED_SERIES_URL}
      text="Top Rated"
    />
  );
};

export default RatedSeries;
