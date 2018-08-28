import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    font-size: 16px;
    padding: 16px;
    width: 120px;
    border: none;
    border-radius: 4px;
    color: white;
    background-color: ${({ theme, disabled }) => disabled ? theme.disabledButtonColor : theme.buttonColor};
`;

const Button = ({ currentOptionId, onQuestionAnswerChange, text }) => (
    <ButtonWrapper
        onClick={onQuestionAnswerChange}
        disabled={currentOptionId === null}>{text}</ButtonWrapper>
)

export default Button;