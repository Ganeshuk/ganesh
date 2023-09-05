import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Matches from './components/TeamMatches'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ipl/:id" component={Matches} />
    </Switch>
  </BrowserRouter>
)

export default App
