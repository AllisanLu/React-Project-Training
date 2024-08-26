import CustomerList from "./components/CustomerList";
import CustomerForm from "./components/CustomerForm";
import data from "./mock_data/data.json";
import { useState } from "react";
function App() {
  const [custData, setCustData] = useState(undefined);
  const handleCustomer = (cust) => {
    setCustData(cust);
  };
  return (
    <>
      <CustomerList data={data} onCustomerClick={handleCustomer} />
      <CustomerForm formData={custData} />
    </>
  );
}

export default App;
