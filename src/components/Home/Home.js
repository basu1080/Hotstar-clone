import React, { useEffect } from "react";

import "./Home.css";

import ImageSlider from "./ImageSlider";

import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import { useSelector, useDispatch } from "react-redux";
import { getFetchMovies } from "../../store/Slices/MoviesSlice";
import SkeletonForBanner from "../UI/SkeletonForBanner";

import { MoviesAPI, SeriesAPI } from "../API/Urls";
import Template from "../Movies/Template";
import SeriesTemplate from "../Series/SeriesTemplate";


const Home = () => {
  const showLogin = useSelector((state) => state.toggleForm.showLogin);
  const dispatch = useDispatch();
  const toggleForm = useSelector((state) => state.toggleForm.toggleForm);

  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getFetchMovies(process.env.REACT_APP_NOW_PLAYING_URL));
  }, []);

  return (
    <div className="home">
      {movies.loading ? (
        <>
          {" "}
          <SkeletonForBanner />
        </>
      ) : (
        <>
          {movies.movies.length > 0 && <ImageSlider movies={movies.movies} />}{" "}
        </>
      )}
      {MoviesAPI.map((api) => (
        <div>
          {" "}
          <Template key={api.id} url={api.url} text={api.text} />{" "}
        </div>
      ))}
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

export default Home;
