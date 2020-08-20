/*
 * Copyright 2020 Marek Kobida
 */

import * as helpers from '@redredsk/helpers/private';

export type DecodedResponsiveClassName = string;

export type EncodedResponsiveClassName<T extends number | string> =
  | T
  | [ T, ]
  | [ T, { [breakpointName: string]: T; }, ]
  | { [breakpointName: string]: T; };

function decodeResponsiveClassName ($: string, encodedResponsiveClassName?: EncodedResponsiveClassName<number | string>): DecodedResponsiveClassName[] {
  let decodedResponsiveClassNames: DecodedResponsiveClassName[] = [];

  function addDecodedResponsiveClassName (decodedResponsiveClassName: DecodedResponsiveClassName) {
    decodedResponsiveClassNames = [ ...decodedResponsiveClassNames, decodedResponsiveClassName, ];
  }

  // [ T, ]
  if (helpers.types.isArray(encodedResponsiveClassName)) {
    addDecodedResponsiveClassName(`${$}${encodedResponsiveClassName[0]}`);

    // [ T, { [breakpointName: string]: T }, ]
    if (helpers.types.isObject(encodedResponsiveClassName[1])) {
      for (const breakpointName in encodedResponsiveClassName[1]) {
        addDecodedResponsiveClassName(`${breakpointName}${$}${encodedResponsiveClassName[1][breakpointName]}`);
      }
    }
  }

  // T
  if (helpers.types.isNumber(encodedResponsiveClassName)) {
    addDecodedResponsiveClassName(`${$}${encodedResponsiveClassName}`);
  }

  // { [breakpointName: string]: T }
  if (helpers.types.isObject(encodedResponsiveClassName)) {
    for (const breakpointName in encodedResponsiveClassName) {
      addDecodedResponsiveClassName(`${breakpointName}${$}${encodedResponsiveClassName[breakpointName]}`);
    }
  }

  // T
  if (helpers.types.isString(encodedResponsiveClassName)) {
    addDecodedResponsiveClassName(`${$}${encodedResponsiveClassName}`);
  }

  return decodedResponsiveClassNames;
}

export default decodeResponsiveClassName;
