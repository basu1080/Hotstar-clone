import React, { useEffect } from "react";
import "./Movies.css";
import { useSelector } from "react-redux";
import ImageSlider from "../Home/ImageSlider";
import ErrorModal from "../UI/ErrorModal";
import Login from "../Auth/Login";
import useHttp from "../../hooks/useHttp";
import SkeletonForBanner from "../UI/SkeletonForBanner";
import { MoviesAPI } from "../API/Urls";

import SignUp from "../Auth/SignUp";

import Template from "./Template";
const Movies = () => {
  
  const showLogin = useSelector((state) => state.toggleForm.showLogin);
  const toggleForm = useSelector((state) => state.toggleForm.toggleForm);
  const { loading, results, error, fetchRequest } = useHttp();

  useEffect(() => {
    fetchRequest(process.env.REACT_APP_BANNER_MOVIES_URL);
  }, []);

  if(error!==''){
    return <ErrorModal msg="loading movies failed, please try again later"/>
  }
  return (
    <div className="movies">
      {loading ? (
        <>
          <SkeletonForBanner />
        </>
      ) : (
        <>{results.length > 0 && <ImageSlider movies={results} />}</>
      )}
      {MoviesAPI.map((api) => (
        <div>
          <Template key={api.id} url={api.url} text={api.text} />
        </div>
      ))}

      {toggleForm && <> {showLogin ? <Login /> : <SignUp />}</>}
    </div>
  );
};

export default Movies;
