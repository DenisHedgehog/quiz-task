import '../css/index.css';
import React from 'react';
import Result from './Result.jsx';
import Quiz from './quiz/Quiz.jsx';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
    body {
        background-color: aliceblue;
        font-family: 'Nunito', sans-serif;
    }
`;

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFinished: false,
            result: 0,
            error: null
        };
        this.handleQuizFinish = this.handleQuizFinish.bind(this);
    }

    componentDidCatch(error) {
        alert(`Error: ${error.message}`)
        this.setState({ error: error.message });
    }

    handleQuizFinish(result) {
        this.setState({ isFinished: true, result });
    }

    render() {
        return (
            <AppWrapper>
                {
                    !this.state.isFinished ?
                        <Quiz questions={this.props.questions} onQuizFinish={this.handleQuizFinish} /> :
                        <Result score={this.state.result} />
                }
            </AppWrapper>
        )
    }
}

export default App;