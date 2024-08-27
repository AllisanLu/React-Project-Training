/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import './CustomerForm.css';

const CustomerForm = ({ formData }) => {
  console.log({ formData });
  const [name, setName] = useState(formData?.name);
  const [email, setEmail] = useState(formData?.email);
  const [password, setPassword] = useState(formData?.password);

const CustomerForm = ({ customer: custFromProps }) => {
  const [customer, setCustomer] = useState(() => custFromProps)
  useEffect(() => {
    setCustomer(custFromProps)
  }, [custFromProps]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(customer);
  };
  return (
    <div className="CustomerForm">
      <h3>Add</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" controlId="Name">
          <label>Name</label>
          <input
            placeholder="Enter name"
            value={customer?.name}
            onChange={(e) => {
              setCustomer({ ...customer, name: e.target.value });
            }}
          />
        </div>
        <div className="mb-3" controlId="Email">
          <label>Email</label>
          <input
            type="email"
            value={customer?.email}
            placeholder="Enter email"
            onChange={(e) => {
              setCustomer({ ...customer, email: e.target.value });
            }}
          />
        </div>
        <div className="mb-3" controlId="Password">
          <label>Password</label>
          <input
            type="password"
            value={customer?.password}
            placeholder="Password"
            onChange={(e) => {
              setCustomer({ ...customer, password: e.target.value });
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
