import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const CustomerForm = () => {
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        borderStyle: "solid",
        width: "30%",
        margin: 10,
        padding: 10,
      }}
    >
      <h3>Add</h3>
      <Form
        onSubmit={() => {
          console.log("Hello");
        }}
      >
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" type="submit">
            Delete
          </Button>
          <Button variant="primary" type="submit">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CustomerForm;
