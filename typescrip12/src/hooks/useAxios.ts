import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = () => {
  const [query, setQuery] = useState<string>("us")
  const [data, setData] = useState<any[]>([]);


  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`https://disease.sh/v3/covid-19/countries/${query}`);
      // setData(result.data);
    }
    fetchData();
  }, [query]);

  return [data, query, setQuery] as const;
};

export default useAxios;