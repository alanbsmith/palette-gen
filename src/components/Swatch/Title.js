import styled from 'styled-components';
import { rem } from 'polished';

const Title = styled.h3`
  color: ${props => props.theme.colors.text};
  font-weight: 600;
  margin: 0;
`;

export default Title;
