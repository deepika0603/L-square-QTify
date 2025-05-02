import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
import { fetchTopAlbum, fetchNewAlbum, fetchSongs, fetchGenres } from "./components/API/API";

function App() {
  const [data, setData] = useState({});
  // const [filteredList, setFilteredList] = useState(null);

  const generateItems = (key, fun) => {
    fun().then((data) => {
      setData((prevData) => {
        return {
          ...prevData,
          [key]: data,
        };
      });
    });
  };

  useEffect(() => {
    generateItems("topAlbums", fetchTopAlbum);
    generateItems("newAlbums", fetchNewAlbum);
    generateItems("songs", fetchSongs);
    generateItems("genres", fetchGenres);
  }, []);

  const {topAlbums = [], newAlbums = [], songs = [], genres = []} = data;

  return (
   
      <div className="app_container">
        <Navbar />
        <Outlet context={{topAlbums, newAlbums, songs, genres}}/>
      </div>
   
  );
}

export default App;