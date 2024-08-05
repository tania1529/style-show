// src/components/Contact.js
import React, { useState } from 'react';

import "./contact.scss";
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/send-email', {
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
    <div className='ui-contact
    '>
        <h1>Style Show</h1>
          <p>123 Beauty Lane, Glamour City</p>
          <p>Call Us : (123) 456-7890</p>
          <p>Email: info@styleshow.com</p>
          <p>HOURS: MON - FRI 9am - 6pm, SAT 10am - 4pm</p>
      
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input className='input' type="text" name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input className='input' type="email" name="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Message:
          <textarea className='textArea' name="message" value={form.message} onChange={handleChange} />
        </label>
        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
