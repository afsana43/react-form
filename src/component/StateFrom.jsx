import { useState } from "react";

const StateFrom = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const stateFormHandler = (e) => {
    e.preventDefault();
    // error show
    if (error.length < 6) {
      setError("Passord must be 6 character");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };

  // on change for inputs filed from

  const eventNameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  // on change for inputs filed from

  const eventEmailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  // on change for inputs filed from

  const eventPasswordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={stateFormHandler}>
        <input onChange={eventNameHandler} type="text" name="name" /> <br />
        <input onChange={eventEmailHandler} type="text" name="email" /> <br />
        <input
          onChange={eventPasswordHandler}
          type="password"
          name="password"
          required
        />{" "}
        <br />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StateFrom;
