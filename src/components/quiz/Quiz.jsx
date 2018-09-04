import React from 'react'
import Question from './question/Question.jsx'
import Progress from './Progress.jsx'
import AnswerContainer from '../../containers/AnswerContainer.jsx'

class Quiz extends React.Component {
    isLastQuestion(id) {
        return id >= this.props.questions.length;
    }

    getCurrentQuestion() {
        const curr = this.props.currentQuestionId;
        const length = this.props.questions.length;
        return (curr >= length) ?
            this.props.questions[length - 1] : this.props.questions[curr];
    }

    componentDidUpdate() {
        if (this.isLastQuestion(this.props.currentQuestionId)) {
            this.props.finishQuiz();
        }
    }

    render() {
        return (
            <React.Fragment>
                <Question key="question" question={this.getCurrentQuestion()} />
                <AnswerContainer
                    key="answer"
                    question={this.getCurrentQuestion()} />
                <Progress
                    key="progress"
                    questionNumber={this.props.currentQuestionId + 1}
                    questionCount={this.props.questions.length} />
            </React.Fragment>
        )
    }
}

export default Quiz