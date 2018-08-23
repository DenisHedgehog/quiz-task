import React from 'react';
import Button from './Button.jsx';
import AnswerStatus from './AnswerStatus.jsx';

const Control = (props) => (
    <div className="control">
        <AnswerStatus stage={props.stage} status={props.status} isOptionRight={props.isOptionRight} />
        <Button
            onClick={props.onQuestionAnswerChange}
            stage={props.stage}
            text={props.stage}
            currentOptionId={props.currentOptionId} />
    </div>
)

export default Control;