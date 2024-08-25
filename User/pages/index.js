import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewBooks from "@/components/NewBooks";
import { mongooseConnect } from "@/lib/mongoose";
import { Book } from "@/models/Book";

// display home page
export default function HomePage({featuredBook, newBooks}) {
  //console.log(book);
  //console.log({newBooks});

  // components displayed in home page
  return(
    <div>
      <Header />
      <Featured book={featuredBook} />
      <NewBooks books={newBooks} />
    </div>
  );
}

// get new books from server side props
export async function getServerSideProps() {
  const featuredBookId = '6677f1f8d2a01e9f78db656d';

  await mongooseConnect();
  
  const featuredBook = await Book.findById(featuredBookId);
  const newBooks = await Book.find({}, null, {sort: {'_id': -1}, limit: 10});

  // return latest products
  return {
    props: {
      featuredBook: JSON.parse(JSON.stringify(featuredBook)),
      newBooks: JSON.parse(JSON.stringify(newBooks)),
    },
  };
}

