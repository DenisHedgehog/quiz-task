import React from 'react'
import Control from '../control/Control.jsx'
import OptionList from './OptionList.jsx'
import answerStage from '../../../constants/answerStage.js'

class Answer extends React.Component {
    constructor(props) {
        super(props)
        this.handleQuestionAnswer = this.handleQuestionAnswer.bind(this)
    }

    isOptionRight() {
        return this.props.question.correctOptionId === this.props.currentOptionId
    }

    handleQuestionAnswer() {
        switch (this.props.currentStage) {
            case answerStage.ANSWER:
                this.isOptionRight() && this.props.increaseScore()
                this.props.changeStage(answerStage.NEXT)
                break
            case answerStage.NEXT:
                this.props.nextQuestion()
                this.props.changeStage(answerStage.ANSWER)
                this.props.changeCurrentOptionId(null)
                break
        }
    }

    render() {
        return (
            <React.Fragment>
                <OptionList
                    key="option-list"
                    stage={this.props.currentStage}
                    options={this.props.question.options}
                    correctOptionId={this.props.question.correctOptionId}
                    currentOptionId={this.props.currentOptionId}
                    changeCurrentOptionId={this.props.changeCurrentOptionId} />
                <Control
                    key="control"
                    stage={this.props.currentStage}
                    isOptionRight={this.isOptionRight()} 
                    currentOptionId={this.props.currentOptionId}
                    onQuestionAnswer={this.handleQuestionAnswer} />
            </React.Fragment>
        )
    }
}

export default Answer