import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';

import UserPages from './users/pages/UserPages';
import NewPlaces from './places/pages/NewPlaces';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserPages />} />
        <Route path="/places/new" element={<NewPlaces />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
