import React from 'react';
import Result from './Result.jsx';
import Quiz from './quiz/Quiz.jsx';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import mainTheme from '../constants/mainTheme.js';

injectGlobal`
    body {
        margin: 0;
    }
`;

const AppWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.bgColor};
    font-family: ${({ theme }) => theme.font};
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
            <ThemeProvider theme={mainTheme}>
                <AppWrapper>
                    {
                        this.state.isFinished ?
                            <Result score={this.state.result} questionCount={this.props.questions.length} /> : 
                            < Quiz questions={this.props.questions} onQuizFinish={this.handleQuizFinish} />
            }
                </AppWrapper>
            </ThemeProvider>
        )
    }
}

export default App;