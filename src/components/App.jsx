import React from 'react'
import Result from './Result.jsx'
import QuizContainer from '../containers/QuizContainer.jsx'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import mainTheme from '../constants/mainTheme.js'

injectGlobal`
    body {
        margin: 0;
    }
`

const AppWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.bgColor};
    font-family: ${({ theme }) => theme.font};
`

const App = ({ score, questions, isFinished }) => (
    <ThemeProvider theme={mainTheme}>
        <AppWrapper>
            {
                isFinished ?
                    <Result score={score} questionCount={questions.length} /> :
                    <QuizContainer questions={questions} />
            }
        </AppWrapper>
    </ThemeProvider>
)

export default App