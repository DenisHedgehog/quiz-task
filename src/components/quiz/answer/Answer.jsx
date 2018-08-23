import React from 'react';
import Control from '../control/Control.jsx';
import OptionList from './OptionList.jsx';

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: 'Answer',
            currentOptionId: null
        };
        this.handleQuestionAnswerChange = this.handleQuestionAnswerChange.bind(this);
        this.handleCurrentOptionIdChange = this.handleCurrentOptionIdChange.bind(this);
        this.isOptionRight = this.isOptionRight.bind(this);
    }

    isOptionRight() {
        return this.props.question.correctOptionId === this.state.currentOptionId;
    }

    handleStateChange(stage) {
        this.setState({stage});
    }

    handleOptionReset() {
        this.setState({currentOptionId: null});
    }

    handleQuestionAnswerChange() {
        switch (this.state.stage) {
            case 'Answer':
                this.isOptionRight() && this.props.onScoreChange();
                this.handleStateChange('Next');
                break;
            case 'Next':
                this.props.handleQuestionChange();
                this.handleOptionReset();
                this.handleStateChange('Answer');
                break;
        }
    }

    handleCurrentOptionIdChange(currentOptionId) {
        this.setState({currentOptionId});
    }

    render() {
        return (
            [
                <OptionList
                    key="option-list"
                    stage={this.state.stage}
                    options={this.props.question.options}
                    correctOptionId={this.props.question.correctOptionId}
                    currentOptionId={this.state.currentOptionId}
                    onCurrentOptionIdChange={this.handleCurrentOptionIdChange} />,
                <Control
                    key="control"
                    stage={this.state.stage}
                    onQuestionAnswerChange={this.handleQuestionAnswerChange}
                    isOptionRight={this.isOptionRight}
                    currentOptionId={this.state.currentOptionId} />
            ]
        );
    }
}

export default Answer;