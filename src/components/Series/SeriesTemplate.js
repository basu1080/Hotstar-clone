import React, { useEffect} from 'react'
import MoviesContainer from '../Layout/MoviesContainer';
import Wrapper from '../Layout/Wrapper';
import SkeletonContainer from '../UI/SkeletonContainer';
import useHttp from '../../hooks/useHttp';
import ErrorModal from '../UI/ErrorModal';
const SeriesTemplate = ({url, text}) => {
   
   
    const { loading, results, error, fetchRequest } = useHttp();



  useEffect(() => {
    fetchRequest(url);
  }, [fetchRequest, url]);

  if(error!==''){
    return <ErrorModal msg={`Loading ${text} series failed, please try again later!`}/>
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
            <MoviesContainer items={results} series={true} />
          )}
        </>
      )}
    </Wrapper>
  );
}

export default SeriesTemplate




