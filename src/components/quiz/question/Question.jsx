import React from 'react';
import Text from './Text.jsx';
import Picture from './Picture.jsx';

const Question = ({ question: { question, img } }) => (
    <div className="question">
        <Text text={question} />
        {img.length > 0 && <Picture img={img} />}
    </div>
)

export default Question;