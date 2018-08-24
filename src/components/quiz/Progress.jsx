import React from 'react';

const Progress = ({questionNumber, questionCount}) => (
    <p className="progress text_color_light">
        <span className="text_bold text_color_mid">{questionNumber}</span>
        {' '}of{' '}
        <span className="text_bold text_color_mid">{questionCount}</span>
    </p>
)

export default Progress;