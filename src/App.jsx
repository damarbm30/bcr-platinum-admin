import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Cars, Login, NewCar, EditCar } from "./pages";
import { ProtectedRoutes, PublicRoutes } from "./routes";

function App() {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route index path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route index path="/cars" element={<Cars />} />
        <Route path="/new-car" element={<NewCar />} />
        <Route path="/edit-car/:id" element={<EditCar />} />
      </Route>
    </Routes>
  );
}

export default App;
