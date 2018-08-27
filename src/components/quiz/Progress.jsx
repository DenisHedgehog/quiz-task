import React from 'react';
import styled from 'styled-components';

const StyledProgress = styled.p`
    color: rgba(0, 0, 0, 0.4);
`;

const BoldText = styled.span`
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
`;

const Progress = ({questionNumber, questionCount}) => (
    <StyledProgress>
        <BoldText>{questionNumber}</BoldText> of <BoldText>{questionCount}</BoldText>
    </StyledProgress>
)

export default Progress;