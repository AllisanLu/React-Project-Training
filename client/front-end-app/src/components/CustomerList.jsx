const CustomerList = ({ data, onCustomerClick }) => {
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
      <table style={{ width: "99%" }}>
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
              <tr onClick={() => onCustomerClick(cust)} key={id}>
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
