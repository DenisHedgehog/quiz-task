import React from 'react';
import Control from '../control/Control.jsx';
import OptionList from './OptionList.jsx';
import ANSWER_STAGE from '../../../constants/answerStage.js';

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: ANSWER_STAGE.ANSWER,
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
    
    handleScoreChange() {
        this.props.onScoreChange();
    }
    
    handleQuestionAnswerChange() {
        switch (this.state.stage) {
            case ANSWER_STAGE.ANSWER:
                this.isOptionRight() && this.handleScoreChange();
                this.handleStateChange(ANSWER_STAGE.NEXT);
                break;
            case ANSWER_STAGE.NEXT:
                this.props.onQuestionChange();
                this.handleOptionReset();
                this.handleStateChange(ANSWER_STAGE.ANSWER);
                break;
        }
    }

    handleCurrentOptionIdChange(currentOptionId) {
        this.setState({currentOptionId});
    }

    render() {
        return (
            <React.Fragment>
                <OptionList
                    key="option-list"
                    stage={this.state.stage}
                    options={this.props.question.options}
                    correctOptionId={this.props.question.correctOptionId}
                    currentOptionId={this.state.currentOptionId}
                    onCurrentOptionIdChange={this.handleCurrentOptionIdChange} />
                <Control
                    key="control"
                    stage={this.state.stage}
                    onQuestionAnswerChange={this.handleQuestionAnswerChange}
                    isOptionRight={this.isOptionRight}
                    currentOptionId={this.state.currentOptionId} />
            </React.Fragment>
        );
    }
}

export default Answer;