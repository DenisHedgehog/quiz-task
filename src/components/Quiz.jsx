import React from 'react';
import Question from './Question.jsx';
import Control from './Control.jsx';
import AnswerList from './AnswerList.jsx';
import Progress from './Progress.jsx';
import Result from './Result.jsx';

export default class Quiz extends React.Component {
    componentWillMount() {
        this.setState({
            step: 0,
            score: 0,
            currentAnswerId: null
        });
    }

    questionAnswered() {
        this.isAnswerRight() ? this.increaseProgress() : {};
        this.increaseStep();
    }
    
    isAnswerRight() {
        return this.props.questions[this.state.step].correctOptionId === this.state.currentAnswerId;
    }

    increaseProgress() {
        this.setState(prevState => {
            return {
                step: prevState.step,
                score: prevState.score + 1,
                currentAnswerId: prevState.currentAnswerId
            }
        })
    }

    increaseStep() {
        this.setState(prevState => {
            return {
                step: prevState.step + 1,
                score: prevState.score,
                currentAnswerId: prevState.currentAnswerId
            }
        })
    }

    onAnswerChange(answer) {
        this.setState(prevState => {
            return {
                step: prevState.step,
                score: prevState.score,
                currentAnswerId: answer
            }
        })
    }

    render() {
        
        return (this.state.step < this.props.questions.length) ? (
            <div className="quiz">
                <Question question={this.props.questions[this.state.step].question} />
                <AnswerList answers={this.props.questions[this.state.step].options} onAnswerChange={this.onAnswerChange.bind(this)} />
                <Control nextQuestion={this.questionAnswered.bind(this)} />
                <Progress progress={this.state.step + 1} questionCount={this.props.questions.length} />
            </div>
        ) : (
                <div className="quiz">
                    <Result score={this.state.score} />
                </div>)
    }
}