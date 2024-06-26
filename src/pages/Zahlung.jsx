import React, { useState } from 'react';
import '../App.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const instanceDetails = {
  't2.micro': { vCPUs: 1, RAM: 1, price: 20 },
  't3.small': { vCPUs: 2, RAM: 2, price: 30 },
  't3.medium': { vCPUs: 2, RAM: 4, price: 40 },
  't3.large': { vCPUs: 2, RAM: 8, price: 45 },
  'm5.large': { vCPUs: 2, RAM: 8, price: 49 },
  'm5.xlarge': { vCPUs: 4, RAM: 16, price: 65 },
  'c5.large': { vCPUs: 2, RAM: 4, price: 55 },
  'c5.xlarge': { vCPUs: 4, RAM: 8, price: 59 }
};

const calculateStorageCost = (storage) => {
  return storage > 30 ? (storage - 30) / 10 : 0;
};

function Zahlung({ orders, submitOrder }) {
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    phone: '',
    email: '',
    discountCode: ''
  });
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountError, setDiscountError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const applyDiscountCode = () => {
    if (customerData.discountCode === 'ts24') {
      setDiscountApplied(true);
      setDiscountError('');
    } else {
      setDiscountApplied(false);
      setDiscountError('Ungültiger Gutscheincode');
    }
  };

  const removeDiscountCode = () => {
    setCustomerData(prevData => ({
      ...prevData,
      discountCode: ''
    }));
    setDiscountApplied(false);
    setDiscountError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitOrder(customerData);
  };

  const originalTotalCost = orders.reduce((acc, order) => {
    const instanceCost = instanceDetails[order.instanceType].price;
    const storageCost = calculateStorageCost(order.storage);
    return acc + instanceCost + storageCost;
  }, 0);

  const discountAmount = discountApplied ? originalTotalCost - 0.01 : 0; // Set to 0.01 for discount
  const discountedTotalCost = originalTotalCost - discountAmount;
  const taxRate = 0.19; // 19% MwSt
  const taxAmount = discountedTotalCost * taxRate;
  const totalCost = (discountApplied ? 0.01 : discountedTotalCost).toFixed(2);

  return (
    <div className="container payment-container">
      <header className="header">
        <h3>Zahlungsinformationen</h3>
      </header>
      <main className="payment">
        <div className="invoice">
          <h4>Rechnung</h4>
          <table className="invoice-table">
            <thead>
              <tr>
                <th>Instanztyp</th>
                <th>CPU</th>
                <th>RAM (GB)</th>
                <th>Betriebssystem</th>
                <th>Betriebssystemversion</th>
                <th>Speicher (GB)</th>
                <th>Preis (€)</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                const instance = instanceDetails[order.instanceType];
                const storageCost = calculateStorageCost(order.storage);
                const totalInstanceCost = instance.price + storageCost;

                return (
                  <tr key={index}>
                    <td>{order.instanceType}</td>
                    <td>{instance.vCPUs}</td>
                    <td>{instance.RAM}</td>
                    <td>{order.os}</td>
                    <td>{order.osVersion}</td>
                    <td>{order.storage}</td>
                    <td>{totalInstanceCost.toFixed(2)}€</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="discount-code-container">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
              <label htmlFor="discountCode" className="discount-code-label" style={{ alignSelf: 'flex-start' }}>Gutscheincode:</label>
              <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <input
                  type="text"
                  id="discountCode"
                  name="discountCode"
                  value={customerData.discountCode}
                  onChange={handleChange}
                  className="discount-code-input"
                  style={{ flex: '1' }}
                />
                <button type="button" onClick={applyDiscountCode} className="apply-discount-button">Anwenden</button>
              </div>
            </div>
            {discountError && <p className="error-message">{discountError}</p>}
            {discountApplied && (
              <button type="button" onClick={removeDiscountCode} className="remove-discount-button">Entfernen</button>
            )}
          </div>
          <div className="invoice-summary">
            <p>Zwischensumme: {originalTotalCost.toFixed(2)}€</p>
            {discountApplied && <p>Rabatt: -{discountAmount.toFixed(2)}€</p>}
            <p>MwSt (19%): {taxAmount.toFixed(2)}€</p>
            <p><strong>Gesamtbetrag: {totalCost}€</strong></p>
          </div>
        </div>
        <div className="customer-data-container" style={{ backgroundColor: '#f0f0f0', padding: '10px', marginTop: '20px', transform: 'scale(0.7)', transformOrigin: 'top left' }}>
          <h4 style={{ textAlign: 'left' }}>Rechnungsinformationen:</h4>
          <form onSubmit={handleSubmit} className="payment-form">
            <div className="form-group">
              <label htmlFor="firstName">Vorname:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={customerData.firstName}
                onChange={handleChange}
                required
                className="small-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Nachname:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={customerData.lastName}
                onChange={handleChange}
                required
                className="small-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="street">Straße:</label>
              <input
                type="text"
                id="street"
                name="street"
                value={customerData.street}
                onChange={handleChange}
                required
                className="small-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefon:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={customerData.phone}
                onChange={handleChange}
                required
                className="small-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-Mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={customerData.email}
                onChange={handleChange}
                required
                className="small-input"
              />
            </div>
            <button type="submit" className="submit-button">Bestellung abschicken</button>
          </form>
        </div>
        <div className="paypal-button-container">
          <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID, "currency": "EUR" }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: totalCost // Übergibt die rabattierte Summe an PayPal
                    }
                  }]
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  alert("Transaction completed by " + details.payer.name.given_name);
                });
              }}
            />
          </PayPalScriptProvider>
        </div>
      </main>
    </div>
  );
}

export default Zahlung;
