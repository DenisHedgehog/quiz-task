import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import optionStyle from '../../../constants/optionStyle.js';
import mainTheme from '../../../constants/mainTheme.js';
import screenSize from '../../../constants/screenSize.js';

const StyledOption = styled.div`
    background-color: ${(props) => {
        switch (props.optionStyle) {
            case optionStyle.CORRECT:
                return props.theme.correct_color;
            case optionStyle.INCORRECT:
                return props.theme.incorrect_color;
            default:
                return props.theme.default_color;
        }
    }
    };
    border: 2px solid;
    border-color: ${(props) => {
        switch (props.optionStyle) {
            case optionStyle.CORRECT:
                return props.theme.correct_border_color;
            case optionStyle.INCORRECT:
                return props.theme.incorrect_border_color;
            default:
                return props.theme.default_border_color;
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
    color: ${mainTheme.mid_color};

    @media (max-width: ${screenSize.MOBILE}) {
        width: 90vw;
    }
`;

const OptionItem = ({ style, option, currentOptionId, onCurrentOptionChange }) => (
    <ThemeProvider theme={mainTheme}>
        <StyledOption optionStyle={style} onClick={() => onCurrentOptionChange(option.id)} >
            <input
                name="answerItem"
                type="radio"
                checked={option.id === currentOptionId} />
            <p>{option.option}</p>
        </StyledOption>
    </ThemeProvider>
)

export default OptionItem;