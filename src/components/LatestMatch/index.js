// Write your code here
import './index.css'

const Latest = props => {
  const {list} = props
  console.log(list)
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
  } = list
  return (
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
  )
}

export default Latest
