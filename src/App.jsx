import React from 'react';
import Quiz from './components/Quiz.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div className="app text text_color_light">
                <Quiz questions={this.props.questions} />
            </div>
        )
    };
}