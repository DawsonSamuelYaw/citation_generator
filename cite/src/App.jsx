import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import One from './components/one';
import Two from './components/two';
import Three from './components/three';
import Four from './components/four';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-[200px] p-4 flex-grow">
          <Routes>
            <Route path="/one" element={<One />} />
            <Route path="/two" element={<Two/>} />
            <Route path="/three" element={<Three/>} />
            <Route path="/four" element={<Four/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
