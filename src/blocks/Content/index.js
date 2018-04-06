import styled from "styled-components";
import { rem } from "polished";

const Content = styled.div`
  display: flex;
  padding: ${props => rem(props.theme.dimensions.baseGrid)};
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

export default Content;
