import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/movies" component={MovieList} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Redirect to="/movies" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
