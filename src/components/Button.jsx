import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <button className="control__button text text_size_mid" onClick={this.props.onClick}>Answer</button>
        )
    }
}