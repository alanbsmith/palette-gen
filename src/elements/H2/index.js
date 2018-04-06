import styled from 'styled-components';
import { rem } from 'polished';

const H2 = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: 48px;
  font-weight: 600;
  margin: ${props => rem(props.theme.dimensions.baseGrid)} 0;

  @media(max-width: 600px) {
    font-size: 24px;
  }
`;

export default H2;
