import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./FilterTabs.module.css";
import React, { useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: "30px 0px 0px 0px" }}>{children}</Box>
      )}
    </div>
  );
}

export default function FilterTabs({
  songs,
  genres,
  type,
  isCollapsed,
  filteredList,
}) {
  const [value, setValue] = useState(0);
  // console.log(filteredList);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className={styles.filter_wrapper}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            minHeight: "unset",
            "& .MuiTabs-indicator": {
              backgroundColor: "#34C94B",
              height: "4px",
              borderRadius: "3px",
            },
            "& .MuiTab-root": {
              color: "white",
              padding: "20px 18px 15px 12px",
              marginRight: "20px",
              minHeight: "unset",
              minWidth: "unset",
              fontSize: "16px",
              textTransform: "none",
              fontWeight: "bold",
              fontFamily: '"Poppins", sans-serif',
              "&.Mui-selected": {
                color: "white",
                fontWeight: "bold",
              },
            },
          }}
        >
          <Tab label="All" />
          {genres.data.data.map((item) => (
            <Tab label={item.label} key={item.key} />
          ))}
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          {!isCollapsed ? (
            <div className={styles.cards}>
              <Carousel items={songs} type={type} />
            </div>
          ) : (
            <div className={styles.cards}>
              {songs.data.map((item) => (
                <Card item={item} key={item.id} type={type} />
              ))}
            </div>
          )}
        </CustomTabPanel>
        {genres.data.data.map((genre, index) => {
          const genreSongs = filteredList[genre.key] || [];
          
          return (
            <CustomTabPanel value={value} index={index + 1} key={genre.key}>
              {!isCollapsed ? (
                <div className={styles.cards}>
                  {genreSongs.length > 0 ? (
                    <Carousel items={genreSongs} type={type} />
                  ) : (
                    <p>No songs found in this genre</p>
                  )}
                </div>
              ) : (
                <div className={styles.cards}>
                  {genreSongs.length > 0 ? (
                    genreSongs.map((item) => (
                      <Card item={item} key={item.id} type={type} />
                    ))
                  ) : (
                    <p>No songs found in this genre</p>
                  )}
                </div>
              )}
            </CustomTabPanel>
          );
        })}
      </Box>
    </Box>
  );
}
