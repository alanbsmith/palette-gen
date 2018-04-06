import React, { Component } from 'react';
import styled from 'styled-components';
import { shade, tint, parseToRgb } from 'polished';

import Row from '../../blocks/Row';
import PaletteBlock from '../../blocks/Palette';
import Swatch from '../../blocks/Swatch';

import H2 from '../../elements/H2';

import validColor from '../../utils/validColor';


const tints = [
  { name: '000', value: 0 },
  { name: '100', value: 0.2 },
  { name: '200', value: 0.4 },
  { name: '300', value: 0.6 },
  { name: '400', value: 0.8 },
];

const shades = [
  { name: '500', value: 1 },
  { name: '600', value: 0.8 },
  { name: '700', value: 0.6 },
  { name: '800', value: 0.4 },
  { name: '900', value: 0.2 },
];

function renderPalette(color, values = [], type) {
  const swatches = values.map(({ name, value }) => {
    const hex = getHex(color, type, value);
    const rgb = toRgb(hex);

    return (
      <Swatch key={name}>
        <Swatch.Color background={hex} />
        <Swatch.Description>
          <Swatch.Title>{name}</Swatch.Title>
          <Swatch.Text>{hex || 'n/a'}</Swatch.Text>
          <Swatch.Text>{rgb || 'n/a'}</Swatch.Text>
        </Swatch.Description>
      </Swatch>
    );
  });

  return (
    <PaletteBlock.Section>
      <h3>{type}s</h3>
      {swatches}
    </PaletteBlock.Section>
  )
}

function getHex(hex, type, percentage = 1) {
  switch (true) {
    case !validColor(hex):
      return null;
    case type === 'tint':
      return tint(percentage, hex);
    case type === 'shade':
      return shade(percentage, hex);
    default:
      return hex;
  }
}

function toRgb(hex) {
  if (!validColor(hex)) {
    return null;
  }

  const rgb = parseToRgb(hex);
  return `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
}

function Palette(props) {
  return (
    <PaletteBlock>
      <PaletteBlock.Section>
        <H2>{props.title}</H2>
        <PaletteBlock.MainSwatch background={getHex(props.color)} />
        <div>Base Color</div>
        <div>{props.color}</div>
        <div>{toRgb(props.color)}</div>
      </PaletteBlock.Section>
      {renderPalette(props.color, tints, 'tint')}
      {renderPalette(props.color, shades, 'shade')}
    </PaletteBlock>
  )
}

export default Palette;
