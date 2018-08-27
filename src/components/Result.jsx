import React from 'react';
import styled from 'styled-components';

const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(0, 0, 0, 0.4);
`;

const StyledHeader = styled.h1`
    color: rgba(0, 0, 0, 0.5);
`;

const StyledScoreboard = styled.div`
    width: 300px;
    padding: 16px;
    text-align: center;
    background-color: white;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    font-size: 24px;
`;

const BoldText = styled.span`
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
`;

const Result = ({score}) => (
    <ResultWrapper>
        <StyledHeader>Great job!</StyledHeader>
        <StyledScoreboard>
            <p>
                You guessed <BoldText>{score}</BoldText> of <BoldText>8</BoldText>!
            </p>
        </StyledScoreboard>
    </ResultWrapper>
)

export default Result;