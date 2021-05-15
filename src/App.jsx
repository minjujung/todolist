import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./dashboard/dashboard";
import Home from "./home/home";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;