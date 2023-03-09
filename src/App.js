import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Layout from "./components/Loyout";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
