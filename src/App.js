import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import PostsVK from './PostsVK/PostsVK';
import PostsDiscord from './PostsDiscord/PostsDiscord';
import Settings from './Settings/Settings';
import CreatePost from './CreatePost/CreatePost';
const App = () => {
  return (
  <BrowserRouter >
    <div className="App">
      <div className='navBar'>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="main" element={<Main />} />
        <Route path="createPost" element={<CreatePost />} />
        <Route path="postsVK" element={<PostsVK />} />
        <Route path="postsDiscord" element={<PostsDiscord />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
