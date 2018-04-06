import styled from 'styled-components';
import { rem } from 'polished';

import Row from '../Row';

import TextField from './TextField';

const Input = Row.extend`
  height: 120px;
  margin: ${props => rem(props.theme.dimensions.baseGrid)};
`;

Input.TextField = TextField;

export default Input;
