import React from 'react';
import styled from 'styled-components';
import optionStyle from '../../../constants/optionStyle.js';

const StyledOption = styled.div`
    background-color: ${(props) => {
        switch (props.optionStyle) {
            case optionStyle.CORRECT:
                return 'rgba(101, 192, 101, 0.295)';
            case optionStyle.INCORRECT:
                return 'rgba(207, 67, 67, 0.295)';
            default:
                return 'white';
        }
    }
    };
    border: 2px solid;
    border-color: ${(props) => {
        switch (props.optionStyle) {
            case optionStyle.CORRECT:
                return 'rgba(35, 194, 35, 0.295)';
            case optionStyle.INCORRECT:
                return 'rgba(146, 44, 44, 0.295)';
            default:
                return 'lightgray';
        }
    }
    };
    border-radius: 4px;
    padding: 0 16px;
    width: 500px;
    display: flex;
    align-items: center;
    margin: 8px;
    cursor: pointer;

    @media (max-width: 550px) {
        width: 90vw;
    }
`;

const OptionItem = ({ style, option, currentOptionId, onCurrentOptionChange }) => (
    <StyledOption optionStyle={style} onClick={() => onCurrentOptionChange(option.id)} >
        <input
            name="answerItem"
            type="radio"
            checked={option.id === currentOptionId} />
        <p>{option.option}</p>
    </StyledOption>
)

export default OptionItem;