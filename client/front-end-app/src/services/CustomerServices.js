export const getCustomers = async () => {
  const response = await fetch("http://localhost:4000/customers");
  return response;
};

export const addCustomer = async(customer) => {
  console.log(customer);
  const response = await fetch("http://localhost:4000/customers", {
    headers: {"Content-Type": "application/json"},
    method: "POST",
    body: JSON.stringify(customer)
  })
  return response;
}

export const updateCustomer = async(id, customer) => {
  const response = await fetch(`http://localhost:4000/customers/${id}`, {
    headers: {"Content-Type": "application/json"},
    method: "PUT",
    body: JSON.stringify(customer)
  })
  return response
}

export const deleteCustomer = async(id) => {
  const response = await fetch(`http://localhost:4000/customers/${id}`, {
    method: "DELETE",
  })
}
