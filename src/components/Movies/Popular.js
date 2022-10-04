import React, { useEffect, useState } from "react";
import MoviesContainer from "../Layout/MoviesContainer";
import Wrapper from "../Layout/Wrapper";
import useHttp from "../../hooks/useHttp";
import SkeletonContainer from "../UI/SkeletonContainer";

const Popular = () => {
  const { loading, results, error, fetchRequest } = useHttp();

  console.log(results);
  useEffect(() => {
    fetchRequest(process.env.REACT_APP_POPULAR_MOVIES_URL);
  }, []);
  return (
    <Wrapper>
      {loading ? (
        <>
          <SkeletonContainer />
        </>
      ) : (
        <>
          <h4>{`Popular Movies`}</h4>
          {results.length > 0 && (
            <MoviesContainer items={results} series={false} />
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Popular;
