import React from 'react';
import styled from 'styled-components';

const StyledPicture = styled.img`
    padding: 8px;
    width: 50vh;

    @media (max-width: 800px) {
        width: 70vw;
    }

    @media (max-width: 500px) {
        width: 90vw;
    }
`;

const Picture = ({img}) => <StyledPicture src={img} alt=""/>

export default Picture;