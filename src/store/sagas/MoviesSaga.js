import {call, put, takeEvery} from 'redux-saga/effects';
import {getFetchMoviesSuccess} from '../Slices/MoviesSlice'
// require('dotenv').config()
function* workGetMoviesFetch(action){
  
    const movies = yield call(() => fetch(action.payload))
    console.log(action)
    const formattedMovies = yield movies.json()
   
    yield put(getFetchMoviesSuccess(formattedMovies.results))
}

function* moviesSaga(){
    
    yield takeEvery('movies/getFetchMovies', workGetMoviesFetch);
}

export default moviesSaga;