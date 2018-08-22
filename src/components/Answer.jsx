import React from 'react';
import Control from './Control.jsx';
import OptionList from './OptionList.jsx';

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: 'Answer',
            currentOptionId: null
        };
        this.questionAnswered = this.questionAnswered.bind(this);
        this.changeCurrentOptionId = this.changeCurrentOptionId.bind(this);
        this.isOptionRight = this.isOptionRight.bind(this);
    }

    isOptionRight() {
        return this.props.question.correctOptionId === this.state.currentOptionId;
    }

    changeStage(stage) {
        this.setState({
            stage: stage
        });
    }

    resetOptionId() {
        this.setState({
            currentOptionId: null
        });
    }

    questionAnswered() {
        switch (this.state.stage) {
            case 'Answer':
                this.isOptionRight() && this.props.increaseProgress();
                this.changeStage('Next');
                break;
            case 'Next':
                this.props.increaseStep();
                this.resetOptionId();
                this.changeStage('Answer');
                break;
        }
    }

    changeCurrentOptionId(id) {
        this.setState({
            currentOptionId: id
        });
    }

    render() {
        return (
            <div>
                <OptionList
                    stage={this.state.stage}
                    options={this.props.question.options}
                    correctOptionId={this.props.question.correctOptionId}
                    changeCurrentOptionId={this.changeCurrentOptionId}
                    currentOptionId={this.state.currentOptionId} />
                <Control
                    stage={this.state.stage}
                    questionAnswered={this.questionAnswered}
                    isOptionRight={this.isOptionRight} />
            </div>
        );
    }
}

export default Answer;