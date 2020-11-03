import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Pages/Home';
import Personajes from './Components/Pages/Personajes';
import Personaje from './Components/Pages/Personaje';
import CrearPersonaje from './Components/Pages/CrearPersonaje';

function App() {
  
  return (
    <>
      {/* El BrowserRouter es quien maneja el routing y este va en el 
        nivel mas alto de la app */}
      <Router>
        <section><Navbar/></section>
        {/* Route se encarga de sentenciar las rutas con las cuales
           renderear los componentes*/}
        <Route path="/" exact component={Home}/>
        <Route path="/personajes" exact component={Personajes}/>
        <Route path="/personajes/nuevo" exact component={CrearPersonaje}/>
        <Route path="/personaje/:id" exact component={Personaje}/>
      </Router>
    </>
  );
}

export default App;
