import {
  Button,
  Navbar,
  Table,
  InputGroup,
  Nav,
  Form,
  Modal,
  Col
} from "react-bootstrap";
import { useState, useReducer, useRef } from "react";
import useData from "./hooks/headerHook";
import axios from "axios";

const Header = () => {
  const [modal, dispatchModal] = useData("modal");
  const [SI, dispatchSI] = useData("signin");
  const [SU, dispatchSU] = useData("signup");
  const [isLogin, setLogin] = useData("isLogin");
  const [validatedSU, setValidatedSU] = useState(false);
  const [validatedUD, setValidatedUD] = useState(false);
  const [userData, dispatchUserData] = useData("userdata");

  const SignIn = async (userId, userPw) => {
    var check = await axios.post("http://localhost:4000/signin", {
      userId: userId,
      userPw: userPw
    });
    if (!check.data) {
      alert("Login Fault");
    } else {
      setLogin(check.data);
    }
  };

  const handleSubmitSU = async event => {
    console.log(event.target.value);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const data = SU;
      console.log(data);
      var check = await axios.post("http://localhost:4000/signup", {
        userId: data.userId,
        userPw: data.userPw,
        userName: data.userName,
        userEmail: data.userEmail,
        userPhone: data.userPhone,
        userJob: data.userJob
      });
    }
    setValidatedSU(true);
  };
  const handleSubmitUserData = async event => {
    console.log(event.target.value);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const data = userData;
      console.log(data);
      var check = await axios.post("http://localhost:4000/mypage/fix", {
        userId: data.userId,
        userPw: data.userPw,
        userName: data.userName,
        userEmail: data.userEmail,
        userPhone: data.userPhone,
        userJob: data.userJob
      });
    }
    setValidatedUD(true);
  };

  const SignUp = async data => {
    var check = await axios.post("http://localhost:4000/signup", {
      userId: data.userId,
      userPw: data.userPw,
      userName: data.userName,
      userEmail: data.userEmail,
      userPhone: data.userPhone,
      userJob: data.userJob
    });
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
        <Form.Label style={{ color: "white" }}>{isLogin + "'s"}</Form.Label>
        <Button
          variant="dark"
          onClick={async () => {
            var check = await axios.post("http://localhost:4000/mypage", {
              // userId: data.userId,
              // userPw: data.userPw,
              // userName: data.userName,
              // userEmail: data.userEmail,
              // userPhone: data.userPhone,
              // userJob: data.userJob
            });
            if (check.data) {
              dispatchUserData({
                type: "setName",
                userName: check.data.userName
              });
              dispatchUserData({ type: "setJob", userJob: "Master" });
              dispatchUserData({
                type: "setList",
                userList: check.data.listData
              });
              dispatchModal("openMP");
            } else {
              alert("Can't find User data");
            }
          }}
        >
          My Page
        </Button>
        <Button variant="dark" onClick={() => setLogin(false)}>
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

      <Modal
        show={modal.showMP}
        onHide={() => dispatchModal("hideMP")}
        onEnter={() => {
          console.log(userData);
        }}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>My Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            noValidate
            validated={validatedUD}
            onSubmit={handleSubmitUserData}
          >
            <Form.Row>
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="ID"
                  defaultValue={userData.userName}
                  onInput={ref =>
                    dispatchUserData({
                      type: "setId",
                      userId: ref.target.value
                    })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="validationCustom02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Password"
                  defaultValue={userData.userName}
                  onInput={ref =>
                    dispatchUserData({
                      type: "setPw",
                      userPw: ref.target.value
                    })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    defaultValue={userData.userName}
                    onInput={ref =>
                      dispatchUserData({
                        type: "setName",
                        userName: ref.target.value
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom03">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  required
                  defaultValue={userData.userName}
                  onInput={ref =>
                    dispatchUserData({
                      type: "setEmail",
                      userEmail: ref.target.value
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  required
                  defaultValue={userData.userName}
                  onInput={ref =>
                    dispatchUserData({
                      type: "setPhone",
                      userPhone: ref.target.value
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Job</Form.Label>
                <Form.Control
                  as="select"
                  value={userData.userJob}
                  onChange={ref =>
                    dispatchUserData({
                      type: "setJob",
                      userJob: ref.target.value
                    })
                  }
                >
                  <option>Bachelor</option>
                  <option>Master</option>
                  <option>Staff</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <h3>My Book List</h3>
            <Table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Company</th>
                  <th>ISBN</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Return</th>
                </tr>
              </thead>
              <tbody>
                {userData.userList.map(data => (
                  <tr>
                    <td>{data.title}</td>
                    <td>{data.author}</td>
                    <td>{data.company}</td>
                    <td>{data.ISBN}</td>
                    <td>{data.startDate}</td>
                    <td>{data.endDate}</td>
                    <td>
                      <Button>Return</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h3>My Reservation</h3>
            <Table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Company</th>
                  <th>ISBN</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Return</th>
                </tr>
              </thead>
              <tbody>
                {userData.userList.map(data => (
                  <tr>
                    <td>{data.title}</td>
                    <td>{data.author}</td>
                    <td>{data.company}</td>
                    <td>{data.ISBN}</td>
                    <td>{data.startDate}</td>
                    <td>{data.endDate}</td>
                    <td>
                      <Button>Return</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button variant="danger">User Secession</Button> <br/>
            <Button variant="secondary" onClick={() => dispatchModal("hideSU")}>
              Close
            </Button>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

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
                await SignIn(SI.userId, SI.userPw);
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
          <Form noValidate validated={validatedSU} onSubmit={handleSubmitSU}>
            <Form.Row>
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="ID"
                  onInput={ref =>
                    dispatchSU({ type: "setId", userId: ref.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="validationCustom02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Password"
                  onInput={ref =>
                    dispatchSU({ type: "setPw", userPw: ref.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    onInput={ref =>
                      dispatchSU({
                        type: "setName",
                        userName: ref.target.value
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom03">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  required
                  onInput={ref =>
                    dispatchSU({
                      type: "setEmail",
                      userEmail: ref.target.value
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  required
                  onInput={ref =>
                    dispatchSU({
                      type: "setPhone",
                      userPhone: ref.target.value
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Job</Form.Label>
                <Form.Control
                  as="select"
                  onChange={ref =>
                    dispatchSU({ type: "setJob", userJob: ref.target.value })
                  }
                >
                  <option>Bachelor</option>
                  <option>Master</option>
                  <option>Staff</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Button variant="secondary" onClick={() => dispatchModal("hideSU")}>
              Close
            </Button>
            <Button type="submit">Submit form</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
export default Header;
