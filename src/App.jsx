import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import One from './components/one';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-[200px] p-4 flex-grow">
          <Routes>
            <Route path="/one" element={<One />} />
            <Route path="/two" element={<div>Two Authors Page</div>} />
            <Route path="/three" element={<div>Three Authors Page</div>} />
            <Route path="/four" element={<div>Four Authors Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
