import React, { useState } from 'react';
import Home from "./pages/Home";
import Support from "./pages/Support";
import Warenkorb from "./pages/Warenkorb";
import Zahlung from "./pages/Zahlung";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Configurator from "./pages/Configurator";
import Navbar from "./components/Navbar";
import Login from './components/Login';
import Register from './components/Register';
import { Account } from './components/Accounts';
import Status from './components/Status';
import Confirm from './components/Confirm';

function App() {
  const [orders, setOrders] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const closeRegister = () => {
    setShowRegister(false);
  };

  const openConfirm = () => {
    setShowConfirm(true);
  };

  const closeConfirm = () => {
    setShowConfirm(false);
  };

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const removeOrder = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  const submitOrder = (customerData) => {
    const orderData = { customerData, orders };
    console.log('Sending order data:', orderData);
    fetch('https://nextgenhosting.de/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      setOrders([]);  // Leert den Warenkorb nach erfolgreicher Bestellung
    })
    .catch((error) => {
      console.error('Error:', error);
      // Optional: Handle error (e.g., show an error message)
    });
  };

  return (
    <Account>
      <BrowserRouter>
        <Status />
        <Navbar onLoginOpen={openLogin} cartCount={orders.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/warenkorb" element={<Warenkorb orders={orders} removeOrder={removeOrder} />} />
          <Route path="/zahlung" element={<Zahlung orders={orders} submitOrder={submitOrder} />} />
          <Route path="/konfigurator" element={<Configurator addOrder={addOrder} />} />
        </Routes>
        <Login isOpen={showLogin} onRequestClose={closeLogin} onRegisterOpen={openRegister} />
        <Register isOpen={showRegister} onRequestClose={closeRegister} onLoginOpen={openLogin} onConfirmOpen={openConfirm} />
        <Confirm isOpen={showConfirm} onRequestClose={closeConfirm} />
      </BrowserRouter>
    </Account>
  );
}

export default App;
