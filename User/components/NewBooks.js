import styled from "styled-components";
import Center from "./Center";
import BooksGrid from "./BooksGrid";

const Title = styled.h2`
 font-size: 2rem;
 margin: 30px 0 20px;
 font-weight: normal;
`;

// passed from index
export default function NewBooks({books}) {
    
    return (
        <Center>
            <Title>New Books</Title>
            <BooksGrid books={books} />
        </Center>
    );
}