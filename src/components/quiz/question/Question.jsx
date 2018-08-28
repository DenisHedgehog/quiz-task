import React from 'react';
import styled from 'styled-components';
import screenSize from '../../../constants/screenSize.js';

const Picture = styled.img`
    padding: 8px;
    width: 50vh;

    @media (max-width: ${screenSize.TABLET}) {
        width: 70vw;
    }

    @media (max-width: ${screenSize.MOBILE}) {
        width: 90vw;
    }
`;

const Header = styled.h1`
    color: ${({theme}) => theme.midColor};
`;

const Question = ({ question: { question, img } }) => (
    <React.Fragment>
        <Header>{question}</Header>
        {img.length > 0 && <Picture src={img} alt=""/>}
    </React.Fragment>
)

export default Question;