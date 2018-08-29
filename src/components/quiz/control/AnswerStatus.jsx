import React from 'react';
import ANSWER_STAGE from '../../../constants/answerStage.js';
import styled from 'styled-components';

const AnswerStatusWrapper = styled.div`
    height: 50px;
    width: 50px;
    font-size: 16px;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content:center;
    background-color: ${({ theme, isOptionRight }) => isOptionRight ? theme.correctIconColor : theme.incorrectIconColor};
    visibility: ${({ stage }) => stage === ANSWER_STAGE.NEXT ? 'visible' : 'hidden'};
`;

const AnswerStatus = ({ className, stage, isOptionRight }) =>
    <AnswerStatusWrapper className={className} stage={stage} isOptionRight={isOptionRight}>
        {isOptionRight ? '✓' : '⨉'}
    </AnswerStatusWrapper>

export default AnswerStatus;