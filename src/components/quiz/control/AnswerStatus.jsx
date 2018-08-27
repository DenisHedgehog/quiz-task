import React from 'react';
import ANSWER_STAGE from '../../../constants/answerStage.js';
import styled from 'styled-components';

const StyledStatus = styled.div`
    height: 50px;
    width: 50px;
    font-size: 16px;
    border-radius: 50%;
    position: absolute;
    right: 60%;
    display:flex;
    align-items: center;
    justify-content:center;
    color: white;
    background-color: ${(props) => props.isOptionRight() ? 'green' : 'brown'};
    visibility: ${(props) => props.stage === ANSWER_STAGE.NEXT ? 'visible' : 'hidden'};
    @media (max-width: 700px) {
        right: 80%;
    }
`;

const AnswerStatus = ({stage, isOptionRight}) => 
    <StyledStatus stage={stage} isOptionRight={isOptionRight}>{isOptionRight() ? '✓' : '⨉'}</StyledStatus>

export default AnswerStatus;