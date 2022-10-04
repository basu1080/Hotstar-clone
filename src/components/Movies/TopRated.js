import React, {useEffect, useState} from 'react'
import MoviesContainer from '../Layout/MoviesContainer';
import Wrapper from '../Layout/Wrapper';
import useHttp from '../../hooks/useHttp';
import SkeletonContainer from '../UI/SkeletonContainer';
const TopRated = () => {
    const [data, setData] = useState([])
    const {loading, results, error, fetchRequest} = useHttp()

    
    useEffect(() => {
    
          fetchRequest(process.env.REACT_APP_TOP_MOVIES_URL)
      }, []);
  return (
    <Wrapper>
      {loading ? (
        <>
          <SkeletonContainer />
        </>
      ) : (
        <>
          <h4>{`Top Rated Movies`}</h4>
          {results.length > 0 && (
            <MoviesContainer items={results} series={false} />
          )}
        </>
      )}
    </Wrapper>
  )
}

export default TopRated