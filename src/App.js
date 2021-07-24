
import './App.css';
import Barranavegacao from './Componentes/Barranavegacao';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListaUsuarios from './Componentes/ListaUsuarios';
import CrateUpdateUsuario from './Componentes/CrateUpdateUsuario';

function App() {
  return (
    <div className="App">
      <Router>
        <Barranavegacao/>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/usuarios" component={ListaUsuarios}></Route>
            <Route path = "/usuario/:id" component={CrateUpdateUsuario}></Route>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
