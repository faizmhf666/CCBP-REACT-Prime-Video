import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovies = 'ACTION'
const comedyMovies = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    each => each.categoryId === actionMovies,
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === comedyMovies,
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image"
      />
      <div className="movies-container">
        <div>
          <h1 className="movies-heading">Action Movies</h1>
          <MoviesSlider moviesList={actionMoviesList} />
        </div>
        <div>
          <h1 className="movies-heading">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
