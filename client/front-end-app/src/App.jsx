import CustomerList from "./components/CustomerList";
import CustomerForm from "./components/CustomerForm";
import data from "./mock_data/data.json";
import { useState } from "react";
function App() {
  const [customer, setCustomer] = useState(undefined);
  const [customers, setCustomers] = useState(data);
  return (
    <>
      <CustomerList customers={customers} setCustomer={setCustomer} />
      <CustomerForm customer={customer} />
    </>
  );
}

export default App;
