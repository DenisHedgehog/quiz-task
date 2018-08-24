import React from 'react';
import OptionItem from './OptionItem.jsx';
import ANSWER_STAGE from '../../../modules/AnswerStage.js';

export default class OptionList extends React.Component {
    constructor(props) {
        super(props);
        this.handleCurrentOptionChange = this.handleCurrentOptionChange.bind(this);
    }

    handleCurrentOptionChange(id) {
        if (this.props.stage === ANSWER_STAGE.ANSWER) {
            this.props.onCurrentOptionIdChange(id);
        }
    }

    getOptionStyle(id) {
        if (this.props.stage === ANSWER_STAGE.NEXT) {
            switch (true) {
                case this.props.correctOptionId === id:
                    return 'option option_correct';
                case this.props.currentOptionId === id && this.props.correctOptionId !== id:
                    return 'option option_incorrect';
                default:
                    return 'option';
            }
        } else {
            return 'option';
        }
    }

    render() {
        return (
            this.props.options.map((option) =>
                <OptionItem
                    key={option.id}
                    option={option}
                    onCurrentOptionChange={this.handleCurrentOptionChange}
                    currentOptionId={this.props.currentOptionId}
                    style={this.getOptionStyle(option.id)} />)
        )
    }
}