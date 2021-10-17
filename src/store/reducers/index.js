import { combineReducers } from 'redux'
import TrendingReducer from './reducerTrending'
import LatestReducer from './reducerLatest'
import PopularReducer from './reducerPopular'
import NetflixOriginalsReducer from './reducerNetflixOriginals'
import TopRatedReducer from './reducerTopRated'
import ActionMoviesReducer from './reducerActionMovies'
import ComedyMoviesReducer from './reducerComedyMovies'
import HorrorMoviesReducer from './reducerHorrorMovies'
import RomanceMoviesReducer from './reducerRomanceMovies'
import DocumentaryReducer from './reducerDocumentary'
import SearchMovieReducer from './reducerSearchMovie'
import MovieDetailsReducer from './reducerMovieDetails'
import SignInReducer from './signInReducer'

const rootReducer = combineReducers({
  trending: TrendingReducer,
  latest: LatestReducer,
  popular: PopularReducer,
  netflixOriginals: NetflixOriginalsReducer,
  topRated: TopRatedReducer,
  action: ActionMoviesReducer,
  comedy: ComedyMoviesReducer,
  horror: HorrorMoviesReducer,
  romance: RomanceMoviesReducer,
  documentary: DocumentaryReducer,
  searchMovie: SearchMovieReducer,
  movieDetails: MovieDetailsReducer,
  user: SignInReducer,
})

export default rootReducer
