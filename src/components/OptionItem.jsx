import React from 'react';

function OptionItem(props) {
    return (
        <div className={props.style} onClick={() => props.changeCurrentOption(props.option.id)} >
            <input
                name="answerItem"
                type="radio"
                checked={props.option.id === props.currentOptionId} />
            <p>{props.option.option}</p>
        </div>
    )
}

export default OptionItem;