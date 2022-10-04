import React, { useEffect, useState } from 'react'
import MoviesContainer from '../Layout/MoviesContainer';
import Wrapper from '../Layout/Wrapper';
import SkeletonContainer from '../UI/SkeletonContainer';
import useHttp from '../../hooks/useHttp';
const LatestSeries = () => {
   
   
    const { loading, results, error, fetchRequest } = useHttp();



  useEffect(() => {
    fetchRequest(process.env.REACT_APP_LATEST_SERIES_URL);
  }, []);
  return (
    <Wrapper>
      {loading ? (
        <>
         
          <SkeletonContainer />
        </>
      ) : (
        <>
    
          <h4>{`Latest & Trending series`}</h4>
          {results.length > 0 && (
            <MoviesContainer items={results} series={true} />
          )}
        </>
      )}
    </Wrapper>
  );
}

export default LatestSeries




