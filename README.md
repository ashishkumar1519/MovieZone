# NetflixGPT

A Netflix clone built with React, Firebase, and Redux featuring AI-powered movie recommendations.

## 🚀 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Authentication**: Firebase Auth
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Backend**: Firebase
- **Deployment**: Firebase Hosting

## 📋 Project Setup

- ✅ Create React App
- ✅ Configured Tailwind CSS
- ✅ Setup App routing
- ✅ Firebase configuration
- ✅ Redux store setup
- ✅ Form validation with useRef hooks

## 🎯 Features

### 🔐 Authentication
- **Login Form**
  - Sign In form with email/password
  - Form validation (email format, password strength)
  - Firebase authentication integration
  - Redux state management
- **Sign Up Form**
  - User registration with display name
  - Email verification
  - Profile creation
- **User Management**
  - Automatic redirect to browse page after login
  - Persistent login sessions
  - Secure logout functionality

### 🎬 Browse Page
- **Header Component**
  - Netflix logo
  - User profile display
  - Sign out functionality
  - Responsive design
- **Main Movie Section**
  - Hero movie with trailer background
  - Movie title and description
  - Call-to-action buttons
- **Movie Recommendations**
  - Horizontal scrolling movie lists
  - Multiple movie categories
  - Movie cards with posters
  - Infinite scroll functionality

### 🤖 NetflixGPT (AI Features)
- **Smart Search Bar**
  - AI-powered movie search
  - Natural language queries
  - Intelligent movie suggestions
- **Personalized Recommendations**
  - AI-based movie suggestions
  - User preference learning
  - Genre-based filtering

## 🏗️ Component Architecture

```
src/
├── components/
│   ├── Header.js          # Navigation & user info
│   ├── Login.js           # Authentication forms
│   ├── Browse.js          # Main browse page
│   └── Body.js            # Route management
├── store/
│   ├── appStore.js        # Redux store config
│   └── userSlice.js       # User state management
├── utils/
│   ├── firebase.js        # Firebase configuration
│   └── validate.js        # Form validation logic
└── assets/
    └── images/            # Static assets
```

## 🔥 Firebase Integration

- **Authentication**: Email/Password sign up and sign in
- **Firestore**: User data storage
- **Hosting**: Production deployment
- **Security**: Protected routes and data validation

## 🎨 UI/UX Features

- **Netflix-inspired Design**: Dark theme with red accents
- **Responsive Layout**: Mobile and desktop compatible
- **Smooth Animations**: Hover effects and transitions
- **Loading States**: User feedback during operations
- **Error Handling**: Comprehensive error messages

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure Firebase in `src/utils/firebase.js`
4. Start development server: `npm start`
5. Build for production: `npm run build`
6. Deploy to Firebase: `firebase deploy`

## 📱 Live Demo

🌐 **Live URL**: [Your Firebase Hosting URL]

## 🔜 Upcoming Features

- [ ] Movie details page
- [ ] Watchlist functionality
- [ ] Social features (reviews, ratings)
- [ ] Offline viewing capabilities
- [ ] Multi-language support




