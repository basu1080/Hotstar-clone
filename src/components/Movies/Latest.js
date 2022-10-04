import React, { useState, useEffect } from "react";
import MoviesContainer from "../Layout/MoviesContainer";
import Wrapper from "../Layout/Wrapper";
import useHttp from "../../hooks/useHttp";
import SkeletonContainer from "../UI/SkeletonContainer";

const Latest = () => {
  const [data, setData] = useState([]);
  const { loading, results, error, fetchRequest } = useHttp();

  console.log(loading, results);

  useEffect(() => {
    fetchRequest(process.env.REACT_APP_NOW_PLAYING_URL);
  }, []);
  return (
    <Wrapper>
      {loading ? (
        <>
          {" "}
          <SkeletonContainer />{" "}
        </>
      ) : (
        <>
          {" "}
          <h4>{`Latest & Trending Movies`}</h4>
          {results.length > 0 && (
            <MoviesContainer items={results} series={false} />
          )}{" "}
        </>
      )}
    </Wrapper>
  );
};

export default Latest;
