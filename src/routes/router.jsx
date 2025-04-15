import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { ProtectedRoute } from "../hooks/protectedRoute";
import { Home } from "../pages/home";
import { Setting } from "../pages/setting";

export function MyRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ProtectedRoute accessBy="non-authenticated">
            <Login />
          </ProtectedRoute>
        }
      />
      <Route
        path="/setting/home"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Setting />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
