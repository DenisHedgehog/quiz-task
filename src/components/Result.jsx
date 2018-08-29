import React from 'react';
import styled from 'styled-components';
import BoldText from './BoldText.jsx';

const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.lightColor};
`;

const Header = styled.h1`
    color: ${({ theme }) => theme.midColor};
`;

const Scoreboard = styled.p`
    width: 300px;
    padding: 16px;
    text-align: center;
    background-color: ${({ theme }) => theme.defaultColor};
    box-shadow: ${({ theme }) => theme.shadow};
    font-size: 24px;
`;

const Result = ({ score, questionCount }) => (
    <ResultWrapper>
        <Header>Great job!</Header>
        <Scoreboard>
            You guessed <BoldText>{score}</BoldText> of <BoldText>{questionCount}</BoldText>!
        </Scoreboard>
    </ResultWrapper>
)

export default Result;