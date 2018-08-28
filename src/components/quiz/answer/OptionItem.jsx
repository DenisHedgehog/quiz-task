import React from 'react';
import styled from 'styled-components';
import optionStyle from '../../../constants/optionStyle.js';
import screenSize from '../../../constants/screenSize.js';

const OptionWrapper = styled.div`
    background-color: ${({ theme, styleOption }) => {
        switch (styleOption) {
            case optionStyle.CORRECT:
                return theme.correctColor;
            case optionStyle.INCORRECT:
                return theme.incorrectColor;
            default:
                return theme.defaultColor;
        }
    }
    };
    border: 2px solid;
    border-color: ${({ theme, styleOption }) => {
        switch (styleOption) {
            case optionStyle.CORRECT:
                return theme.correctBorderColor;
            case optionStyle.INCORRECT:
                return theme.incorrectBorderColor;
            default:
                return theme.defaultBorderColor;
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
    color: ${({ theme }) => theme.midColor};

    @media (max-width: ${screenSize.MOBILE}) {
        width: 90vw;
    }
`;

const OptionItem = ({ style, option, currentOptionId, onCurrentOptionChange }) => (
    <OptionWrapper styleOption={style} onClick={() => onCurrentOptionChange(option.id)} >
        <input
            name="answerItem"
            type="radio"
            checked={option.id === currentOptionId} />
        <p>{option.option}</p>
    </OptionWrapper>
)

export default OptionItem;