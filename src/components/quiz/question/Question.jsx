import React from 'react';
import styled from 'styled-components';
import mainTheme from '../../../constants/mainTheme.js'
import screenSize from '../../../constants/screenSize.js';

const StyledPicture = styled.img`
    padding: 8px;
    width: 50vh;

    @media (max-width: ${screenSize.TABLET}) {
        width: 70vw;
    }

    @media (max-width: ${screenSize.MOBILE}) {
        width: 90vw;
    }
`;

const StyledHeader = styled.h1`
    color: ${mainTheme.mid_color};
`;

const Question = ({ question: { question, img } }) => (
    <React.Fragment>
        <StyledHeader>{question}</StyledHeader>
        {img.length > 0 && <StyledPicture src={img} alt=""/>}
    </React.Fragment>
)

export default Question;