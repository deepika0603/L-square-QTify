import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";
import { Link } from "react-router";
import { truncate } from "../../helpers/helpers";

export default function Card({ item, type }) {
  const dummyJson = {
    id: "7853ba7d-ffa4-4c73-ad90-7e001c2787e3",
    title: "Strident Analyst",
    description:
      "Quis ex rem tempore aperlam libero nobis.\nVoluptatibus omnis deleniti laborum minus fugiat molestiae iste consequuntur.",
    follows: 8420,
    image:
      "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    slug: "strident-analyst",
  };

  return (
    <div className={styles.card_wrapper}>
      {type !== "song" ? (
        <Link to={`/album/${item.slug}`}>
          <div className={styles.card}>
            <img src={item.image} />
            <div className={styles.card_banner}>
              <Chip
                size="small"
                label={item.follows + " Follows"}
                color="secondary"
              />
            </div>
          </div>
        </Link>
      ) : (
        <div className={styles.card}>
          <img src={item.image} />
          <div className={styles.card_banner}>
            <Chip
              size="small"
              label={item.likes + " Likes"}
              color="secondary"
            />
          </div>
        </div>
      )}

      <p className={styles.card_title}>{truncate(item.title)}</p>
    </div>
  );
}