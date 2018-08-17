import React from 'react';

export default class Question extends React.Component {
    render() {
        return (
            <h1 className="text text_color_mid">{this.props.question}</h1>
        )
    }
}