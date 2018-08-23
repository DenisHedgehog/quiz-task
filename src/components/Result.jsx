import React from 'react';

const Result = ({score}) => (
    <div className="result text_color_light">
        <h1 className="text_color_mid">Great job!</h1>
        <div className="score text_size_big">
            <p>
                You guessed <span className="text_bold text_color_mid">
                    {score}
                </span> of <span className="text_bold text_color_mid">
                    8
                </span>!
            </p>
        </div>
    </div>
)

export default Result;