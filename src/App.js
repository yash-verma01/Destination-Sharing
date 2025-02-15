import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';

import UserPages from './users/pages/UserPages';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

const App = () => {
  return (
    <Router>
      <MainNavigation></MainNavigation>
      <main>
      <Routes>
        <Route path="/" element={<UserPages />} />
        <Route path="/:userID/places" element={<UserPlaces></UserPlaces>}>
        </Route>
        <Route path="/places/new" element={<NewPlaces />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </main>
    </Router>
  );
};

export default App;
