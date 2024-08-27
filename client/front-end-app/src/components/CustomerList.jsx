/* eslint-disable react/prop-types */
import Table from "react-bootstrap/Table";

const CustomerList = ({ customers, setCustomer }) => {
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        borderStyle: "solid",
        width: "30%",
        margin: 10,
        padding: 10,
      }}
    >
      <h3>Customer List</h3>
      <Table striped bordered hover style={{ width: "99%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Pass</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust, id) => {
            return (
              <tr onClick={() => setCustomer(cust)} key={id}>
                <td>{cust.name}</td>
                <td>{cust.email}</td>
                <td>{cust.password}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomerList;
