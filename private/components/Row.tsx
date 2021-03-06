/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import Div from './html/Div';

import { ElementParametersWithCommonParameters } from '../helpers/common.types';

export default React.forwardRef<
  HTMLDivElement,
  ElementParametersWithCommonParameters<'div'>
>(function Row(
  { display = 'flex', flexWrap = 'wrap', mX = '!2', ...parameters },
  reference
) {
  return (
    <Div
      {...parameters}
      display={display}
      flexWrap={flexWrap}
      mX={mX}
      ref={reference}
    />
  );
});
