import React, { useState, useEffect } from "react";
import "./Series.css";
import { useSelector } from "react-redux";
import ImageSlider from "../Home/ImageSlider";

import Login from "../Auth/Login";

import SignUp from "../Auth/SignUp";
import PopularSeries from "./PopularSeries";
import RatedSeries from "./RatedSeries";
import LatestSeries from './LatestSeries'
import TrendingSeries from "./TrendingSeries";
const Series = () => {
  const [data, setData] = useState([]);
  const showModal = useSelector((state) => state.toggleForm.showModal);
  const toggleForm = useSelector((state) => state.toggleForm.toggleForm);

  const baseapi =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=5b43d1ebe66750ccefbad667bde21805&language=en-US";

  useEffect(() => {
    fetch(`${baseapi}&page=${1}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.results);
      });
  }, []);

  return (
    <div className="series">
      {data.length > 0 && <ImageSlider movies={data} />}
      <div>
          <TrendingSeries />
      </div>

      <div>
          <LatestSeries />
      </div>
      <div>
        <PopularSeries />
      </div>
      <div>
        <RatedSeries />
      </div>

      {showModal && (
        <React.Fragment>{!toggleForm ? <Login /> : <SignUp />}</React.Fragment>
      )}
    </div>
  );
};

export default Series;
