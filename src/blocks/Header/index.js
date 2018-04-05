import styled from 'styled-components';
import { rem } from 'polished';

import Text from './Text';
import Title from './Title';

const Header = styled.div`
  flex: 1;
  height: 200px;
  margin: ${props => rem(props.theme.dimensions.baseGrid)};
`;

Header.Title = Title;
Header.Text = Text;

export default Header;
