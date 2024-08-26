import CustomerList from "./components/CustomerList";
import CustomerForm from "./components/CustomerForm";
import data from "./mock_data/data.json";
import { useState } from "react";
function App() {
  const [custData, setCustData] = useState({});
  const handleCustomer = (id) => {
    console.log(id);
    setCustData(data.find((data) => data._id === id));
    console.log(custData.name);
  };
  return (
    <>
      <CustomerList data={data} onCustomerClick={handleCustomer} />
      <CustomerForm formData={custData} />
    </>
  );
}

export default App;
