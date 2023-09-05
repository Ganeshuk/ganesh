// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const Teamcard = props => {
  const {name, id, img} = props
  return (
    <Link to={`/ipl/${id}`} className="link">
      <li className="li">
        <img src={img} alt={name} className="teamcard" />
        <h1 className="h1">{name}</h1>
      </li>
    </Link>
  )
}

export default Teamcard
