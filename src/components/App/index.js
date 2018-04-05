import React, { Component } from 'react';
import styled from 'styled-components';
import { rem, shade, tint, parseToRgb } from 'polished';

import Header from '../../blocks/Header';
import Input from '../../blocks/Input';

import Content from '../Content';
import Swatch from '../Swatch';

class App extends Component {
  state = {
    color: '#123456',
  };

  handleChange = (e) => {
    const { value } = e.target;
    const color = value.replace(/#*/, '#');
    this.setState({ color });
  }

  validColor() {
    const validHex = /^#(?:[0-9a-fA-F]{3}){1,2}$/
    return validHex.test(this.state.color);
  }

  setHex(type, percentage) {
    if (!this.validColor()) {
      return null;
    }

    if (type === 'tint') {
     return tint(percentage, this.state.color);
    }

    if (type === 'shade') {
      return shade(percentage, this.state.color);
    }
  }

  toRgb(hex) {
    if (!this.validColor()) {
      return null;
    }

    const rgb = parseToRgb(hex);
    return `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
  }

  renderTints() {
    const tints = [
      { name: '000', value: 0 },
      { name: '100', value: 0.2 },
      { name: '200', value: 0.4 },
      { name: '300', value: 0.6 },
      { name: '400', value: 0.8 },
    ];

    const swatches = tints.map(({ name, value }) => {
      const hex = this.setHex('tint', value);
      const rgb = this.toRgb(hex);
      return (
        <Row key={name}>
          <Swatch background={this.setHex('tint', value)} />
          <Swatch.Description>
            <Swatch.Title>{name}</Swatch.Title>
            <Swatch.Text>{hex || 'n/a'}</Swatch.Text>
            <Swatch.Text>{rgb || 'n/a'}</Swatch.Text>
          </Swatch.Description>
        </Row>
      );
    });

    return (
      <Column style={{ minWidth: '300px' }}>
        <Swatch.Description>
          <h2 style={{ margin: 0 }}>Tints</h2>
        </Swatch.Description>
        {swatches}
      </Column>
    );
  }

  renderShades() {
    const shades = [
      { name: '500', value: 1 },
      { name: '600', value: 0.8 },
      { name: '700', value: 0.6 },
      { name: '800', value: 0.4 },
      { name: '900', value: 0.2 },
    ];

    const swatches = shades.map(({ name, value }) => {
      const hex = this.setHex('shade', value);
      const rgb = this.toRgb(hex);
      return (
        <Row key={name}>
          <Swatch background={this.setHex('shade', value)} />
          <Swatch.Description>
            <Swatch.Title>{name}</Swatch.Title>
            <Swatch.Text>{hex || 'n/a'}</Swatch.Text>
            <Swatch.Text>{rgb || 'n/a'}</Swatch.Text>
          </Swatch.Description>
        </Row>
      );
    });

    return (
      <Column style={{ minWidth: '300px' }}>
        <Swatch.Description>
          <h2 style={{ margin: 0 }}>Shades</h2>
        </Swatch.Description>
        {swatches}
      </Column>
    );
  }

  render() {
    return (
      <AppWrapper>
        <Content>
          <Row>
            <Header>
              <Header.Title>Palette Gen</Header.Title>
              <Header.Text>type a hex base color to generate a monochromatic palette</Header.Text>
            </Header>
          </Row>
          <Row>
            <Input>
              <Input.TextField autoFocus type="text" value={this.state.color} onChange={this.handleChange} />
            </Input>
          </Row>
          <Row style={{ flexWrap: 'wrap' }}>
            <Column style={{ minWidth: '232px', flex: 'none', minHeight: '232px', display: 'flex', flexDirection: 'column' }}>
              <MainSwatch background={this.setHex('tint', 1)} />
              <MainSwatch.Description>
                <MainSwatch.Title>Base Color</MainSwatch.Title>
                <MainSwatch.Text>{this.state.color}</MainSwatch.Text>
                <MainSwatch.Text>{this.toRgb(this.state.color) || 'n/a'}</MainSwatch.Text>
              </MainSwatch.Description>
            </Column>
            {this.renderTints()}
            {this.renderShades()}
          </Row>
        </Content>
      </AppWrapper>
    );
  }
};

export default App;

const AppWrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex: 1;
`;


const MainSwatch = Swatch.extend`
  margin: ${props => rem(props.theme.dimensions.baseGrid)};
  height: 200px;
  width: auto;
`;

const Column = styled.div`
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`
