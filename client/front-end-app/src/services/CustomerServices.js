export const getCustomers = async () => {
  const response = await fetch("http://localhost:4000/customers");
  return response;
};

export const addCustomer = async(customer) => {
  const response = await fetch("http://localhost:4000/customers", {
    method: "POST",
    body: customer
  })
  return response;
}

export const updateCustomer = async(id, customer) => {
  const response = await fetch(`http://localhost:4000/customers/${id}`, {
    method: "PUT",
    body: customer
  })
  return response
}

export const deleteCustomer = async(id) => {
  const response = await fetch(`http://localhost:4000/customers/${id}`, {
    method: "DELETE",
  })
}
