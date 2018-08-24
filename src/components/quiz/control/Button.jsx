import React from 'react';
import ANSWER_STAGE from '../../../modules/AnswerStage.js';

function Button({currentOptionId, onQuestionAnswerChange, text, stage}) {
    function getButtonStyle() {
        let style = 'control__button text_size_mid';
        if (stage === ANSWER_STAGE.ANSWER && currentOptionId === null) {
            style += ' control__button_disabled';
        }
        return style;
    }

    return (
        <button
            className={getButtonStyle()}
            onClick={onQuestionAnswerChange}
            disabled={currentOptionId === null}>{text}</button>
    )
}

export default Button;