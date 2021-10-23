import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Login from './component/login/Login';
import Main from './component/main/Main';
import Navi from './component/navi/Navi';

function App() {
  return (
    <div className="App">
      <Navi />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
