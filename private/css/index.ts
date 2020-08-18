import writeFile from '@redredsk/helpers/private/writeFile';

import CSS from './CSS';
import alignContent from './commonParameters/alignContent';
import alignItems from './commonParameters/alignItems';
import alignSelf from './commonParameters/alignSelf';
import display from './commonParameters/display';
import flexDirection from './commonParameters/flexDirection';
import flexWrap from './commonParameters/flexWrap';
import justifyContent from './commonParameters/justifyContent';
import textAlign from './commonParameters/textAlign';
import width from './commonParameters/width';
import Button from './components/Button';
import Form from './components/Form';
import Helpers from './components/Helpers';

class Index extends CSS {
  css (): string {
    return `*, *::after, *::before {
  box-sizing: border-box;
}
.absolute {
  position: absolute;
}
.border {
  border: var(--border--border-width) solid rgb(var(--border--border-color)) !important;
}
.border-bottom {
  border-bottom: var(--border--border-width) solid rgb(var(--border--border-color)) !important;
}
.border-left {
  border-left: var(--border--border-width) solid rgb(var(--border--border-color)) !important;
}
.border-radius {
  border-radius: 0.125rem;
}
.border-right {
  border-right: var(--border--border-width) solid rgb(var(--border--border-color)) !important;
}
.border-top {
  border-top: var(--border--border-width) solid rgb(var(--border--border-color)) !important;
}
.container {
  max-width: 60rem;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  font-family: var(--heading--font-family);
  font-weight: var(--heading--font-weight);
  line-height: var(--heading--line-height);
}
.h1, h1 {
  font-size: var(--h1--font-size);
}
.h2, h2 {
  font-size: var(--h2--font-size);
}
.h3, h3 {
  font-size: var(--h3--font-size);
}
.h4, h4 {
  font-size: var(--h4--font-size);
}
.h5, h5 {
  font-size: var(--h5--font-size);
}
.h6, h6 {
  font-size: var(--h6--font-size);
}
.relative {
  position: relative;
}
:root {
${this.for(($) => `  --${$.left}: ${$.right};`, this.variables[':root'])}
${this.for(($) => `  --size-${$.left}: ${$.right}rem;`, this.variables['sizes'])}
}
a {
  color: inherit;
  text-decoration: none;
}
a:focus, a:hover {
  text-decoration: underline;
}
body {
  -webkit-text-size-adjust: 100%;
  background-color: rgb(var(--body--background-color));
  color: rgb(var(--body--color));
  font-family: var(--body--font-family);
  font-size: var(--body--font-size);
  font-weight: var(--body--font-weight);
  line-height: var(--body--line-height);
  margin: 0;
}
button {
  border-radius: 0; /* Microsoft Edge */
}
button, [type="button"], [type="reset"], [type="submit"] {
  -moz-appearance: button;
  -webkit-appearance: button;
}
button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
}
button:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {
  cursor: pointer;
}
table {
  border-collapse: collapse;
}
textarea {
  resize: vertical;
}
${alignContent()}
${alignItems()}
${alignSelf()}
${display()}
${flexDirection()}
${flexWrap()}
${justifyContent()}
${textAlign()}
${width()}
${new Button().css()}
${new Form().css()}
${new Helpers().css()}
`;
  }
}

writeFile('./packages/design/index.css', new Index().css());
