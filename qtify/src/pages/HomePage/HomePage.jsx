import Hero from "../../components/Hero/Hero";
import { useOutletContext } from "react-router";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css";
// import FilterTabs from "../../components/FilterTabs/FilterTabs";
// import {useState} from "react";


export default function HomePage() {
  const { topAlbums, newAlbums, songs, genres } = useOutletContext();
//   console.log(topAlbums)
  

  return (
    <div className={styles.homepage_wrapper}>
      <Hero />
      <Section data={topAlbums} title="Top Albums" type={"album"} />
      <Section data={newAlbums} title="New Albums" type={"album"} />
      <div className={styles.songs_wrapper}>
        <Section songs={songs} title="Songs" type={"song"} genres={genres} className={styles.songs} />
      </div>
    </div>
  );
}