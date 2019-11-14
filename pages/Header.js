import { Button, Navbar, Image, Nav, Form, Modal,Col } from "react-bootstrap";
import { useState } from "react";

const Header = () => {
  const [showSI, setShowSI] = useState(false);
  const [showSU, setShowSU] = useState(false);
  const handleCloseSI = () => setShowSI(false);
  const handleShowSI = () => setShowSI(true);
  const handleCloseSU = () => setShowSU(false);
  const handleShowSU = () => setShowSU(true);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">CNU Library</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">about</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
        <Form>
          <Button
            style={{ margin: "0 10px" }}
            variant="dark"
            onClick={handleShowSI}
          >
            Sign in
          </Button>
          <Button variant="dark" onClick={handleShowSU}>
            Sign up
          </Button>
        </Form>
      </Navbar>

      <Modal show={showSI} onHide={handleCloseSI}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control type="email" placeholder="Enter ID" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSI}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleCloseSI}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSU} onHide={handleCloseSU}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridID">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" placeholder="Enter ID" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Name" />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Row>

              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Phone"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridJob">
                <Form.Label>Job</Form.Label>
                <Form.Control as="select">
                  <option>Bachelor</option>
                  <option>Master</option>
                  <option>Staff</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSU}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleCloseSU}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Header;
