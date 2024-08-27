import { useEffect, useState } from "react";

const CustomerForm = ({ formData }) => {
  console.log({ formData });
  const [name, setName] = useState(formData?.name);
  const [email, setEmail] = useState(formData?.email);
  const [password, setPassword] = useState(formData?.password);

  useEffect(() => {
    setName(formData?.name);
    setEmail(formData?.email);
    setPassword(formData?.password);
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  return (
    <div
    >
      <h3>Add</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" controlId="Name">
          <label>Name</label>
          <input
            placeholder="Enter name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3" controlId="Email">
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3" controlId="Password">
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button variant="primary" type="submit">
            Submit
          </button>
          <button variant="primary" type="submit">
            Delete
          </button>
          <button variant="primary" type="submit">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
