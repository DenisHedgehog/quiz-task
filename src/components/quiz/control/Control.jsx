import React from 'react';
import Button from './Button.jsx';
import AnswerStatus from './AnswerStatus.jsx';
import styled from 'styled-components';
import screenSize from '../../../constants/screenSize.js';

const StyledControl = styled.div`
    display: flex;
    padding: 32px;
    justify-content: center;
`;

const Status = styled.div`
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
    <StyledControl>
        <Status>
            <AnswerStatus stage={stage} status={status} isOptionRight={isOptionRight} />
        </Status>
        <Button
            onQuestionAnswerChange={onQuestionAnswerChange}
            stage={stage}
            text={stage}
            currentOptionId={currentOptionId} />
    </StyledControl>
)

export default Control;