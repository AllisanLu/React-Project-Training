export const getCustomers = async () => {
  const response = await fetch("http://localhost:4000/customers");
  return response;
};
