import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../api/axios";

import Navbar from "../components/Navbar";
import CreateBillModal from "../components/CreateBillModal";

export default function Bills() {

  const [bills, setBills] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const fetchBills = async () => {

    try {

      const response = await api.get("/bills");

      setBills(response.data.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    fetchBills();

  }, []);

  return (
    <div>

      <Navbar />

      <div className="page-container">

        <div className="page-header">

          <h1>
            Bills
          </h1>

          <button
            onClick={() => setShowModal(true)}
          >
            Create Bill
          </button>

        </div>

        {
          loading
            ? <p>Loading bills...</p>
            : (
              <div className="bill-grid">

                {
                  bills.map((bill) => (
                    <Link
                      key={bill.id}
                      to={`/bills/${bill.id}`}
                      className="bill-card"
                    >

                      <h3>
                        {bill.name}
                      </h3>

                      <p>
                        ₱ {bill.total_bill}
                      </p>

                    </Link>
                  ))
                }

              </div>
            )
        }

      </div>

      {
        showModal && (
          <CreateBillModal
            onClose={() => setShowModal(false)}
            onCreated={fetchBills}
          />
        )
      }

    </div>
  );
}