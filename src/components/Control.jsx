import React from 'react';
import Button from './Button.jsx';
import AnswerStatus from './AnswerStatus.jsx';

function Control(props) {
        return (
            <div className="control">
                <AnswerStatus stage={props.stage} status={props.status} isOptionRight={props.isOptionRight} />
                <Button onClick={props.questionAnswered} text={props.stage} />
            </div>
        )
}

export default Control;