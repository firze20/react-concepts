import { useState } from 'react'
import './App.css'

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    
    const email = formData.get('email');

    console.log(email)

  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName" //Important
          placeholder="First Name"
        />
        <br />
        <input
          type="email"
          name="email" //Important
          placeholder="Email Adress"
        />
        <br />
        <input
          type="tel"
          name="phone" //Important
          placeholder="Phone Number"
        />
        <br />
        <input
          name="company" //Important
          placeholder="Company Name"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App
