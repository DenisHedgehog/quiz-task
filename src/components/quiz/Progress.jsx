import React from 'react';
import styled from 'styled-components';
import BoldText from '../BoldText.jsx';
import mainTheme from '../../constants/mainTheme.js';

const ProgressWrapper = styled.p`
    color: ${mainTheme.light_color};
`;

const Progress = ({questionNumber, questionCount}) => (
    <ProgressWrapper>
        <BoldText>{questionNumber}</BoldText> of <BoldText>{questionCount}</BoldText>
    </ProgressWrapper>
)

export default Progress;