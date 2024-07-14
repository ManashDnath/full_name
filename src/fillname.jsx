import { useState } from "react";

function Fullname() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();

  const [submit, setSubmit] = useState(false);

  const handleSubmit = (event) => {
    setSubmit(true);

    event.preventDefault();
  };

  const handlefirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handlelastname = (e) => {
    setLastname(e.target.value);
  };

  return (
    <div>
      <h3>Full Name Display</h3>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="fname" onChange={handlefirstname} required />
        <div>
          <label>Last Name:</label>
          <input type="text" name="lname" onChange={handlelastname} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submit ? (
        <div>
          <p>
            Full Name:
            <span>{`${" "}` + firstname + `${" "}` + lastname}</span>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Fullname;
