import React from 'react';
import ANSWER_STAGE from '../../../modules/AnswerStage.js';

const AnswerStatus = ({stage, isOptionRight}) => {
        let status = '';
        if (stage === ANSWER_STAGE.NEXT) {
            status = isOptionRight() ? 
            <div className="status status_correct control__status text_size_big">✓</div> : 
            <div className="status status_incorrect control__status text_size_big">⨉</div>;
        }
        return status
}

export default AnswerStatus;