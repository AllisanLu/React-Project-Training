import Table from "react-bootstrap/Table";
import data from "../mock_data/data.json";
const CustomerList = () => {
  return (
    <Table striped bordered hover className="w-25">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Pass</th>
        </tr>
      </thead>
      <tbody>
        {data.map((cust, id) => {
          return (
            <tr
              onClick={() => {
                console.log(cust._id);
              }}
              key={id}
            >
              <td>{cust.name}</td>
              <td>{cust.email}</td>
              <td>{cust.password}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CustomerList;
