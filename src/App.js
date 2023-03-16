import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home.js";
import Layout from "./components/Layout.js";
import Login from "./pages/Login.js";
import AirportAvailability from './pages/AirportAvailability.js';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Homepage />} />
            <Route path="results" element={<AirportAvailability/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
