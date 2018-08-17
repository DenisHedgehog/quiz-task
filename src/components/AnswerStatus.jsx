import React from 'react';

export default class AnswerStatus extends React.Component {

    render() {
        let status = '';
        if (this.props.stage === "Next") {
            status = this.props.status() ? 
            <div className="status status_correct control__status text_size_big">✓</div> : 
            <div className="status status_incorrect control__status text_size_big">⨉</div>;
        } else {
            status = '';
        }
        return (
            status
        )
    }
}