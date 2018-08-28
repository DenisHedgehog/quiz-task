import React from 'react';
import ANSWER_STAGE from '../../../constants/answerStage.js';
import styled from 'styled-components';

const Status = styled.div`
    height: 50px;
    width: 50px;
    font-size: 16px;
    border-radius: 50%;
    position: absolute;
    display:flex;
    align-items: center;
    justify-content:center;
    color: white;
    background-color: ${({ theme, isOptionRight }) => isOptionRight ? theme.correctIconColor : theme.incorrectIconColor};
    visibility: ${({ stage }) => stage === ANSWER_STAGE.NEXT ? 'visible' : 'hidden'};
`;

const AnswerStatus = ({ stage, isOptionRight }) =>
    <Status stage={stage} isOptionRight={isOptionRight}>{isOptionRight ? '✓' : '⨉'}</Status>

export default AnswerStatus;