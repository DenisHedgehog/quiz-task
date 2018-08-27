import React from 'react';
import Text from './Text.jsx';
import Picture from './Picture.jsx';

const Question = ({ question: { question, img } }) => (
    <React.Fragment>
        <Text text={question} />
        {img.length > 0 && <Picture img={img} />}
    </React.Fragment>
)

export default Question;