//No need for useState
import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(typeof e);

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");

    //for every single form data item

    for (let [key, value] of formData.entries()) {
      console.log({ key, value });
    }

    console.log(email);
  };

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

export default App;
