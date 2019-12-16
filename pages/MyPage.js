import {
    Button,
    Navbar,
    Image,
    InputGroup,
    Nav,
    Form,
    Modal,
    Col
  } from "react-bootstrap";

const MyPage = (props) => {

    return(
        <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>My Page</Modal.Title>
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
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={async ref => {
            //   if (SI.userId && SI.userPw) {
            //     await SignIn(SI.userId, SI.userPw);
            //   }
              props.onHide
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default MyPage;