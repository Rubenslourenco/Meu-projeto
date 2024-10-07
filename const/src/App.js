import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from "./componentes/pages/Home";
import Contact from "./componentes/pages/Contact";
import Company from "./componentes/pages/Company";
import NewProject from "./componentes/pages/NewProject";

function App() {
  return (
      <Router>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/company">Empresa</Link>
          <Link to="/newProject">Novo Projeto</Link>
        </div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="./company">
            <Company />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route spath="/newproject">
            <NewProject />
          </Route>
        </Switch>
        <p>Footer</p>
      </Router>
  )
}

export default App;
