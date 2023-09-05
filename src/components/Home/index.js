// Write your code here
import {Component} from 'react'
import Teamcard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {list: [], time: true}

  componentDidMount() {
    this.getinfo()
  }

  getinfo = async () => {
    const result = await fetch('https://apis.ccbp.in/ipl')
    const re = await result.json()
    console.log(re.teams)
    this.setState({list: re.teams, time: false})
  }

  render() {
    const {list, time} = this.state
    return (
      <div className="Home-main">
        {time ? (
          <h1>Loading.....</h1>
        ) : (
          <div>
            <div className="card-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="Home-img"
              />
              <h1 className="Home-head">IPL Dashboard</h1>
            </div>
            <ul type="none">
              {list.map(each => (
                <Teamcard
                  name={each.name}
                  id={each.id}
                  img={each.team_image_url}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
