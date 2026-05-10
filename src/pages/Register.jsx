import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../api/axios";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    setLoading(true);

    try {

      await api.post(
        "/auth/register",
        form
      );

      navigate("/");

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Registration failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="container">

      <div className="card">

        <h1>
          Create Account
        </h1>

        <p style={{ marginBottom: "1rem" }}>
          Register to start splitting bills.
        </p>

        {error && (
          <p style={{ color: "red", marginBottom: "1rem" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {
              loading
                ? "Creating account..."
                : "Register"
            }
          </button>

        </form>

        <p style={{ marginTop: "1rem" }}>
          Already have an account?{" "}

          <Link to="/">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}