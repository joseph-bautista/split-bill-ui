import { useState } from "react";

import api from "../api/axios";

export default function CreateBillModal({
  onClose,
  onCreated
}) {

  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    try {

      await api.post("/bills", {
        name
      });

      onCreated();

      onClose();

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Failed to create bill"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>
          Create Bill
        </h2>

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Bill name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {
              loading
                ? "Creating..."
                : "Create"
            }
          </button>

        </form>

        <button
          className="secondary-btn"
          onClick={onClose}
        >
          Cancel
        </button>

      </div>

    </div>
  );
}