import { Button, Navbar, Image, Nav, Form, Modal, Col } from "react-bootstrap";
import { useState, useReducer,useRef } from "react";
import useData from "./hooks/headerHook";
import axios from "axios";

const Header = () => {
  const [modal, dispatchModal] = useData("modal");
  const [SI, dispatchSI] = useData("signin");
  const [isLogin, setLogin] = useData("isLogin");
  const SignIn = async (userId, userPw) => {
    var check = await axios.post("http://localhost:4000/signin", {
      userId: userId,
      userPw: userPw
    });
    if (check.data) {
      setLogin(check.data);
    }
  };
  var loginBtn;
  if (!isLogin) {
    loginBtn = (
      <Form>
        <Button
          style={{ margin: "0 10px" }}
          variant="dark"
          onClick={() => dispatchModal("openSI")}
        >
          Sign in
        </Button>
        <Button variant="dark" onClick={() => dispatchModal("openSU")}>
          Sign up
        </Button>
      </Form>
    );
  } else {
    loginBtn = (
      <Form>
        <Form.Label style={{color:"white"}}>
        {isLogin}
        </Form.Label>
        <Button variant="dark" onClick={()=>setLogin(false)}>
          Log out
        </Button>
      </Form>
    );
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">CNU Library</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">about</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
        {loginBtn}
      </Navbar>

      <Modal show={modal.showSI} onHide={() => dispatchModal("hideSI")}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ID"
                onInput={ref =>
                  dispatchSI({ type: "setId", userId: ref.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onInput={ref =>
                  dispatchSI({ type: "setPw", userPw: ref.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatchModal("hideSI")}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={async ref => {
              if (SI.userId && SI.userPw) {
                await SignIn(SI.userId,SI.userPw);
              }
              dispatchModal("hideSI");
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modal.showSU} onHide={() => dispatchModal("hideSU")}>
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
                <Form.Control type="phone" placeholder="Phone" />
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
          <Button variant="secondary" onClick={() => dispatchModal("hideSU")}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => dispatchModal("hideSU")}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Header;
