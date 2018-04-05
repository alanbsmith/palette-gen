import styled from "styled-components";
import { rem } from "polished";

const Content = styled.div`
  display: flex;
  padding: ${props => rem(props.theme.dimensions.baseGrid)};
  max-width: 1200px;
  margin: auto;
  flex-direction: column;
  flex: 1;
`;

export default Content;
