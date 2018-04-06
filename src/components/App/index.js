import React, { Component } from 'react';
import styled from 'styled-components';
import { adjustHue } from 'polished';

import Content from '../../blocks/Content';
import Header from '../../blocks/Header';
import Input from '../../blocks/Input';
import Row from '../../blocks/Row';
import Page from '../../blocks/Page';

import validColor from '../../utils/validColor';

import Palette from '../Palette';


class App extends Component {
  state = {
    color: '#1FB6FF',
  };

  handleChange = (e) => {
    const { value } = e.target;
    const color = value.replace(/#*/, '#');
    this.setState({ color });
  }

  render() {

    const color = validColor(this.state.color) && this.state.color;

    return (
      <Page>
        <Content>
          <Row>
            <Header>
              <Header.Title>Palette Gen</Header.Title>
              <Header.Text>type a hex base color to generate a palette</Header.Text>
            </Header>
          </Row>
          <Input>
            <Input.TextField autoFocus size="7" type="text" value={this.state.color} onChange={this.handleChange} />
          </Input>
          <Palette title="Base Palette" color={color} />
          <Palette title="Complementary Palette" color={color ? adjustHue(180, color) : color} />
        </Content>
      </Page>
    );
  }
};

export default App;

// const MainSwatch = Swatch.extend`
//   margin: ${props => rem(props.theme.dimensions.baseGrid)};
//   height: 200px;
//   width: 200px;
//
//   @media(max-width: 600px) {
//     width: auto;
//   }
// `;
