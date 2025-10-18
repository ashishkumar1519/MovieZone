# Copilot Instructions for NetflixGPT

## Project Overview
- **NetflixGPT** is a Netflix clone built with React, Redux Toolkit, and Firebase, featuring AI-powered movie recommendations and smart search.
- The app uses a modular component structure, Redux for state, and Firebase for authentication, hosting, and (optionally) Firestore.

## Key Architecture & Patterns
- **Component Structure**: All UI logic is in `src/components/`. Major components include `Header.js` (navigation/user info), `Login.js` (auth forms), `Browse.js` (main page), and `Body.js` (route management).
- **State Management**: Redux Toolkit is configured in `src/store/appStore.js`. Slices like `userSlice.js`, `movieSlice.js`, and `GptSlice.js` manage user, movie, and AI state.
- **Hooks**: Custom hooks in `src/hooks/` fetch and manage movie data by genre/category (e.g., `useActionMovies.js`, `useTrendingMovies.js`).
- **AI Integration**: `GptSearchBar.js` and `GptMovieSuggestions.js` handle AI-powered search and recommendations. These interact with Redux and possibly external APIs.
- **Firebase**: Configured in `src/utils/firebase.js`. Used for authentication and hosting. Update this file for your Firebase project.
- **Styling**: Tailwind CSS is used throughout. Global styles in `src/index.css`.

## Developer Workflows
- **Install dependencies**: `npm install`
- **Start dev server**: `npm start`
- **Build for production**: `npm run build`
- **Deploy to Firebase**: `firebase deploy`
- **Configure Firebase**: Edit `src/utils/firebase.js` with your project credentials.
- **Testing**: Basic tests in `src/App.test.js`. Use `npm test` to run tests.

## Project Conventions
- **Component Naming**: PascalCase for React components/files.
- **Redux Slices**: One slice per domain (`userSlice`, `movieSlice`, `GptSlice`).
- **Hooks**: Custom hooks for each movie category, named as `use<Category>Movies.js`.
- **Assets**: Place images in `src/assets/images/`.
- **Utils**: Shared logic (validation, constants) in `src/utils/`.
- **No direct DOM manipulation**: Use React state and refs.

## Integration Points
- **AI/LLM**: AI search and recommendations are handled in `GptSearchBar.js` and `GptMovieSuggestions.js`. These may call external APIs or use Redux state.
- **Firebase**: All authentication and hosting logic is centralized in `src/utils/firebase.js`.
- **Routing**: Managed in `Body.js` and `App.js` using React Router DOM.

## Examples
- To add a new movie category, create a new hook in `src/hooks/` (e.g., `useComedyMovies.js`) and a corresponding Redux slice if needed.
- To update authentication, modify logic in `Login.js` and `firebase.js`.
- To extend AI features, update `GptSearchBar.js`, `GptMovieSuggestions.js`, and `GptSlice.js`.

## References
- See `README.md` for setup, features, and architecture overview.
- Key files: `src/components/`, `src/store/`, `src/hooks/`, `src/utils/`, `src/assets/images/`.

---

If any conventions or workflows are unclear, please ask for clarification or check the `README.md` for more details.
