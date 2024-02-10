// Write your code here
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl} = movieDetails
  return (
    <li className="image-item">
      <img src={thumbnailUrl} alt="thumbnail" className="movie-image" />
    </li>
  )
}
export default MovieItem
