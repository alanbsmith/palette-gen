import styled from 'styled-components';
import { rem } from 'polished';
import PropTypes from 'prop-types';

import Description from './Description';
import Text from './Text';
import Title from './Title';

const Swatch = styled.span`
  background: ${props => props.background};
  border: ${props => props.background ? 'transparent' : `solid 2px ${props.theme.colors.chrome200}`};
  border-radius: 4px;
  height: 80px;
  margin: ${props => rem(props.theme.dimensions.baseGrid)};
  width: 80px;
  transition: background 200ms ease;
`;

Swatch.defaultProps = {
  background: '#000',
};

Swatch.propTypes = {
  background: PropTypes.string,
};

Swatch.Description = Description;
Swatch.Text = Text;
Swatch.Title = Title;

export default Swatch;
