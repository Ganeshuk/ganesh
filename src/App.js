import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Notfound from './components/NotFound'
import Matches from './components/TeamMatches'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={Matches} />
      <Route component={Notfound} />
    </Switch>
  </BrowserRouter>
)

export default App
