import CustomerList from "./components/CustomerList";
import CustomerForm from "./components/CustomerForm";
import CustomerServices from "./services/CustomerServices";
import { useEffect, useState } from "react";

import "./App.css"
const { getCustomers } = CustomerServices;

function App() {
  const [selectedCustomer, setSelectedCustomer] = useState();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers()
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);
  return (
    <div className="centered">
      <CustomerList
        customers={customers}
        setSelectedCustomer={setSelectedCustomer}
        selectedCustomer={selectedCustomer}
      />
      <CustomerForm
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
        setCustomers={setCustomers}
      />
    </div>
  );
}

export default App;
