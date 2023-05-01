// Write your code here
import Slider from 'react-slick'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesListDetails} = props

  const settings = {
    dots: false,

    slidesToShow: 4,

    slidesToScroll: 1,
  }

  return (
    <div data-testid="Movies">
      <Slider {...settings}>
        {moviesListDetails.map(each => (
          <MovieItem moviesListItems={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
