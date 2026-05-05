import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/auth/Login.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<h1>Bienvenido al Dashboard</h1>} />
          <Route path="/perfil" element={<h1>Tu Perfil</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
