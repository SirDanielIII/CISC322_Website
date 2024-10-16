// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Assignment1 from './components/assignments/Assignment1';
import Assignment2 from './components/assignments/Assignment2';
import Assignment3 from './components/assignments/Assignment3';
import Resources from './components/Resources';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/assignment1" element={<Assignment1 />} />
            <Route path="/assignment2" element={<Assignment2 />} />
            <Route path="/assignment3" element={<Assignment3 />} />
            <Route path="/resources" element={<Resources />} />
        </Routes>
    );
};

export default App;
