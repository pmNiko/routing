import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Pages/Home';
import Personajes from './Components/Pages/Personajes';
import Personaje from './Components/Pages/Personaje';
import CrearPersonaje from './Components/Pages/CrearPersonaje';

function App() {
  
  return (
    <>
      <Router>
        <section><Navbar/></section>
        <Route path="/" exact component={Home}/>
        <Route path="/personajes" exact component={Personajes}/>
        <Route path="/personajes/nuevo" exact component={CrearPersonaje}/>
        <Route path="/personajes/:id" exact component={Personaje}/>
      </Router>
    </>
  );
}

export default App;
