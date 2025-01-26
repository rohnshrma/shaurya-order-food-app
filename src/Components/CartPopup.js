import React from "react";

const CartPopup = ({
  cartItems,
  updateCartItemQuantity,
  removeFromCart,
  onClose,
  onPlaceOrder,
}) => {
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleBackdropClick = (e) => {
    // Close the popup if the backdrop is clicked (not the modal content)
    if (e.target.classList.contains("backdrop")) {
      onClose();
    }
  };

  return (
    <div
      className="backdrop"
      onClick={handleBackdropClick}
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
        className="modal show cart-popup"
        tabIndex="-1"
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
              <h5 className="modal-title">Your Cart</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              {cartItems.length === 0 ? (
                <p>Your cart is empty!</p>
              ) : (
                <div>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex justify-content-between align-items-center mb-3"
                    >
                      <div>
                        <h6>{item.name}</h6>
                        <p>
                          {item.price} x {item.quantity} ={" "}
                          {(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => updateCartItemQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => updateCartItemQuantity(item.id, 1)}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger btn-sm ms-3"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="modal-footer">
              <h6 className="me-auto">Total: {calculateTotal().toFixed(2)}</h6>
              <button
                type="button"
                className="btn btn-dark"
                onClick={onPlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
