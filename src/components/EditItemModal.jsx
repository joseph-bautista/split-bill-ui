import { useState } from "react";

import api from "../api/axios";

export default function EditItemModal({
  item,
  onClose,
  onUpdated
}) {

  const [form, setForm] = useState({
    name: item.name,
    price: item.price
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

    setLoading(true);

    setError("");

    try {

      await api.put(
        `/items/${item.id}`,
        {
          name: form.name,
          price: parseFloat(form.price)
        }
      );

      onUpdated();

      onClose();

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Failed to update item"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>
          Edit Item
        </h2>

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Item name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />

          <button
            type="submit"
            disabled={loading}
          >
            {
              loading
                ? "Updating..."
                : "Update Item"
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