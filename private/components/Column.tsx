/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import Div from './html/Div';

import { ElementParametersWithCommonParameters } from '../helpers/common.types';

export default React.forwardRef<
  HTMLDivElement,
  ElementParametersWithCommonParameters<'div'>
>(function Column(
  { flex = 'none', pX = '2', width = 'auto', ...parameters },
  reference
) {
  return (
    <Div {...parameters} flex={flex} pX={pX} ref={reference} width={width} />
  );
});
