import React, { useState } from "react";

const OrderPopupDetails = ({ onClose, onProceedToPayment }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    tableNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customerInfo.name && customerInfo.phone && customerInfo.tableNumber) {
      onProceedToPayment(customerInfo);
    } else {
      alert("Please fill in all the details before proceeding.");
    }
  };

  return (
    <div
      className="backdrop"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark backdrop
        zIndex: 1040, // Ensure it's below the modal
      }}
    >
      <div
        className="modal show"
        style={{
          display: "block",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1050, // Modal on top of the backdrop
        }}
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Order Details</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Table Number</label>
                  <input
                    type="number"
                    name="tableNumber"
                    className="form-control"
                    value={customerInfo.tableNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-dark">
                    Proceed to Payment
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPopupDetails;
