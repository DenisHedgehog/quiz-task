import React from 'react';
import styled from 'styled-components';
import BoldText from '../BoldText.jsx';

const StyledProgress = styled.p`
    color: ${({ theme }) => theme.lightColor};
`;

const Progress = ({ questionNumber, questionCount }) => (
    <StyledProgress>
        <BoldText>{questionNumber}</BoldText> of <BoldText>{questionCount}</BoldText>
    </StyledProgress>
)

export default Progress;