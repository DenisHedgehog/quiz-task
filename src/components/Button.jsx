import React from 'react';

function Button(props) {
        return (
            <button className="control__button text_size_mid" onClick={props.onClick}>{props.text}</button>
        )
}

export default Button;