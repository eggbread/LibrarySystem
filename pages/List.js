import {ListGroup} from 'react-bootstrap'
import Layout from "../components/Layout"

const list = (props) => {
return(
    <Layout>
        <ListGroup>
            <ListGroup.Item>
                Hello{props.name}
            </ListGroup.Item>
        </ListGroup>
    </Layout>
)
}
export default list;
