import React from 'react';
const ContactUsForm = ({ handleSubmit, handleChange, form }) => {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label>
            Your Name
            <input
              className="input"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Your Email
            <input
              className="input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Message
            <textarea
              className="textArea"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </>
    );
  };

  export default ContactUsForm;