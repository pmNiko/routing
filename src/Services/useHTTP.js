import { useState, useEffect } from "react";
// import breaking_bad from '../Utils/BASE_URL';
import API from "./../Utils/api";

const useGet = ({ url, initialState = [] }) => {
  // states
  const [data, setData] = useState(initialState);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const get = async () => {
      try {
        // const {data} = await axios.get(`${breaking_bad}${url}`);
        const { data } = await API.get(url);
        setData(data);
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    };
    get();
  }, [url]);

  return [data, isLoading, error];
};

export default useGet;
