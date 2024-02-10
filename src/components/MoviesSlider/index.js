// Write your code here
import Slider from 'react-slick'

import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const MoviesSlider = props => {
  const {List} = props

  const settings = {
    slidesPerRow: 4,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {List.map(item => (
        <ul className="slider-card">
          <MovieItem key={item.id} movieDetails={item} />
        </ul>
      ))}
    </Slider>
  )
}
export default MoviesSlider
