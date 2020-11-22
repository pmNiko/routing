import { useState } from "react";

/*  Tiene por objetivo eliminar la declaración del modelo
    de datos dentro de cada componente */
const useCustomForm = () => {
  // Recomendación usar variables planas int, strings, boolean
  const [state, setState] = useState({});

  // e -> target .name, value
  const handlerChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return [state, handlerChange, setState];
};

export default useCustomForm;
