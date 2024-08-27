import CustomerList from "./components/CustomerList";
import CustomerForm from "./components/CustomerForm";
import { getCustomers } from "./services/CustomerServices";
import { useEffect, useState } from "react";
function App() {
  const [customer, setCustomer] = useState(undefined);
  const [customers, setCustomers] = useState([]);

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
