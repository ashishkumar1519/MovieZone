import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import MovieSlice from './movieSlice';
import GptReducers from './GptSlice'
import LangConfig from './configSlice'
const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: MovieSlice,
        gpt:GptReducers,
        config:LangConfig
    }
});


export default appStore;