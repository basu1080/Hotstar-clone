import { useState } from "react";
import axios from "axios";
function useHttp(requestFunction, reqType) {

const [loading, setLoading] = useState(false)
const [results, setResults] = useState([])
const [error, setError] = useState('')

const fetchRequest = async(url) => {

  try{
    console.log(url)
    setLoading(true)
      const response = await axios.get(url)

      setResults(response.data.results)
      setLoading(false)
    
  }
  catch(err){
      console.log(err)

  }
}

return {loading, results, error, fetchRequest}

}

export default useHttp;