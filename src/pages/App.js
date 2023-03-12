import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage.js";
import Layout from "./Layout.js";
import Login from "./Login.js";
import Available from './Available.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Homepage />} />
            <Route path="results" element={<Available/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;