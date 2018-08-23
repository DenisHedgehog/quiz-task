import React from 'react';
import OptionItem from './OptionItem.jsx';

export default class OptionList extends React.Component {
    constructor(props) {
        super(props);
        this.changeCurrentOption = this.changeCurrentOption.bind(this);
    }

    changeCurrentOption(id) {
        if (this.props.stage === 'Answer') {
            this.props.changeCurrentOptionId(id);
        }
    }

    getOptionStyle(id) {
        if (this.props.stage === 'Next') {
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
        const optionList = this.props.options.map(option =>
            <OptionItem
                key={option.id}
                option={option}
                changeCurrentOption={this.changeCurrentOption}
                currentOptionId={this.props.currentOptionId}
                style={this.getOptionStyle(option.id)} />);
        return (
            <div>
                {optionList}
            </div>
        )
    }
}