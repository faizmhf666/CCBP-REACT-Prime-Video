import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

const MovieItem = props => {
  const {moviesListItems} = props
  const {thumbnailUrl, videoUrl} = moviesListItems
  return (
    <div>
      <Popup
        modal
        trigger={
          <div>
            <img src={thumbnailUrl} alt="thumbnail" />
          </div>
        }
      >
        {close => (
          <>
            <div>
              <p>React is a popular and widely used programming language</p>
            </div>
            <button
              type="button"
              data-testid="closeButton"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <div>
              <ReactPlayer url={videoUrl} />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
