import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../api/axios";

import Navbar from "../components/Navbar";
import AddItemModal from "../components/AddItemModal";
import EditItemModal from "../components/EditItemModal";

export default function BillDetails() {

  const { id } = useParams();

  const [bill, setBill] = useState(null);

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [editingItem, setEditingItem] = useState(null);

  const handleDelete = async (itemId) => {

    const confirmed = window.confirm(
        "Delete this item?"
    );

    if (!confirmed) {
        return;
    }

    try {

        await api.delete(`/items/${itemId}`);

        fetchBill();

        } catch (error) {

            console.error(error);
        }
    };

    const handleEdit = (item) => {

        setEditingItem(item);
    };

  const fetchBill = async () => {

    try {

      const billResponse = await api.get(
        `/bills/${id}`
      );

      setBill(billResponse.data.data);

      const itemsResponse = await api.get(
        `/items/`,
        {
            params: {
                bill_id: id
            }
        }
      );

      setItems(itemsResponse.data.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    fetchBill();

  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>

      <Navbar />

      <div className="page-container">

        <div className="bill-details-card">

          <div className="page-header">

            <div>

              <h1>
                {bill.name}
              </h1>

              <h2>
                ₱ {bill.total_bill}
              </h2>

            </div>

            <button
              onClick={() => setShowModal(true)}
            >
              Add Item
            </button>

          </div>

          <div className="items-list">

            {
                items.length === 0 && (
                <p>
                    No items yet.
                </p>
                )
            }

            {
                items.map((item) => (
                <div
                    key={item.id}
                    className="item-card"
                >

                    <div>

                    <h3>
                        {item.name}
                    </h3>

                    <p>
                        ₱ {item.price}
                    </p>

                    </div>

                    <div className="item-actions">

                    <button
                        onClick={() => handleEdit(item)}
                    >
                        Edit
                    </button>

                    <button
                        className="danger-btn"
                        onClick={() => handleDelete(item.id)}
                    >
                        Delete
                    </button>

                    </div>

                </div>
                ))
            }

            </div>

        </div>

      </div>

      {
        showModal && (
          <AddItemModal
            billId={id}
            onClose={() => setShowModal(false)}
            onCreated={fetchBill}
          />
        )
      }

      {
        editingItem && (
            <EditItemModal
            item={editingItem}
            onClose={() => setEditingItem(null)}
            onUpdated={fetchBill}
            />
        )
}

    </div>
  );
}