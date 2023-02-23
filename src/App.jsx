import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Login } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
