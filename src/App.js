import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./app-routes";
import Loader from './components/loader';

const Header = lazy(() => import('./components/Header'));

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
        <Suspense fallback={<Loader />}>
          <Header />
        </Suspense>
        <Body></Body>
      </Router>
    </div>
  );
}

export default App;
