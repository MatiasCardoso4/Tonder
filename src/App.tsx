import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import { Matches } from "./pages/Matches/Matches";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>
      </Router>
  );
}

export default App;
