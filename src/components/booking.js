// src/components/Booking.js
import React, { useState } from 'react';

const Booking = () => {
  const [form, setForm] = useState({ name: '', email: '', service: '', date: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to backend
    const response = await fetch('/api/book-appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const data = await response.text();
    alert(data);
  };

  return (
    <div>
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Service:
          <input type="text" name="service" value={form.service} onChange={handleChange} />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={form.date} onChange={handleChange} />
        </label>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default Booking;
