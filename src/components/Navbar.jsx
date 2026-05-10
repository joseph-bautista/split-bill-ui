import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function Navbar() {

  const navigate = useNavigate();

  const { logout, user } = useAuth();

  const handleLogout = () => {

    logout();

    navigate("/");
  };

  return (
    <nav className="navbar">

      <h2>
        Split Bill App
      </h2>

      <div>
        <span>
          {user?.name}
        </span>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>

    </nav>
  );
}