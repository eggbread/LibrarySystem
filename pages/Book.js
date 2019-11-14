import Layout from "../components/Layout"
import { useRouter } from "next/router";

const Book=()=>{
    const router = useRouter();
    return(
        <Layout>
            {router.query.bookName}
        </Layout>        
    )
}

export default Book;