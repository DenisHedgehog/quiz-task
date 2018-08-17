import React from 'react';
import Question from './Question.jsx';
import Control from './Control.jsx';
import AnswerList from './AnswerList.jsx';
import Progress from './Progress.jsx';
import Result from './Result.jsx';
import Picture from './Picture.jsx';

export default class Quiz extends React.Component {
    componentWillMount() {
        this.setState({
            step: 0,
            score: 0,
            currentAnswerId: null,
            answerStyles: ["answer", "answer", "answer"],
            stage: "Answer"
        });
    }

    changeStage(stage) {
        this.setState(prevState => {
            return {
                step: prevState.step,
                score: prevState.score,
                currentAnswerId: prevState.currentAnswerId,
                answerStyles: prevState.answerStyles,
                stage: stage
            }
        })
    }

    changeStyles() {
        const styles = this.state.answerStyles;
        if (this.isAnswerRight()) {
            styles[this.state.currentAnswerId] = "answer answer_correct";
        } else {
            styles[this.state.currentAnswerId] = "answer answer_incorrect";
            styles[this.props.questions[this.state.step].correctOptionId] = "answer answer_correct";
        }
        this.setState(prevState => {
            return {
                step: prevState.step,
                score: prevState.score,
                currentAnswerId: prevState.currentAnswerId,
                answerStyles: styles,
                stage: prevState.stage
            }
        })
    }

    resetStyles() {
        this.setState(prevState => {
            return {
                step: prevState.step,
                score: prevState.score,
                currentAnswerId: prevState.currentAnswerId,
                answerStyles: ["answer", "answer", "answer"],
                stage: prevState.stage
            }
        })
    }

    questionAnswered() {
        switch (this.state.stage) {
            case "Answer":
                this.isAnswerRight() ? this.increaseProgress() : {};
                this.changeStyles();
                this.changeStage("Next");
                break;
            case "Next": 
                this.increaseStep();
                this.resetStyles();
                this.changeStage("Answer");
                break;
        }
    }

    isAnswerRight() {
        return this.props.questions[this.state.step].correctOptionId === this.state.currentAnswerId;
    }

    increaseProgress() {
        this.setState(prevState => {
            return {
                step: prevState.step,
                score: prevState.score + 1,
                currentAnswerId: prevState.currentAnswerId,
                answerStyles: prevState.answerStyles,
                stage: prevState.stage
            }
        })
    }

    increaseStep() {
        this.setState(prevState => {
            return {
                step: prevState.step + 1,
                score: prevState.score,
                currentAnswerId: prevState.currentAnswerId,
                answerStyles: prevState.answerStyles,
                stage: prevState.stage
            }
        })
    }

    onAnswerChange(answer) {
        this.setState(prevState => {
            return {
                step: prevState.step,
                score: prevState.score,
                currentAnswerId: answer,
                answerStyles: prevState.answerStyles,
                stage: prevState.stage
            }
        })
    }

    isPictureExist() {
        return this.props.questions[this.state.step].img.length > 0;
    }

    render() {
        return (this.state.step < this.props.questions.length) ? (
            <div className="quiz">
                <Question question={this.props.questions[this.state.step].question} />
                {this.isPictureExist() ? <Picture img={this.props.questions[this.state.step].img} /> : ''}
                <AnswerList 
                    answers={this.props.questions[this.state.step].options} 
                    onAnswerChange={this.onAnswerChange.bind(this)}
                    answerStyles={this.state.answerStyles} />
                <Control 
                    nextQuestion={this.questionAnswered.bind(this)} 
                    stage={this.state.stage} 
                    status={this.isAnswerRight.bind(this)} />
                <Progress progress={this.state.step + 1} questionCount={this.props.questions.length} />
            </div>
        ) : (
                <div className="quiz">
                    <Result score={this.state.score} />
                </div>)
    }
}