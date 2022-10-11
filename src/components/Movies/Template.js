import React, { useState, useEffect } from "react";
import MoviesContainer from "../Layout/MoviesContainer";
import Wrapper from "../Layout/Wrapper";
import useHttp from "../../hooks/useHttp";
import SkeletonContainer from "../UI/SkeletonContainer";
import ErrorModal from "../UI/ErrorModal";
const Template= ({ url, text }) => {
  const { loading, results, error, fetchRequest } = useHttp();

  useEffect(() => {
    fetchRequest(url);
  }, []);

  if(error!==''){
    return <ErrorModal msg={`Loading ${text} movies failed, please try again later!`}/>
  }
  return (
    <Wrapper>
      {loading ? (
        <>
        
          <SkeletonContainer />
        </>
      ) : (
        <>
       
          <h4>{text}</h4>
          {results.length > 0 && (
            <MoviesContainer items={results} series={false} />
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Template;
