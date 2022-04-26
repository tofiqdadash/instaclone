import React from 'react';
import {Navigate ,Routes,Route} from 'react-router-dom';
import FeedPage from './Components/FeedPage';
import LoginPage from './Components/LoginPage';
import ProfilePage from './Components/ProfilePage';

function App() {
  return (
    <div className="App">
   <Routes>
     <Route path="/" element={<Navigate to="/login"/>} />
     <Route path="/login" element={<LoginPage />} />
     <Route path="/feed" element={<FeedPage />} />
     <Route path="/profile/:username" element={<ProfilePage />} />
   </Routes>
    </div>
  );
}

export default App;
