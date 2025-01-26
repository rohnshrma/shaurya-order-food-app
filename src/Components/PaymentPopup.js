import React, { useState } from "react";

const PaymentPopup = ({ onClose, onPayAtCounter, onProceedToPayOnline }) => {
  return (
    <div
      className="backdrop"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1040,
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
          zIndex: 1050,
        }}
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Payment Options</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body text-center">
              <p>Select your preferred payment method:</p>
              <div className="d-flex justify-content-around">
                <button className="btn btn-dark" onClick={onPayAtCounter}>
                  Pay at Counter
                </button>
                <button
                  className="btn btn-primary"
                  onClick={onProceedToPayOnline}
                >
                  Pay Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
