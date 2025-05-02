import axios from "axios";

const backendURL = "https://qtify-backend-labs.crio.do/";

export const fetchTopAlbum = async () => {
  try {
    const response = await axios.get(`${backendURL}/albums/top`);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewAlbum = async () => {
  try {
    const response = await axios.get(`${backendURL}/albums/new`);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${backendURL}/songs`);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${backendURL}/genres`);
    // console.log(response.data.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};


export const filteredSongs = async (songsResponse, genresResponse) => {
    try {
      
  
     
      const songsData = songsResponse?.data || [];
      const genresData = genresResponse?.data?.data || [];
  
      
      if (!songsData.length || !genresData.length) {
        return {};
      }
  
      
      const songsByGenre = {};
  
      genresData.forEach((genre) => {
        if (!genre?.key) return; 
        
        songsByGenre[genre.key] = songsData.filter(
          (song) => song?.genre?.key === genre.key
        );
      });
  
      return songsByGenre;
    } catch (error) {
      console.error("Filtering failed:", error);
      return {}; 
    }
  };