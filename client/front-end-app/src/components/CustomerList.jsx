import { useState } from "react";
import "./CustomerList.css";

const CustomerList = ({ customers, selectedCustomer, setSelectedCustomer }) => {
  const handleSelectedCustomer = (cust) => {
    if (cust?._id === selectedCustomer?._id) setSelectedCustomer();
    else setSelectedCustomer(cust);
  };
  return (
    <div className="CustomerList">
      <h3>Customers</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Pass</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cust, id) => {
              return (
                <tr
                  onClick={() => handleSelectedCustomer(cust)}
                  className={
                    selectedCustomer?._id === cust?._id
                      ? "selected-customer"
                      : null
                  }
                  key={id}
                >
                  <td>{cust.name}</td>
                  <td>{cust.email}</td>
                  <td>{cust.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
