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

const StyledAnswerStatus = styled(AnswerStatus)`
    position: absolute;
    color:white;
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
        <StyledAnswerStatus stage={stage} status={status} isOptionRight={isOptionRight} />
        <Button
            onQuestionAnswerChange={onQuestionAnswerChange}
            stage={stage}
            currentOptionId={currentOptionId}>{stage}</Button>
    </ControlWrapper>
)

export default Control;