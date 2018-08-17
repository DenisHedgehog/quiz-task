import React from 'react';

export default class Picture extends React.Component {
    render() {
        return (
            <img className="picture" src={this.props.img} alt=""/>
        )
    }
}