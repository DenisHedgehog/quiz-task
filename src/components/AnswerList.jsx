import React from 'react';
import AnswerItem from './AnswerItem.jsx';

export default class AnswerList extends React.Component {
    onAnswerChange(choosenAnswer) {
        this.props.onAnswerChange(choosenAnswer)
    }

    render() {
        const answerList = this.props.answers.map(answer =>
            <AnswerItem
                style={this.props.answerStyles[answer.id]}
                key={answer.id}
                answer={answer}
                onClick={this.onAnswerChange.bind(this)} />);
        return (
            <div>
                {answerList}
            </div>
        )
    }
}