import { useState } from "react";
import styled from "styled-components";

const Image = styled.img`
max-width: 100%;
max-height: 100%;
`;

const ImageButtons = styled.div`
display: flex;
gap: 10px;
margin-top: 10px;
flex-grow: 0;
`;

const ImageButton = styled.div`
border: 1px solid #ccc;
${props => props.active ? `
    border-color: #ccc;` : `
    border-color: transparent;
 `}
height: 50px;
padding: 5px;
border-radius: 5px;
cursor: pointer;
`;

const BigImage = styled.img`
 max-width: 100%;
 max-height: 200px;
`;

const BigImageWrapper = styled.div`
 text-align: center;
`;

// display component
export default function BookImages({images}) {
    const [activeImage, setActiveImage] = useState(images?.[0]); 

    return (
        <>
            <BigImageWrapper>
                <BigImage src={images?.[0]} />
            </BigImageWrapper>

            <ImageButtons>
                {images.map(image => (
                    <ImageButton
                        key={image} 
                        active={image === activeImage} 
                        onClick={() => setActiveImage(image)}>

                        <Image src={image} alt="" />
                    </ImageButton>
                ))}
            </ImageButtons>
        </>
    );
}