import axios from "axios";

// Creación de una instancia de axios que contenga la url base
const api = axios.create({
  baseURL: "https://breakingbadapi.com/api/characters/",
});

export default api;

/*  
    api.post('auth', {}, {headers: })
*/
