// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

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
    console.log(Loader)
    return (
      <div className="Home-main">
        {time ? (
          <div className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
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
