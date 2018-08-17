import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './css/index.css';
import "babel-polyfill";

getQuestions().then(questions => { 
    ReactDOM.render(<App questions={questions} />, document.getElementById('container')); 
})

async function getQuestions() {
    const questionRequest = new Request('../questions.json');
    const questionsResponse = await fetch(questionRequest);
    return questionsResponse.json();
}