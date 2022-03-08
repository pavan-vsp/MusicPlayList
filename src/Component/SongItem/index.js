import {AiTwotoneDelete} from 'react-icons/ai'
import './index.css'

const SongItem = props => {
  const {songDetails, del} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const delFun = () => {
    del(id)
  }

  return (
    <li className="list-item-container">
      <div className="details">
        <img src={imageUrl} alt="track" className="song-image" />
        <div className="song-details">
          <p className="">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-dltIcon">
        <p>{duration}</p>
        <button
          type="button"
          className="delete-btn"
          testid="delete"
          onClick={delFun}
        >
          <AiTwotoneDelete size={20} color="white" />
        </button>
      </div>
    </li>
  )
}

export default SongItem
