import React, { Fragment } from 'react';
import Question from './question/Question.jsx';
import Progress from './Progress.jsx';
import Answer from './answer/Answer.jsx';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestionId: 0,
            score: 0
        };
        this.handleScoreChange = this.handleScoreChange.bind(this);
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
    }

    handleQuestionChange() {
        this.setState(prevState => ({
            currentQuestionId: prevState.currentQuestionId + 1
        }));
    }

    handleScoreChange() {
        this.setState((prevState) => ({
            score: prevState.score + 1
        }));
    }

    isLastQuestion(id) {
        return id >= this.props.questions.length;
    }

    getCurrentQuestion() {
        const curr = this.state.currentQuestionId;
        const length = this.props.questions.length;
        return (curr >= length) ?
            this.props.questions[length - 1] : this.props.questions[curr];
    }

    componentDidUpdate(prevProps) {
        if (this.isLastQuestion(this.state.currentQuestionId)) {
            prevProps.onQuizFinish(this.state.score);
        }
    }

    render() {
        return (
            <Fragment>
                <Question key="question" question={this.getCurrentQuestion()} />
                <Answer
                    key="answer"
                    question={this.getCurrentQuestion()}
                    onScoreChange={this.handleScoreChange}
                    onQuestionChange={this.handleQuestionChange} />
                <Progress
                    key="progress"
                    questionNumber={this.state.currentQuestionId + 1}
                    questionCount={this.props.questions.length} />
            </Fragment>
        );
    }
}

export default Quiz;