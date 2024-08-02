import React, { useRef, useEffect } from 'react';
import './index.css';
import Header from './section/header';
import Hero from './section/hero';
import Footer from './section/footer';
import Cursor from './components/cursor';
import Video from './section/video';
import Face from './section/face';
import Intro from './section/intro';
import Projects from './section/projects';
import NewEvent from './section/newevent';

const App = () => {
  const cursorRef = useRef(null);
  
  return (
    <div className="relative min-h-screen">
      <div className="fixed bottom-0 right-0 w-72 h-48 z-50">
        <Face />
      </div>
      <Header />
      <Hero />
      <Video />
      <Intro />
      <Projects />
      <NewEvent />
      <Footer />
    </div>
  );
}

export default App;