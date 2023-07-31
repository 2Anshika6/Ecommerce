import React, { useState, Fragment } from "react";
import MetaData from "../layout/Header/MetaData";
import "./Search.css";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const Search = ({}) => {
  const [keyword, setKeyword] = useState("");
  
  const searchSubmitHandler = (e) => {
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
     history.push("/products");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;