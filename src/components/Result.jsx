import React from 'react';
import styled from 'styled-components';
import BoldText from './BoldText.jsx';
import mainTheme from '../constants/mainTheme.js';

const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${mainTheme.light_color};
`;

const StyledHeader = styled.h1`
    color: ${mainTheme.mid_color};
`;

const StyledScoreboard = styled.div`
    width: 300px;
    padding: 16px;
    text-align: center;
    background-color: ${mainTheme.default_color};
    box-shadow: ${mainTheme.shadow};
    font-size: 24px;
`;

const Result = ({ score, questionCount }) => (
    <ResultWrapper>
        <StyledHeader>Great job!</StyledHeader>
        <StyledScoreboard>
            <p>
                You guessed <BoldText>{score}</BoldText> of <BoldText>{questionCount}</BoldText>!
            </p>
        </StyledScoreboard>
    </ResultWrapper>
)

export default Result;