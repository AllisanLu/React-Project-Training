import CustomerList from "./components/CustomerList";
import CustomerForm from "./components/CustomerForm";
import { getCustomers } from "./services/CustomerServices";
import { useEffect, useState } from "react";
function App() {
  const [selectedCustomer, setSelectedCustomer] = useState();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers()
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);
  return (
    <>
      <CustomerList
        customers={customers}
        setSelectedCustomer={setSelectedCustomer}
        selectedCustomer={selectedCustomer}
      />
      <CustomerForm
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
      />
    </>
  );
}

export default App;
