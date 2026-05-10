import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import api from "../api/axios";

import { useAuth } from "../context/AuthContext";

export default function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await api.post(
        "/auth/login",
        form
      );

      login(
        response.data.token,
        response.data.user
      );

      navigate("/dashboard");

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="container">

      <form
        className="card"
        onSubmit={handleSubmit}
      >

        <h1>Login</h1>

        {error && <p>{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">
          Login
        </button>

        <p>
          No account? <Link to="/register">Register</Link>
        </p>

      </form>

    </div>
  );
}