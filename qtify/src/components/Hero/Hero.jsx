import React from "react";
import styles from "./Hero.module.css";
import heroHeadphones from "../../assets/hero_headphones.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h2>100 Thousand Songs, ad-free</h2>
        <h2>Over thousands podcast episodes</h2>
      </div>
      <div>
        <img
          src={heroHeadphones} width="212" alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
