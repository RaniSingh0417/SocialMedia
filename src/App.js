import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Error from "./components/Error";
// import StepContext from "./StepContext";
import Mainsignup from "./components/Mainsignup";
import Profile from "./components/Profile";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Mainsignup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
