import React from 'react';
import Button from './Button.jsx';
import AnswerStatus from './AnswerStatus.jsx';

export default class Control extends React.Component {
    render() {
        return (
            <div className="control">
                <AnswerStatus stage={this.props.stage} status={this.props.status} />
                <Button onClick={this.props.nextQuestion} text={this.props.stage} />
            </div>
        )
    }
}