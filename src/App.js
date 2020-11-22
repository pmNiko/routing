import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarCustom from "./Components/Layout/NavbarCustom";
import Loading from "./Components/Common/Loading";

// lazy es una función y Suspense es un componente
import React, { lazy, Suspense } from "react";
/*  React carga los componentes de manera sincronica 
    lazy load hace que los componentes se carguen de manera de
    diferida a medida que los vayamos requiriendo. Lazy busca 
    el componente y Suspense lo inyecta al DOM 
*/
const Login = lazy(() => import("./Components/Common/Login"));
const Home = lazy(() => import("./Components/Pages/Home"));
const Personajes = lazy(() => import("./Components/Pages/Personajes"));
const Personaje = lazy(() => import("./Components/Pages/Personaje"));
const CrearPersonaje = lazy(() => import("./Components/Pages/CrearPersonaje"));

function App() {
  return (
    <>
      {/* El BrowserRouter es quien maneja el routing y este va en el 
        nivel mas alto de la app */}
      <Router>
        <section>
          <NavbarCustom />
        </section>
        {/* Inyecta el componente en el dom */}
        <Suspense fallback={<Loading />}>
          {/* El Switch sirve para renderizar la primer coincidencia */}
          <Switch>
            {/* Route se encarga de sentenciar las rutas con las cuales
            renderear los componentes y la variante exact matchea la ruta exacta*/}
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/personajes" exact component={Personajes} />
            <Route path="/personajes/nuevo" exact component={CrearPersonaje} />
            <Route path="/personaje/:id" exact component={Personaje} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;

/*  ver los procesos corriendo por tcp 
    lsof -i tcp:3000
    kill -9 [PID] 
*/
