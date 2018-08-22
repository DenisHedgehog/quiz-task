import '../css/index.css';
import React from 'react';
import Question from './Question.jsx';
import Progress from './Progress.jsx';
import Result from './Result.jsx';
import Answer from './Answer.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestionId: 0,
            score: 0
        };
        this.increaseProgress = this.increaseProgress.bind(this);
        this.increaseStep = this.increaseStep.bind(this);
    }

    increaseProgress() {
        this.setState(prevState => {
            return {
                score: prevState.score + 1
            }
        });
    }

    increaseStep() {
        this.setState(prevState => {
            return {
                currentQuestionId: prevState.currentQuestionId + 1
            }
        });
    }

    isLastQuesion() {
        return (this.state.currentQuestionId < this.props.questions.length);
    }

    render() {
        return this.isLastQuesion() ? (
            <div className="app">
                <Question question={this.props.questions[this.state.currentQuestionId]} />
                <Answer 
                    question={this.props.questions[this.state.currentQuestionId]}
                    increaseProgress={this.increaseProgress}
                    increaseStep={this.increaseStep} />
                <Progress 
                    progress={this.state.currentQuestionId + 1} 
                    questionCount={this.props.questions.length} />
            </div>
        ) : (
                <Result score={this.state.score} />
            );
    }
}

export default App;