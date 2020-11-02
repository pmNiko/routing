import {useState, useEffect} from 'react';
import breaking_bad from '../Utils/BASE_URL';

const axios = require('axios');

const useGet = ({url, initialState = []}) => {
    // states
    const [data, setData] = useState(initialState);  
    const [isLoading, setLoading] = useState(true);  
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const get = async () => {
            try {
                // console.log(`${breaking_bad}${url}`);
                const {data} = await axios.get(`${breaking_bad}${url}`);
                // console.log(data);
                setData(data);
                setLoading(false);
            }catch(e){
                setError(true)
            }
        }
        get();
    }, [url]);

    
    return [data,isLoading,error];
}
 
export default useGet;