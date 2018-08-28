import React from 'react';
import styled from 'styled-components';
import BoldText from '../BoldText.jsx';

const ProgressWrapper = styled.p`
    color: ${({theme}) => theme.light_color};
`;

const Progress = ({questionNumber, questionCount}) => (
    <ProgressWrapper>
        <BoldText>{questionNumber}</BoldText> of <BoldText>{questionCount}</BoldText>
    </ProgressWrapper>
)

export default Progress;