import { ListGroup } from "react-bootstrap";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Link from 'next/link'

const list = () => {
  const router = useRouter();
  return (
    <Layout>
      <h3>Result of {router.query.bookName}</h3>
      <ListGroup>
        <ListGroup.Item>List of {router.query.bookName}</ListGroup.Item>
      </ListGroup>
    </Layout>
  );
};
export default list;
