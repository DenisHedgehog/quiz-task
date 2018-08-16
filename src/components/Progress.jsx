import React from 'react';

export default class Progress extends React.Component {
    render() {
        return (
            <p className="progress text text_color_light"><span className="text_bold text_color_mid">{this.props.progress}</span> of <span className="text_bold text_color_mid">{this.props.questionCount}</span></p>
        )
    }
}