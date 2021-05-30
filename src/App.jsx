import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Home from "./components/home/home";
import Login from "./components/login/login";

function App({ youtube, authService }) {
  const [videos, setVideos] = useState([]);

  const search = (term) => {
    youtube
      .search(term) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login authService={authService} />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard
            videos={videos}
            onSearch={search}
            authService={authService}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
