import styled from 'styled-components';
import { rem } from 'polished';

const Text = styled.p`
  font-size: 24px;
  color: ${props => props.theme.colors.textLight};
  margin: ${props => rem(props.theme.dimensions.baseGrid)} 0;
`;

export default Text;
