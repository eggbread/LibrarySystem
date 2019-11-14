import { ListGroup, Table } from "react-bootstrap";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";

const list = () => {
  const router = useRouter();
  const data = [
    {
      title: "Introduce of DataBase",
      author: "Gyeongmin",
      company: "CNU",
      ISBN: "978-89-5653-008-6.",
      use:false
    },
    {
      title: "Introduce of Web",
      author: "Gyeongmin",
      company: "CNU",
      ISBN: "978-89-5653-008-6.",
      use:true
    }
  ];
  return (
    <Layout>
      <h3>Result of {router.query.bookName}</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Company</th>
            <th>ISBN</th>
            <th>Available</th>
          </tr>
        </thead>
        {data.map(data => (
          <Link href={`/book?bookName=${data.title}`}>
            <tr>
              <td>{data.title}</td>
              <td>{data.author}</td>
              <td>{data.company}</td>
              <td>{data.ISBN}</td>
              <td>{data.use?"Available":"Unavailable"}</td>
            </tr>
          </Link>
        ))}
      </Table>
    </Layout>
  );
};
export default list;
