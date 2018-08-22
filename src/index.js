import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './css/index.css';
import 'babel-polyfill';

getQuestions().then(questions => { 
    ReactDOM.render(<App questions={questions} />, document.getElementById('root')); 
})

function getQuestions() {
    return fetch('questions.json').then((res) => res.json());
}