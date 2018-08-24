import React from 'react';
import Button from './Button.jsx';
import AnswerStatus from './AnswerStatus.jsx';

const Control = ({stage, status, isOptionRight, onQuestionAnswerChange, currentOptionId}) => (
    <div className="control">
        <AnswerStatus stage={stage} status={status} isOptionRight={isOptionRight} />
        <Button
            onQuestionAnswerChange={onQuestionAnswerChange}
            stage={stage}
            text={stage}
            currentOptionId={currentOptionId} />
    </div>
)

export default Control;