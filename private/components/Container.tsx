/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import Div from './html/Div';

import { ComponentParametersWithCommonParameters } from '../helpers/common.types';

export default React.forwardRef<
  HTMLDivElement,
  ComponentParametersWithCommonParameters<'div'>
>(function Container(
  { className, mX = 'auto', pX = 4, ...parameters },
  reference
) {
  return (
    <Div
      {...parameters}
      className={['container', className]}
      mX={mX}
      pX={pX}
      ref={reference}
    />
  );
});
