import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        showGptSearch: false,
        searchedGptMovies: null,
        moviename:null
    },

    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMoviesResults:(state,action)=>{
            const {moviename,searchResult} = action.payload;
            state.searchedGptMovies=searchResult;
            state.moviename=moviename;
        }
    }

})

export const {toggleGptSearchView, addGptMoviesResults} = gptSlice.actions;
export default gptSlice.reducer;