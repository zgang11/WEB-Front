import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import ReactLearning from './pages/react/index'
import VueLearning from './pages/vue/index'
import React from 'react'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/react" component={ReactLearning}></Route>
          <Route path="/vue" component={VueLearning}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
