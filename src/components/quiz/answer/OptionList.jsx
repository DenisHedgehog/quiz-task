import React from 'react';
import OptionItem from './OptionItem.jsx';
import ANSWER_STAGE from '../../../constants/answerStage.js';
import optionStyle from '../../../constants/optionStyle.js'

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
                    return optionStyle.CORRECT;
                case this.props.currentOptionId === id && this.props.correctOptionId !== id:
                    return optionStyle.INCORRECT;
                default:
                    return optionStyle.DEFAULT;
            }
        } else {
            return optionStyle.DEFAULT;
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