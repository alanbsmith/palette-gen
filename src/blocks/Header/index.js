import styled from 'styled-components';
import { rem } from 'polished';

import Text from './Text';
import Title from './Title';

const Header = styled.div`
  height: 200px;
  margin: ${props => rem(props.theme.dimensions.baseGrid)};

  @media(max-width: 600px) {
    height: 100px;
  }
`;

Header.Title = Title;
Header.Text = Text;

export default Header;
