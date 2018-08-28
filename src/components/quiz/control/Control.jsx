import React from 'react';
import Button from './Button.jsx';
import AnswerStatus from './AnswerStatus.jsx';
import styled from 'styled-components';
import screenSize from '../../../constants/screenSize.js';

const ControlWrapper = styled.div`
    display: flex;
    padding: 32px;
    justify-content: center;
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

const Control = ({ stage, status, isOptionRight, onQuestionAnswerChange, currentOptionId }) => (
    <ControlWrapper>
        <StatusWrapper>
            <AnswerStatus stage={stage} status={status} isOptionRight={isOptionRight()} />
        </StatusWrapper>
        <Button
            onQuestionAnswerChange={onQuestionAnswerChange}
            stage={stage}
            text={stage}
            currentOptionId={currentOptionId} />
    </ControlWrapper>
)

export default Control;