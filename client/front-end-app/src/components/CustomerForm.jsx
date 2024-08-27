/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./CustomerForm.css";

const CustomerForm = ({ customer: custFromProps }) => {
  const [customer, setCustomer] = useState(() => custFromProps);
  useEffect(() => {
    setCustomer(custFromProps);
  }, [custFromProps]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(customer);
  };
  return (
    <div className="CustomerForm">
      <h3>Add</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 form-group" controlId="Name">
          <label for="name">Name</label>
          <input
            id="name"
            placeholder="Enter name"
            value={customer?.name}
            class="form-control"
            onChange={(e) => {
              setCustomer({ ...customer, name: e.target.value });
            }}
          />
        </div>
        <div className="mb-3 form-group" controlId="Email">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            value={customer?.email}
            placeholder="Enter email"
            class="form-control"
            onChange={(e) => {
              setCustomer({ ...customer, email: e.target.value });
            }}
          />
        </div>
        <div className="mb-3 form-group" controlId="Password">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            value={customer?.password}
            placeholder="Password"
            class="form-control"
            onChange={(e) => {
              setCustomer({ ...customer, password: e.target.value });
            }}
          />
        </div>
        <div className="button-group">
          <button className="btn btn-success" type="submit">
            Submit
          </button>
          <button className="btn btn-danger" type="submit">
            Delete
          </button>
          <button className="btn btn-primary" type="submit">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
