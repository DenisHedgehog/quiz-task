import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './css/index.css';

const questionRequest = new Request('../questions.json');
const questionsResponse = fetch(questionRequest);
const questions = questionsResponse.then(resp => resp.json())
questions.then(questions => { 
    ReactDOM.render(<App questions={questions} />, document.getElementById('container')); 
})
