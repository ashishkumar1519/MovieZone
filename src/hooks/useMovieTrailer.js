import { useEffect, useCallback } from "react";
import { TMDB_API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store/movieSlice";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();

  const getMovieTrailer = useCallback(async () => {
    // Logic to get movie trailer
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
      TMDB_API_Options
    );
    const json = await data.json();
    const filterData = json?.results?.filter(
      (video) => video?.type === "Trailer"
    );
    const trailers = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailers));
  }, [movie_id, dispatch]);

  useEffect(() => {
    if (movie_id) {
      getMovieTrailer();
    }
  }, [movie_id, getMovieTrailer]);
};

export default useMovieTrailer;
