import CustomerList from "./components/CustomerList";
import CustomerForm from "./components/CustomerForm";
import data from "./mock_data/data.json";
import { useEffect, useState } from "react";
function App() {
  const [customer, setCustomer] = useState(undefined);
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    const response = await fetch("http://localhost:4000/customers");
    return response;
  };

  useEffect(() => {
    getCustomers()
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);
  return (
    <>
      <CustomerList customers={customers} setCustomer={setCustomer} />
      <CustomerForm customer={customer} />
    </>
  );
}

export default App;
