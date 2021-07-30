import './App.css';
import "./styles/styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/reducer';


import Homepage from './pages/Homepage';
import People from './pages/People';
import Groups from './pages/Groups';
import Initiatives from './pages/Initiatives';
import Events from './pages/Events';
import ShareFiles from './pages/ShareFiles';
import Support from './pages/Support';
import AboutMe from './pages/AboutMe';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/people'>
            <People />
          </Route>
          <Route path='/groups'>
            <Groups />
          </Route>
          <Route path='/initiatives'>
            <Initiatives />
          </Route>
          <Route path='/events'> 
            <Events />
          </Route>
          <Route path='/sharefiles'>
            <ShareFiles />
          </Route>
          <Route path='/support'>
            <Support />
          </Route>   
          <Route path='/aboutme'>
            <AboutMe />
          </Route>             
          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
