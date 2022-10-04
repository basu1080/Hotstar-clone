import React from "react";
import Template from "./Template";

const Popular = () => {
  return (
    <Template
      url={process.env.REACT_APP_POPULAR_MOVIES_URL}
      text="Popular Movies"
    />
  );
};

export default Popular;
