import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {getFetchAuthSuccess} from '../store/Slices/AuthSlice'
function useHttp(requestFunction, reqType) {

    const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");

  const fetchRequest = useCallback((url, data) => {
    const asyncFunc = async () => {
      try {
        setError('')
        setLoading(true);
        const response = await axios.post(url,  data);
      
        setResponse(response.data);
        setLoading(false);
        dispatch(getFetchAuthSuccess(response.data))
      } catch (err) {
        setLoading(false)
        setError(err.response.data.message);
      }
    };
    asyncFunc();
  }, []);
  return { loading, response, error, fetchRequest };
}

export default useHttp;
