import styled from 'styled-components';
import { rem } from 'polished';
import PropTypes from 'prop-types';

import Swatch from '../Row';

import Color from './Color';
import Description from './Description';
import Text from './Text';
import Title from './Title';

Swatch.Color = Color;
Swatch.Description = Description;
Swatch.Text = Text;
Swatch.Title = Title;

export default Swatch;
