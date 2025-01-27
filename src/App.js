import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Components/Menu";
import { menuData } from "./data";
import { useState } from "react";
import CartPopup from "./Components/CartPopup";
import OrderPopupDetails from "./Components/OrderPopupDetails";
import PaymentPopup from "./Components/PaymentPopup";
import OrderPlacedPopup from "./Components/OrderPlacedPopup";
import OnlinePaymentModal from "./Components/OnlinePaymentModel";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [showOrderPlacedPopup, setShowOrderPlacedPopup] = useState(false);
  const [showOnlinePaymentModel, setshowOnlinePaymentModel] = useState(false);

  const addToCart = (item) => {
    const exisitingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (exisitingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setShowCart(true);
  };

  console.log("Data => ", menuData);

  const removeFromCart = (id) => {
    setCart((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateCartItemQuantity = (id, change) => {
    setCart((prevItems) => {
      return prevItems
        .map((item) => {
          return item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const handleProceedPayment = () => {
    setShowPaymentPopup(true);
    setShowOrderDetails(false);
  };
  return (
    <div className="App container">
      <h1 className="text-center">Abc Foods</h1>
      <hr />
      <Menu menuItems={menuData} addToCart={addToCart} />
      {showCart && (
        <CartPopup
          updateCartItemQuantity={updateCartItemQuantity}
          removeFromCart={removeFromCart}
          cartItems={cart}
          onClose={() => {
            setShowCart(false);
          }}
          onPlaceOrder={() => {
            setShowCart(false);
            setShowOrderDetails(true);
          }}
        />
      )}

      {showOrderDetails && (
        <OrderPopupDetails
          onClose={() => {
            setShowOrderDetails(false);
          }}
          onProceedToPayment={handleProceedPayment}
        />
      )}

      {showPaymentPopup && (
        <PaymentPopup
          onClose={() => setShowPaymentPopup(false)}
          onPayAtCounter={() => {
            setShowPaymentPopup(false);
            setShowOrderPlacedPopup(true);
          }}
          onProceedToPayOnline={() => {
            setShowPaymentPopup(false);
            setshowOnlinePaymentModel(true);
          }}
        />
      )}

      {showOrderPlacedPopup && (
        <OrderPlacedPopup onClose={() => setShowOrderPlacedPopup(false)} />
      )}

      {showOnlinePaymentModel && (
        <OnlinePaymentModal
          onClose={() => {
            setshowOnlinePaymentModel(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
