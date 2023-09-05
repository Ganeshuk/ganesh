// Write your code here
import {Component} from 'react'
import Latest from '../LatestMatch'
import './index.css'

class Matches extends Component {
  state = {list1: []}

  componentDidMount() {
    this.createteam()
  }

  createteam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const result = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const re = await result.json()
    console.log(re)
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

      recentMatch: re.recent_matches,
    }

    this.setState({list1: formatt})
  }

  render() {
    const {list1} = this.state
    console.log(list1.latestMatch)

    return (
      <div>
        <img src={list1.teamBanner} alt="team banner" className="Match-img" />
        <Latest list={list1.latestMatch} />
      </div>
    )
  }
}

export default Matches
