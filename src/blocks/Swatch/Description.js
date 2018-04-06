import styled from "styled-components";
import { rem } from "polished";

const Description = styled.div`
  min-height: 80px;
  flex: 1;
  margin: ${props => rem(props.theme.dimensions.baseGrid)};

  h3 {
    
  }
`;

export default Description;
