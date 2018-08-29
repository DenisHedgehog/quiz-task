import styled from 'styled-components';

const BoldText = styled.span`
    font-weight: ${({ theme }) => theme.fontWeightBold};
    color: ${({ theme }) => theme.midColor};
`;

export default BoldText;