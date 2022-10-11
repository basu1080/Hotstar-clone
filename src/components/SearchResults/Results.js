import React, { useState, useEffect } from "react";
import "./Results.css";
import { useSelector } from "react-redux";
import ResultsContainer from "./ResultsContainer";
import NoResults from "./NoResults";
import Loader from "../UI/Loader";
import useFetch from "../../hooks/useHttp";
import Modal from "../UI/Modal";

const Movies = () => {
  const keyword = useSelector((state) => state.searchData.keyword);
  const { loading, results, error, fetchRequest } = useFetch();

  const [resquestCompleted, setRequestedCompleted] = useState(false);
  const type = useSelector((state) => state.searchData.type);
  console.log(keyword, type);

  useEffect(() => {
    let url = "";
    if (type === "Movies") {
      url = `https://api.themoviedb.org/3/search/movie?api_key=5b43d1ebe66750ccefbad667bde21805&language=en-US&query=${keyword}&include_adult=false`;
    }
    if (type === "Series") {
      url = `https://api.themoviedb.org/3/search/tv?api_key=5b43d1ebe66750ccefbad667bde21805&language=en-US&query=${keyword}&include_adult=false`;
    }

    fetchRequest(url);
    setRequestedCompleted(true);
  }, [type, keyword]);

  if (loading) {
    return (
      <Modal>
        {" "}
        <Loader />
      </Modal>
    );
  }



  return (
    <div className="results">
      {results.length > 0 && (
        <ResultsContainer
          data={results}
          series={type === "Series" ? true : false}
        />
      )}
      {resquestCompleted && results.length === 0 && (
        <NoResults message={"nothing found!"} />
      )}
    </div>
  );
};

export default Movies;
