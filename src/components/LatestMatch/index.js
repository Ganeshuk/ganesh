// Write your code here
import Matchcard from '../MatchCard'
import './index.css'

const Latest = props => {
  const {Team} = props
  console.log(Team.recentMatch)
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    menOfMatch,
    umpires,
  } = Team.latestMatch

  return (
    <div>
      <div className="main-match">
        <div className="div">
          <h1 className="match-h1">{competingTeam}</h1>

          <p className="p">{date}</p>

          <p className="p">{venue}</p>

          <p className="p">{result}</p>
        </div>

        <img src={competingTeamLogo} alt="lk" className="img" />

        <div>
          <h1 className="match-h1">First Innings</h1>

          <p className="p">{firstInnings}</p>

          <h1 className="match-h1">Second Innings</h1>

          <p className="p">{secondInnings}</p>

          <h1 className="match-h1"> Man Of The Match</h1>

          <p className="p">{menOfMatch}</p>

          <h1 className="match-h1">Umpires</h1>

          <p className="p">{umpires}</p>
        </div>
      </div>
      <ul className="ul-l" type="none">
        {Team.recentMatch.map(each => (
          <Matchcard
            logo={each.competingTeamLogo}
            name={each.competingTeam}
            reuslt1={each.result}
            status={each.matchStatus}
          />
        ))}
      </ul>
    </div>
  )
}

export default Latest
