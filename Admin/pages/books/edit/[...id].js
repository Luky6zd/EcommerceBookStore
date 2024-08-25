import BookForm from "@/components/BookForm";
import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditBookPage() {
    //fetch book id
    const [bookInfo, setBookInfo] = useState(null);
    const router = useRouter();
    const {id} = router.query;
    
   
    //console.log({router});

    useEffect(() => {
        if (!id) {
            return;
        }

        axios.get('/api/books?id='+ id).then(response => {
            setBookInfo(response.data);
        });
    }, [id]);

    return (
        <Layout>
             <h1>Edit book</h1>
             {bookInfo && (
                <BookForm {...bookInfo} />
             )}
        </Layout>
    );
}