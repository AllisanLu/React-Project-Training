/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './CustomerForm.css';

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
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Enter name"
            value={customer?.name}
            onChange={(e) => {
              setCustomer({ ...customer, name: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={customer?.email}
            placeholder="Enter email"
            onChange={(e) => {
              setCustomer({ ...customer, email: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={customer?.password}
            placeholder="Password"
            onChange={(e) => {
              setCustomer({ ...customer, password: e.target.value });
            }}
          />
        </Form.Group>
        <div id="buttonGroup">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" type="submit">
            Delete
          </Button>
          <Button variant="primary" type="submit">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CustomerForm;
