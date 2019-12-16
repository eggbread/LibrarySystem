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
import Layout from "../components/Layout";
import useData from "./hooks/headerHook";

const Admin = () => {
  const [SI, dispatchSI] = useData("signin");
  return (
    <Layout>
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
      </Form>
    </Layout>
  );
};

export default Admin;
