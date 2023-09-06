// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Latest from '../LatestMatch'

import './index.css'

class Matches extends Component {
  state = {list1: {}, istime: true, name: ''}

  componentDidMount() {
    this.createteam()
  }

  createteam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const result = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const re = await result.json()

    const formatt = {
      teamBanner: re.team_banner_url,
      latestMatch: {
        competingTeam: re.latest_match_details.competing_team,

        competingTeamLogo: re.latest_match_details.competing_team_logo,

        date: re.latest_match_details.date,

        firstInnings: re.latest_match_details.first_innings,

        secondInnings: re.latest_match_details.second_innings,

        menOfMatch: re.latest_match_details.man_of_the_match,

        result: re.latest_match_details.result,

        umpires: re.latest_match_details.umpires,

        venue: re.latest_match_details.venue,
      },
      recentMatch: re.recent_matches.map(each => ({
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        result: each.result,
        matchStatus: each.match_status,
      })),
    }

    this.setState({list1: formatt, istime: false, name: id})
  }

  render() {
    const {list1, istime, name} = this.state

    const back = `back ${name}`
    return (
      <div className={back}>
        {istime ? (
          <div className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div>
            <center>
              {' '}
              <img
                src={list1.teamBanner}
                alt="team banner"
                className="Match-img"
              />
            </center>
            <center>
              {' '}
              <Latest Team={list1} />
            </center>
          </div>
        )}
      </div>
    )
  }
}

export default Matches
