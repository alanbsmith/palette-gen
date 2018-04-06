import styled from 'styled-components';
import { rem } from 'polished';

import Column from '../Column';

const Section = Column.extend`
  min-width: ${rem(320)};
`;

export default Section;
