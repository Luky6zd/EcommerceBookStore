import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function DeleteBookPage() {
    const router = useRouter();
    const [bookInfo, setBookInfo] = useState();
    const {id} = router.query;
    
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/api/books?id='+ id).then(response => {
            setBookInfo(response.data);
        });
    }, [id]);

    function goToBooks() {
        router.push('/books');
    }

    async function deleteBook() {
       await axios.delete('/api/books?id='+ id);
       goToBooks();
    }

    return (
        <Layout>
            <h1 className="text-center">Do you want to delete&nbsp;{bookInfo?.title}?</h1>

            <div className="flex gap-3 justify-center">
                <button onClick={deleteBook} 
                        className="btn-red">Yes</button>

                <button onClick={goToBooks} 
                        className="btn-gray">No</button>
            </div>
        </Layout>
    );
}