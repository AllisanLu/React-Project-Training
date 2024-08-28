/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CustomerServices from "../services/CustomerServices";
import "./CustomerForm.css";

const { getCustomers, addCustomer, deleteCustomer, updateCustomer } =
  CustomerServices;
const CustomerForm = ({
  selectedCustomer,
  setSelectedCustomer,
  setCustomers,
}) => {
  const [customer, setCustomer] = useState(() => selectedCustomer);
  useEffect(() => {
    if (selectedCustomer) setCustomer(selectedCustomer);
    else setCustomer({ name: "", email: "", password: "" });
  }, [selectedCustomer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedCustomer) await updateCustomer(customer._id, customer);
    else {
      try {
        await addCustomer(customer);
      } catch (e) {
        if (e === 409) window.alert("User already exists");
        else window.alert("Something went wrong");
      }
    }

    setCustomer({ name: "", email: "", password: "" });
    setSelectedCustomer();

    getCustomers()
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  };

  const resetState = () => {
    setCustomer({ name: "", email: "", password: "" });
    setSelectedCustomer();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    resetState();
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteCustomer(customer._id);
    getCustomers()
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data), resetState();
      });
  };
  return (
    <div className="CustomerForm">
      <form>
        {selectedCustomer ? (
          <h3>Update {selectedCustomer.name}</h3>
        ) : (
          <h3>Add</h3>
        )}
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
          <button className="btn btn-success" onClick={handleSubmit}>
            Submit
          </button>
          {selectedCustomer ? (
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          ) : null}
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
