import React, { useState, useEffect } from "react";
import axios from "axios";
import Gallary from "./gallery";

// onClick={() => setName("teluguSkillhub")}
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {}, []);
  const handler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setData(response.data.photos.photo);
      });
  };
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <h1>Image Snapshots</h1>
          <input type="text" value={search} onChange={handler}></input> <br />
          <input type="submit" name="search"></input>
        </form>
        {data.length >= 1 ? <Gallary data={data} /> : <h5>data not found</h5>}
      </center>
    </div>
  );
};
export default App;
