import React from 'react';
import styled from 'styled-components';
import optionStyle from '../../../constants/optionStyle.js';
import screenSize from '../../../constants/screenSize.js';

const StyledOption = styled.div`
    background-color: ${({ theme, styleOption }) => {
        switch (styleOption) {
            case optionStyle.CORRECT:
                return theme.correct_color;
            case optionStyle.INCORRECT:
                return theme.incorrect_color;
            default:
                return theme.default_color;
        }
    }
    };
    border: 2px solid;
    border-color: ${({ theme, styleOption }) => {
        switch (styleOption) {
            case optionStyle.CORRECT:
                return theme.correct_border_color;
            case optionStyle.INCORRECT:
                return theme.incorrect_border_color;
            default:
                return theme.default_border_color;
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
    color: ${({ theme }) => theme.mid_color};

    @media (max-width: ${screenSize.MOBILE}) {
        width: 90vw;
    }
`;

const OptionItem = ({ style, option, currentOptionId, onCurrentOptionChange }) => (
    <StyledOption styleOption={style} onClick={() => onCurrentOptionChange(option.id)} >
        <input
            name="answerItem"
            type="radio"
            checked={option.id === currentOptionId} />
        <p>{option.option}</p>
    </StyledOption>
)

export default OptionItem;