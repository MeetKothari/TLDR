import './App.css';
//import "bootstrap/dist/css/bootstrap.min.css"

// setting up auth stuff 
import { BrowserRouter, Routes, Route } from "react-router-dom";

// setting up paths 
import Auth from './pages/Auth';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import ForgotPassword from './components/ForgotPassword'; // import the new component
import ChangeNickname from './components/ChangeNickname'; // import change
import Help from './pages/help/Help'; // import help page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* add the new route */}
        <Route path="/change-nickname" element={<ChangeNickname />} /> {/* add the new route */}
        <Route path="/help" element={<Help />} /> {/* add the new route */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;