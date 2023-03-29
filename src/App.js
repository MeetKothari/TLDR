import './App.css';
//import "bootstrap/dist/css/bootstrap.min.css"

// setting up auth stuff 
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

// setting up paths 
import Auth from './/pages/Auth.js';
import Home from './/pages/Home.js';
import Profile from './/pages/Profile.js';
import Settings from './/pages/Settings.js';
import ForgotPassword from './components/ForgotPassword.js'; // import the new component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* add the new route */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
