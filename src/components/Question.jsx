import React from 'react';

export default class Question extends React.Component {
    render() {
        return (
            <h1 className="text">{this.props.question}</h1>
        )
    }
}