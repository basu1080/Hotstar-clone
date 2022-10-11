import { useState, useCallback } from "react";
import axios from "axios";
function useHttp(requestFunction, reqType) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const fetchRequest = useCallback((url) => {
    const asyncFunc = async () => {
      try {
      
        setLoading(true);
        const response = await axios.get(url);

        setResults(response.data.results);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };
    asyncFunc();
  }, []);
  return { loading, results, error, fetchRequest };
}

export default useHttp;
