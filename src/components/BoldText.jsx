import React from 'react';
import styled from 'styled-components';
import mainTheme from '../constants/mainTheme.js';

const StyledBoldText = styled.span`
    font-weight: ${mainTheme.font_weight_bold};
    color: ${mainTheme.mid_color};
`;

const BoldText = ({text}) => <StyledBoldText>{text}</StyledBoldText>

export default BoldText;