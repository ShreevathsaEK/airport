import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage.js";
import Layout from "./Layout.js";
import Login from "./Login.js";

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