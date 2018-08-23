import React from 'react';

function Button(props) {
    function getButtonStyle() {
        let style = 'control__button text_size_mid';
        if (props.stage === 'Answer' && props.currentOptionId === null) {
            style += ' control__button_disabled';
        }
        return style;
    }

    return (
        <button
            className={getButtonStyle()}
            onClick={props.onClick}
            disabled={props.currentOptionId === null}>{props.text}</button>
    )
}

export default Button;