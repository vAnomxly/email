import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function App() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // Perform any necessary logic with the email
    console.log('Submitted email:', email);
    // Reset the form
    e.target.reset();
    // Set subscribed state to true
    setSubscribed(true);
  };

  return (
    <div className="container">
      <h2>Email Subscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required className="input-field" />
        </div>
        <button type="submit" className="button">Subscribe</button>
      </form>
      {subscribed && (
        <div className="alert">Subscribed!</div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
