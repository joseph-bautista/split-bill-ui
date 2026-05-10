import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Bills from "./pages/Bills";
import BillDetails from "./pages/BillDetails";

import {
  AuthProvider,
  useAuth
} from "./context/AuthContext";

function ProtectedRoute({ children }) {

  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
}

function AppRoutes() {

  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/bills"
        element={
          <ProtectedRoute>
            <Bills />
          </ProtectedRoute>
        }
      />

      <Route
        path="/bills/:id"
        element={
          <ProtectedRoute>
            <BillDetails />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default function App() {

  return (
    <AuthProvider>

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

    </AuthProvider>
  );
}