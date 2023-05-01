import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div>
        <h1>Action Movies</h1>
        <MoviesSlider
          moviesListDetails={moviesList.filter(
            each => each.categoryId === 'ACTION',
          )}
        />
      </div>
      <div>
        <h1>Comedy Movies</h1>
        <MoviesSlider
          moviesListDetails={moviesList.filter(
            each => each.categoryId === 'COMEDY',
          )}
        />
      </div>
    </div>
  )
}
export default PrimeVideo
