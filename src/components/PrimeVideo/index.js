// Write your code here
import './index.css'

import MoviesSlider from '../MoviesSlider/index'

const PrimeVideo = props => {
  const {moviesList} = props

  const getActionList = () => {
    const actionList = moviesList.filter(each => each.categoryId === 'ACTION')
    return actionList
  }

  const getComedyList = () => {
    const comedyList = moviesList.filter(each => each.categoryId === 'COMEDY')
    return comedyList
  }

  const actionList = getActionList()
  const comedyList = getComedyList()

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="container">
        <div className="slides-content-container">
          <div>
            <h1 className="name">Action Movies</h1>
            <MoviesSlider List={actionList} />
          </div>
          <div>
            <h1 className="name">Comedy Movies</h1>
            <MoviesSlider List={comedyList} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
