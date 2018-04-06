import styled from 'styled-components';
import { rem } from 'polished';

const TextField = styled.input`
  background: transparent;
  font-size: 64px;
  flex: 1;
  outline: none;
  border: none;
  border-bottom: solid 4px ${props => props.theme.colors.chrome300};
  color: ${props => props.theme.colors.text};
  transition: border-bottom 200ms ease;
  &:focus {
    border-bottom-color: ${props => props.theme.colors.textLight};
  }

  @media(max-width: 600px) {
    font-size: 32px;
  }
`;

export default TextField;
