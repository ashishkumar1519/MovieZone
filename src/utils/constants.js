export const avatar_url= "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg"

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "हिंदी" },
  { identifier: "tamil", name: "தமிழ்" },
  { identifier: "telugu", name: "తెలుగు" },
  { identifier: "kannada", name: "ಕನ್ನಡ" },
];

export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const TMDB_API_Options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`
  }
};

export const API_BASE_URL = "https://api.themoviedb.org/3/movie";


export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200/";
