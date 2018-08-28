import styled from 'styled-components';

const BoldText = styled.span`
    font-weight: ${({theme}) => theme.font_weight_bold};
    color: ${({theme}) => theme.mid_color};
`;

export default BoldText;