import {
  InputGroup,
  FormControl,
  Button,
  DropdownButton,
  Dropdown,
  ButtonGroup
} from "react-bootstrap";
import Link from "next/link";
import Layout from "../components/Layout";
import { useReducer } from "react";
const initialState={
  bookName:"",
  condition:"Condition",
}
const bookReducer=(state,action)=>{
  switch(action.type){
    case "bookName":{
      return {...state,bookName:action.bookName}
    }
    case "condition":{
      return{...state,condition:action.condition}
    }
    default:{
      throw new Error("Error")
    }
  }
}

const Index = () => {
  const [book, dispatchBook] = useReducer(bookReducer,initialState);
  console.log(book)
  return (
    <Layout>
      <div style={{ margin: "20% auto",width:"97%" }}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Please insert book name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={({ target }) => {
              console.log(target.value);
              dispatchBook({type:"bookName",bookName:target.value});
            }}
          />
          <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title={book.condition}
            onClick={evt => {
              evt.preventDefault()
              if(evt.target.text){
                dispatchBook({type:"condition",condition:evt.target.text})
              }
            }}
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">ISBN</Dropdown.Item>
            <Dropdown.Item href="#">Name</Dropdown.Item>
          </DropdownButton>
          <InputGroup.Append>
            <Link href={`/list?bookName=${book.bookName}`}>
              <Button variant="outline-secondary">Search</Button>
            </Link>
          </InputGroup.Append>
        </InputGroup>
        
      </div>
    </Layout>
  );
};

export default Index;
