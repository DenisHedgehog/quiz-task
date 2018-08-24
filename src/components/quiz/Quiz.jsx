import React from 'react';
import Question from './question/Question.jsx';
import Progress from './Progress.jsx';
import Answer from './answer/Answer.jsx';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestionId: 0
        };
        this.onScoreChange = this.props.onScoreChange;
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
    }

    handleQuestionChange() {
        this.setState(prevState => ({
            currentQuestionId: prevState.currentQuestionId + 1
        }));
    }

    isLastQuestion() {
        return (this.state.currentQuestionId >= this.props.questions.length);
    }

    getCurrentQuestion = () => {
        const question = this.props.questions[this.state.currentQuestionId];
        if (question) {
            return question
        } else {
            throw Error('Question not found');
        }
    }

    render() {
        if (this.isLastQuestion()) {
            this.props.onQuizFinish();
            return null;
        } else {
            return [
                <Question key="question" question={this.getCurrentQuestion()} />,
                <Answer
                    key="answer"
                    question={this.getCurrentQuestion()}
                    onScoreChange={this.onScoreChange}
                    onQuestionChange={this.handleQuestionChange} />,
                <Progress
                    key="progress"
                    currentQuestionId={this.state.currentQuestionId + 1}
                    questionCount={this.props.questions.length} />
            ]
        }
    }
}

export default Quiz;