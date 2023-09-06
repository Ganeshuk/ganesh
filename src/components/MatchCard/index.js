// Write your code here
import './index.css'

const Matchcard = props => {
  const {name, logo, status, result1} = props
  console.log(result1)
  const b = status === 'Won' ? 'card-h1 green' : 'card-h1 red'
  return (
    <li className="logo-li">
      <img src={logo} alt={name} className="img-card" />
      <h1 className="card-h1">{name}</h1>
      <p className="pp">{result1}</p>
      <h1 className={b}>{status}</h1>
    </li>
  )
}

export default Matchcard
