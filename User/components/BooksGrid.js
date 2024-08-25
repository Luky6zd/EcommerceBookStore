import styled from "styled-components";
import BookBox from "./BookBox";

// 4 books in each row
const StyledBooksGrid = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 gap: 20px;
 @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
 }
`;

// get books
export default function BooksGrid({books}) {
    
    return (
        <StyledBooksGrid>
            {books?.length > 0 && books.map(book => (
                // looping through books and printing book box with book
                <BookBox key={book._id} {...book} />
            ))}
        </StyledBooksGrid>
    );
}