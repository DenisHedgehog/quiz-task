import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
    color: rgba(0, 0, 0, 0.5);
`;

const Text = ({text}) => <StyledHeader>{text}</StyledHeader>;

export default Text;