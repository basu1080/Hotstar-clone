import React, { useEffect } from "react";
import "./Series.css";
import { useSelector } from "react-redux";
import ImageSlider from "../Home/ImageSlider";

import Login from "../Auth/Login";

import SignUp from "../Auth/SignUp";
import ErrorModal from "../UI/ErrorModal";
import SkeletonForBanner from "../UI/SkeletonForBanner";
import useHttp from "../../hooks/useHttp";
import { SeriesAPI } from "../API/Urls";
import SeriesTemplate from "./SeriesTemplate";
const Series = () => {
  const toggleForm = useSelector((state) => state.toggleForm.toggleForm);
  const showLogin = useSelector((state) => state.toggleForm.showLogin);

  const { loading, results, error, fetchRequest } = useHttp();

  useEffect(() => {
    fetchRequest(process.env.REACT_APP_NOW_PLAYING_URL);
    
  }, []);

  if(error!==''){
    return <ErrorModal msg="Loading series failed, please try again later!"/>
  }
  return (
    <div className="series">
      {loading ? (
        <>
          {" "}
          <SkeletonForBanner />
        </>
      ) : (
        <>{results.length > 0 && <ImageSlider movies={results} />}</>
      )}

      {SeriesAPI.map((api) => (
        <div>
          {" "}
          <SeriesTemplate key={api.id} url={api.url} text={api.text} />{" "}
        </div>
      ))}
      {toggleForm && <> {showLogin ? <Login /> : <SignUp />}</>}
    </div>
  );
};

export default Series;
