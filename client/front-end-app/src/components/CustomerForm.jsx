/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./CustomerForm.css";

const CustomerForm = ({ selectedCustomer, setSelectedCustomer }) => {
  const [customer, setCustomer] = useState(() => selectedCustomer);
  useEffect(() => {
    if (selectedCustomer) setCustomer(selectedCustomer);
    else setCustomer({ name: "", email: "", password: "" });
  }, [selectedCustomer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedCustomer);
  };

  const handleCancel = () => {
    setCustomer({ name: "", email: "", password: "" });
    setSelectedCustomer();
  };
  return (
    <div className="CustomerForm">
      <h3>Add</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 form-group" controlId="Name">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Enter name"
            value={customer?.name}
            className="form-control"
            onChange={(e) => {
              setCustomer({ ...customer, name: e.target.value });
            }}
          />
        </div>
        <div className="mb-3 form-group" controlId="Email">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={customer?.email}
            placeholder="Enter email"
            className="form-control"
            onChange={(e) => {
              setCustomer({ ...customer, email: e.target.value });
            }}
          />
        </div>
        <div className="mb-3 form-group" controlId="Password">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={customer?.password}
            placeholder="Password"
            className="form-control"
            onChange={(e) => {
              setCustomer({ ...customer, password: e.target.value });
            }}
          />
        </div>
        <div className="button-group">
          <button className="btn btn-success">Submit</button>
          <button className="btn btn-danger">Delete</button>
          <button className="btn btn-warning" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
