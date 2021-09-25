import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Login from './component/login/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
