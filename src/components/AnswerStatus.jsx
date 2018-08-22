import React from 'react';

function AnswerStatus(props) {
        let status = '';
        if (props.stage === "Next") {
            status = props.isOptionRight() ? 
            <div className="status status_correct control__status text_size_big">✓</div> : 
            <div className="status status_incorrect control__status text_size_big">⨉</div>;
        }
        return status
}

export default AnswerStatus;