import React, {  useEffect } from "react";
import "./Movies.css";
import { useSelector } from "react-redux";
import ImageSlider from "../Home/ImageSlider";

import Login from "../Auth/Login";
import useHttp from "../../hooks/useHttp";
import SkeletonForBanner from "../UI/SkeletonForBanner";
import { MoviesAPI } from "../API/Urls";

import SignUp from "../Auth/SignUp";
import Template from "./Template";
const Movies = () => {

  const showModal = useSelector((state) => state.toggleForm.showModal);
  const toggleForm = useSelector((state) => state.toggleForm.toggleForm);
  const { loading, results, error, fetchRequest } = useHttp();

  useEffect(() => {
    fetchRequest(process.env.REACT_APP_BANNER_MOVIES_URL);
  }, []);

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
          <Template key={api.id} url={api.url} text={api.text} />{" "}
        </div>
      ))}

      {showModal && (
        <React.Fragment>{!toggleForm ? <Login /> : <SignUp />}</React.Fragment>
      )}
    </div>
  );
};

export default Movies;
