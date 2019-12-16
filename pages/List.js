import { ListGroup, Table,Button } from "react-bootstrap";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Search from "../components/Search"

const list = ({
  url: {
    query: { bookName }
  }
}) => {
  const isReceiveList = useRef(false);
  const [listData, setListData] = useState([]);
  
  useEffect(() => {
    if (!isReceiveList.current) {
      axios
        .get("http://localhost:4000/list", {
          params: {
            bookName: bookName
          }
        })
        .then(res => {
          setListData(res.data);
          isReceiveList.current=true;
        });
    }
  },[]);
  const router = useRouter();

  return (
    <Layout>
      <Search style={{ margin : "5px 5px" }}/>
      <h3>Result of {router.query.bookName}</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Company</th>
            <th>ISBN</th>
            <th>Available</th>
            <th>Borrow / Reservation</th>
          </tr>
        </thead>
        {listData.map(data => (
          <Link href={`/book?bookName=${data.title}`}>
            <tr>
              <td>{data.title}</td>
              <td>{data.author}</td>
              <td>{data.company}</td>
              <td>{data.ISBN}</td>
              <td>{data.use ? "Available" : "Unavailable"}</td>
              <td><Button variant="outline-dark">Yes</Button><Button variant="outline-dark">No</Button></td>
            </tr>
          </Link>
        ))}
      </Table>
    </Layout>
  );
};
export default list;
