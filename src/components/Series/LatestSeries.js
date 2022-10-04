import React from "react";
import SeriesTemplate from "./SeriesTemplate";
const LatestSeries = () => {
  return (
    <SeriesTemplate
      url={process.env.REACT_APP_LATEST_SERIES_URL}
      text="Latest Series"
    />
  );
};

export default LatestSeries;
