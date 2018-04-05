import styled from 'styled-components';
import { rem } from 'polished';

const Text = styled.div`
  font-size: 16px;
  color: ${props => props.theme.colors.textLight};
`;

export default Text;
