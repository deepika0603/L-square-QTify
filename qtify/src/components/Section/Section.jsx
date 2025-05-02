import React, { useState, useEffect } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Carousel from "../Carousel/Carousel";
import FilterTabs from "../FilterTabs/FilterTabs";
import { filteredSongs } from "../API/API";

export default function Section({ data, type, title, genres, songs }) {
  const [isCollapsed, setCollapse] = useState(false);
  const [filteredList, setFilteredList] = useState({});
  // console.log(genres);
  useEffect(() => {
    filteredSongs(songs, genres).then((result) => {
      // console.log("Filtered Songs:", result);
      setFilteredList(result); // Update state if needed
    });
    // console.log(filteredList);
  }, [songs]);
  
  
 

  return (
    <>
      <div className={type === "album" ? styles.wrapper : styles.wrapper_songs}>
        <div className={styles.header}>
          <h3>{title}</h3>
          <h4
            className={styles.collapse_button}
            onClick={() => setCollapse(!isCollapsed)}
          >
            {!isCollapsed ? "Show All" : "Collapse"}
          </h4>
        </div>
        {type === "album" ? (
          data.length === 0 ? (
            <div className={styles.progress_bar}>
              <CircularProgress color="primary" />
            </div>
          ) : !isCollapsed ? (
            <div className={styles.cards}>
              <Carousel items={data} type={type} />
            </div>
          ) : (
            <div className={styles.cards}>
              {data.data.map((item) => (
                <Card item={item} key={item.id} type={type} />
              ))}
            </div>
          )
        ) : renderSongContent(songs, genres, isCollapsed, type, filteredList)}
      </div>
    </>
  );
}

function renderSongContent(songs, genres, isCollapsed, type, filteredList) {
  if (!songs?.data?.length) {
    return (
      <div className={styles.progress_bar}>
        <CircularProgress color="primary" />
      </div>
    );
  }

  return (
    <FilterTabs
      songs={songs}
      type={type}
      genres={genres}
      isCollapsed={isCollapsed}
      filteredList={filteredList}
    />
  );
}