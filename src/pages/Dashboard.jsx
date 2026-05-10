import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function Dashboard() {

  const { user } = useAuth();

  return (
    <div>

      <Navbar />

      <div className="container">

        <div className="card">

          <h1>Dashboard</h1>

          <p>
            Welcome {user?.name}
          </p>

          <Link to="/bills">
            Go To Bills
          </Link>

        </div>

      </div>

    </div>
  );
}