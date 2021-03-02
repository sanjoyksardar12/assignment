import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import routes from "./app-routes";

function Body() {
  return (
    <section className="">
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body></Body>
      </Router>
    </div>
  );
}

export default App;
