import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import PostsVK from './PostsVK/PostsVK';
import PostsDiscord from './PostsDiscord/PostsDiscord';
import Settings from './Settings/Settings';
function App() {
  return (
  <BrowserRouter >
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="main" element={<Main />} />
        <Route path="postsVK" element={<PostsVK />} />
        <Route path="postsDiscord" element={<PostsDiscord />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
