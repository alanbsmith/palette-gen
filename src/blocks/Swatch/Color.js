import styled from 'styled-components';
import { rem } from 'polished';
import PropTypes from 'prop-types';

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

export default Swatch;
