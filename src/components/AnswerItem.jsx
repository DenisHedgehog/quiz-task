import React from 'react';

export default class AnswerItem extends React.Component {
    render() {
        return (
            <div className="answer">
                <input name="answerItem" type="radio" onClick={() => this.props.onClick(this.props.answer.id)}/>
                <p>{this.props.answer.option}</p>
            </div>
        )
    }
}