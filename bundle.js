import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your email subscription logic here
    console.log('Subscribed:', email);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="container">
      <h2>Email Subscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">Subscribe</button>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

