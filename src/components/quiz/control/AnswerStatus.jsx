import React from 'react';
import ANSWER_STAGE from '../../../constants/answerStage.js';
import styled from 'styled-components';
import screenSize from '../../../constants/screenSize.js';

const StyledStatus = styled.div`
    height: 50px;
    width: 50px;
    font-size: 16px;
    border-radius: 50%;
    position: absolute;
    display:flex;
    align-items: center;
    justify-content:center;
    color: white;
    background-color: ${(props) => props.isOptionRight ? 'green' : 'brown'};
    visibility: ${(props) => props.stage === ANSWER_STAGE.NEXT ? 'visible' : 'hidden'};
`;

const StatusWrapper = styled.div`
    position: absolute;
    right: 65%;
    @media (max-width: ${screenSize.TABLET}) {
        right: 75%;
    };
    @media (max-width: ${screenSize.MOBILE}) {
        right: 85%;
    };
`;

const AnswerStatus = ({ stage, isOptionRight }) =>
    <StatusWrapper>
        <StyledStatus stage={stage} isOptionRight={isOptionRight}>{isOptionRight ? '✓' : '⨉'}</StyledStatus>
    </StatusWrapper>

export default AnswerStatus;