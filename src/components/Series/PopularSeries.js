import React, { useEffect, useState } from 'react'
import MoviesContainer from '../Layout/MoviesContainer';
import Wrapper from '../Layout/Wrapper';
import SkeletonContainer from '../UI/SkeletonContainer';
import useHttp from '../../hooks/useHttp';
const PopularSeries = () => {
    
  const { loading, results, error, fetchRequest } = useHttp();



  useEffect(() => {
    fetchRequest(process.env.REACT_APP_POPULAR_SERIES_URL);
  }, []);
  return (
    <Wrapper>
      {loading ? (
        <>
         
          <SkeletonContainer />
        </>
      ) : (
        <>
    
          <h4>{`Popular Shows`}</h4>
          {results.length > 0 && (
            <MoviesContainer items={results} series={true} />
          )}
        </>
      )}
    </Wrapper>
  );
}

export default PopularSeries