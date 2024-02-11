// Write your code here
import './index.css'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={
        <li className="image-item">
          <img src={thumbnailUrl} alt="thumbnail" className="movie-image" />
        </li>
      }
    >
      {close => (
        <div className="popup-card">
          <button
            type="button"
            className="close-button"
            onClick={() => close()}
            data-testid="closeButton"
            aria-label="close"
          >
            <IoMdClose className="close-icon" />
          </button>
          <ReactPlayer
            url={videoUrl}
            controls="true"
            height={320}
            width="90%"
            padding={20}
          />
        </div>
      )}
    </Popup>
  )
}
export default MovieItem
