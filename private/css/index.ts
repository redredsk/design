/*
 * Copyright 2020 Marek Kobida
 */

import fs from 'fs';
import path from 'path';

import alignContent from './commonParameters/alignContent';
import alignItems from './commonParameters/alignItems';
import alignSelf from './commonParameters/alignSelf';
import container from './container';
import display from './commonParameters/display';
import flex from './commonParameters/flex';
import flexDirection from './commonParameters/flexDirection';
import flexWrap from './commonParameters/flexWrap';
import justifyContent from './commonParameters/justifyContent';
import root from './root';
import spacing from './spacing';
import textAlign from './commonParameters/textAlign';
import toString from './helpers/toString';
import width from './commonParameters/width';

function toFile(css: string, filePath: string) {
  fs.writeFileSync(path.resolve('./packages/design/public', filePath), css);
}

toFile(toString(alignContent()), './commonParameters/alignContent.css');
toFile(toString(alignItems()), './commonParameters/alignItems.css');
toFile(toString(alignSelf()), './commonParameters/alignSelf.css');
toFile(toString(container()), './container.css');
toFile(toString(display()), './commonParameters/display.css');
toFile(toString(flex()), './commonParameters/flex.css');
toFile(toString(flexDirection()), './commonParameters/flexDirection.css');
toFile(toString(flexWrap()), './commonParameters/flexWrap.css');
toFile(toString(justifyContent()), './commonParameters/justifyContent.css');
toFile(toString(root()), './root.css');
toFile(toString(spacing()), './spacing.css');
toFile(toString(textAlign()), './commonParameters/textAlign.css');
toFile(toString(width()), './commonParameters/width.css');

function isObject(item: any): boolean {
  return item && typeof item === 'object' && !Array.isArray(item);
}

function merge(target: any, ...sources: any[]): any {
  if (!sources.length) {
    return target;
  }

  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }

        merge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return merge(target, ...sources);
}

const css = merge(
  {},
  root(),
  //
  alignContent(),
  alignItems(),
  alignSelf(),
  container(),
  display(),
  flex(),
  flexDirection(),
  flexWrap(),
  justifyContent(),
  spacing(),
  textAlign(),
  width()
);

toFile(toString(css), './index.css');
