import React from 'react';

const OptionItem = ({style, option, currentOptionId, onCurrentOptionChange}) => (
    <div className={style} onClick={() => onCurrentOptionChange(option.id)} >
        <input
            name="answerItem"
            type="radio"
            checked={option.id === currentOptionId} />
        <p>{option.option}</p>
    </div>
)

export default OptionItem;