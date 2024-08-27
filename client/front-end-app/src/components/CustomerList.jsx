import "./CustomerList.css"

const CustomerList = ({ customers, setCustomer }) => {
  return (
    <div className="CustomerList"
    >
      <h3>Customer List</h3>
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
              <tr onClick={() => setCustomer(cust)} key={id}>
                <td>{cust.name}</td>
                <td>{cust.email}</td>
                <td>{cust.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
