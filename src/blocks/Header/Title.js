import styled from 'styled-components';
import { rem } from 'polished';

const Title = styled.h1`
color: ${props => props.theme.colors.text};
  font-size: 64px;
  margin: ${props => rem(props.theme.dimensions.baseGrid)} 0;
`;

export default Title;
