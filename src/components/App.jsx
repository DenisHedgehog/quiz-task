import '../css/index.css';
import React from 'react';
import Result from './Result.jsx';
import Quiz from './quiz/Quiz.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFinished: false,
            score: 0,
            hasError: null
        };
        this.handleScoreChange = this.handleScoreChange.bind(this);
        this.handleQuizFinish = this.handleQuizFinish.bind(this);
    }
    
    componentDidCatch(error) {
        alert(`Error: ${error.message}`)
        this.setState({ hasError: error.message });
    }

    handleScoreChange() {
        this.setState((prevState) => ({
            score: prevState.score + 1
        }));
    }

    handleQuizFinish() {
        this.setState({ isFinished: true });
    }
 
    render() {
        return (
            <div className="app">
                {
                    !this.state.isFinished ?
                        <Quiz hasError={this.props.hasError} questions={this.props.questions} onScoreChange={this.handleScoreChange} handleQuizFinish={this.handleQuizFinish} /> :
                        <Result score={this.state.score} />
                }
            </div>
        )
    }
}

export default App;