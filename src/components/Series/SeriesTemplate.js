import React, { useEffect} from 'react'
import MoviesContainer from '../Layout/MoviesContainer';
import Wrapper from '../Layout/Wrapper';
import SkeletonContainer from '../UI/SkeletonContainer';
import useHttp from '../../hooks/useHttp';
const SeriesTemplate = ({url, text}) => {
   
   
    const { loading, results, error, fetchRequest } = useHttp();



  useEffect(() => {
    fetchRequest(url);
  }, [fetchRequest, url]);
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
            <MoviesContainer items={results} series={true} />
          )}
        </>
      )}
    </Wrapper>
  );
}

export default SeriesTemplate




