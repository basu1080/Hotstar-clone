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
import SkeletonForBanner from '../UI/SkeletonForBanner'
import useHttp from "../../hooks/useHttp";
const Series = () => {
  const [data, setData] = useState([]);
  const showModal = useSelector((state) => state.toggleForm.showModal);
  const toggleForm = useSelector((state) => state.toggleForm.toggleForm);

  const {loading, results, error, fetchRequest} = useHttp()


  useEffect(() => {
      fetchRequest(process.env.REACT_APP_NOW_PLAYING_URL)
  }, []);

  return (
    <div className="series">
      {loading ? (
        <>
          {" "}
          <SkeletonForBanner />
        </>
      ) : (
        <>
          {results.length > 0 && <ImageSlider movies={results} />}
        </>
      )}
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
