import React from 'react';
import Button from './Button.jsx';
import AnswerStatus from './AnswerStatus.jsx';
import styled from 'styled-components';

const ControlWrapper = styled.div`
    display: flex;
    padding: 32px;
    justify-content: center;
`;

const Control = ({stage, status, isOptionRight, onQuestionAnswerChange, currentOptionId}) => (
    <ControlWrapper>
        <AnswerStatus stage={stage} status={status} isOptionRight={isOptionRight()} />
        <Button
            onQuestionAnswerChange={onQuestionAnswerChange}
            stage={stage}
            text={stage}
            currentOptionId={currentOptionId} />
    </ControlWrapper>
)

export default Control;