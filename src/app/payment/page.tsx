// pages/rental-form.js
"use client";

// pages/rental-form.js
import React, { useState } from 'react';


const RentalForm = () => {
  const [billingInfo, setBillingInfo] = useState({ name: '', phone: '', address: '', city: '' });
  const [rentalInfo, setRentalInfo] = useState({ type: 'Pick-Up', location: '', date: '', time: '' });
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [confirmation, setConfirmation] = useState({ marketing: false, terms: false });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, setState: React.Dispatch<React.SetStateAction<any>>) => {
    const { name, value } = e.target;
    setState((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setConfirmation((prev: any) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ billingInfo, rentalInfo, paymentMethod, confirmation });
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Billing Info</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={billingInfo.name}
          onChange={(e) => handleInputChange(e, setBillingInfo)}
          style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          value={billingInfo.phone}
          onChange={(e) => handleInputChange(e, setBillingInfo)}
          style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
      </div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input
          type="text"
          name="address"
          placeholder="Your Address"
          value={billingInfo.address}
          onChange={(e) => handleInputChange(e, setBillingInfo)}
          style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        <input
          type="text"
          name="city"
          placeholder="Your City"
          value={billingInfo.city}
          onChange={(e) => handleInputChange(e, setBillingInfo)}
          style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
      </div>

      <h2>Rental Info</h2>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ marginRight: '10px' }}>
          <input
            type="radio"
            name="type"
            value="Pick-Up"
            checked={rentalInfo.type === 'Pick-Up'}
            onChange={(e) => handleInputChange(e, setRentalInfo)}
          />
          Pick-Up
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="Drop-Off"
            checked={rentalInfo.type === 'Drop-Off'}
            onChange={(e) => handleInputChange(e, setRentalInfo)}
          />
          Drop-Off
        </label>
      </div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <select
          name="location"
          value={rentalInfo.location}
          onChange={(e) => handleInputChange(e, setRentalInfo)}
          style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
        >
          <option value="">Select Your City</option>
          <option value="City1">City1</option>
          <option value="City2">City2</option>
          <option value="City3">City3</option>
        </select>
        <input
          type="date"
          name="date"
          value={rentalInfo.date}
          onChange={(e) => handleInputChange(e, setRentalInfo)}
          style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        <input
          type="time"
          name="time"
          value={rentalInfo.time}
          onChange={(e) => handleInputChange(e, setRentalInfo)}
          style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
      </div>

      <h2>Payment Method</h2>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="radio"
            name="paymentMethod"
            value="Credit Card"
            checked={paymentMethod === 'Credit Card'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaymentMethod(e.target.value)}
          />
          <img src="/visa.jpg" alt="Credit Card" width="92" height="24" /> Credit Card
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="radio"
            name="paymentMethod"
            value="PayPal"
            checked={paymentMethod === 'PayPal'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaymentMethod(e.target.value)}
          />
          <img src="/papal.jpeg" alt="PayPal" width="92" height="24" /> PayPal
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="radio"
            name="paymentMethod"
            value="Bitcoin"
            checked={paymentMethod === 'Bitcoin'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaymentMethod(e.target.value)}
          />
          <img src="/bit.png" alt="Bitcoin" width="92" height="24" /> Bitcoin
        </label>
      </div>

      <h2>Confirmation</h2>
      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            type="checkbox"
            name="marketing"
            checked={confirmation.marketing}
            onChange={handleCheckboxChange}
          />
          I agree with sending marketing and newsletter emails. No spam, promised!
        </label>
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={confirmation.terms}
            onChange={handleCheckboxChange}
          />
          I agree with the terms and conditions and privacy policy.
        </label>
      </div>

      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Rent Now</button>

      <div style={{ marginTop: '20px' }}>
        <h2>Rental Summary</h2>
        <p>Car: Nissan GT - R</p>
        <p>Subtotal: $80.00</p>
        <p>Tax: $0.00</p>
        <p>Total: $80.00</p>
      </div>
    </form>
    
  );
};

export default RentalForm;
