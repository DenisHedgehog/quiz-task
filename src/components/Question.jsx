import React from 'react';
import Text from './Text.jsx';
import Picture from './Picture.jsx';

function Question(props) {
    function isPictureExist() {
        return props.question.img.length > 0;
    }
    
    return (
        <div className="question">
            <Text text={props.question.question} />
            {isPictureExist() && <Picture img={props.question.img} />}
        </div>
    )
}

export default Question;