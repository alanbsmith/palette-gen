import styled from 'styled-components';
import { rem } from 'polished';

import TextField from './TextField';

const Input = styled.div`
  display: flex;
  flex: 1;
  height: 80px;
  margin: ${props => rem(props.theme.dimensions.baseGrid)};
`;

Input.TextField = TextField;

export default Input;
