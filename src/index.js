import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App.jsx'
import rootReducer from '../src/reducers/rootReducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'
import 'babel-polyfill'
import AppContainer from './containers/AppContainer.jsx';

const store = createStore(rootReducer, composeWithDevTools())

getQuestions().then(questions => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer questions={questions} />
        </Provider>,
        document.getElementById('root')
    )
})

function getQuestions() {
    return fetch('questions.json').then((res) =>
        res.ok ? res.json() : alert('Question fetch failed'))
}