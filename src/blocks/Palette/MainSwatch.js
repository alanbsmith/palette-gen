import styled from 'styled-components';
import { rem } from 'polished';
import PropTypes from 'prop-types';

import Swatch from '../Swatch';

const MainSwatch = Swatch.Color.extend`
  margin: ${props => rem(props.theme.dimensions.baseGrid)};
  height: 200px;
  width: 200px;

  @media(max-width: 600px) {
    width: auto;
  }
`;

export default MainSwatch;
