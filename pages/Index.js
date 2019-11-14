import { InputGroup, FormControl, Button } from "react-bootstrap";
import Link from "next/link";
import Layout from "../components/Layout"
import {useState} from 'react'
const Index = () => {
  const [bookName,setBookName] = useState('');

return(
  <Layout>
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Please insert book name"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={(name)=>{
          console.log(name)
          setBookName(name)
        }}
      />
      <InputGroup.Append>
        <Link href="/list" name={bookName}>
          <Button variant="outline-secondary">Search</Button>
        </Link>
        <Link>
          <Button variant="outline-secondary">Sign in</Button>
        </Link>
        <Link>
          <Button variant="outline-secondary">Sign up</Button>
        </Link>
      </InputGroup.Append>
    </InputGroup>
  </Layout>
);
}
// import Link from 'next/link';

// const Index = () => (
//   <div>
//     <Link href="/about">
//       <a>About Page</a>
//     </Link>
//     <p>Hello Next.js</p>
//   </div>
// );

export default Index;
