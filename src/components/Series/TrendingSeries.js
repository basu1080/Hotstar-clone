import React from "react";
import SeriesTemplate from "./SeriesTemplate";
const TrendingSeries = () => {
  return (
    <SeriesTemplate
      url={process.env.REACT_APP_TRENDING_SERIES_URL}
      text="Trending"
    />
  );
};

export default TrendingSeries;
