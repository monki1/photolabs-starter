import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from "./components/PhotoList";
import TopicList from "./components/TopicList";
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    {/*<PhotoList/>*/}
    {/*  <TopicList/>*/}
      <HomeRoute photos={photos} topics={topics} />
  </div>
)

export default App