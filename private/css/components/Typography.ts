import variables from '../../variables.json';
import CSS from '../CSS';

class Typography extends CSS {
  fontWeight (): string {
    return `.font-weight-100 {
  font-weight: 100 !important;
}
.font-weight-200 {
  font-weight: 200 !important;
}
.font-weight-300 {
  font-weight: 300 !important;
}
.font-weight-400 {
  font-weight: 400 !important;
}
.font-weight-500 {
  font-weight: 500 !important;
}
.font-weight-600 {
  font-weight: 600 !important;
}
.font-weight-700 {
  font-weight: 700 !important;
}
.font-weight-800 {
  font-weight: 800 !important;
}
.font-weight-900 {
  font-weight: 900 !important;
}`;
  }

  textAlign ({ breakpoints, }: { breakpoints: typeof variables.breakpoints; }): string {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}text-align-center {
  text-align: center !important;
}
.${breakpoint.name}text-align-end {
  text-align: end !important;
}
.${breakpoint.name}text-align-justify {
  text-align: justify !important;
}
.${breakpoint.name}text-align-justify-all {
  text-align: justify-all !important;
}
.${breakpoint.name}text-align-left {
  text-align: left !important;
}
.${breakpoint.name}text-align-match-parent {
  text-align: match-parent !important;
}
.${breakpoint.name}text-align-right {
  text-align: right !important;
}
.${breakpoint.name}text-align-start {
  text-align: start !important;
}`,
      breakpoints
    );
  }

  css ({ breakpoints, }: { breakpoints: typeof variables.breakpoints; }): string {
    return `a {
  text-decoration: none;
}
a:focus,
a:hover {
  text-decoration: underline;
}
p {
  margin-bottom: 0;
  margin-top: 0;
}
.font-size-1,
.font-size-2,
.font-size-3,
.font-size-4,
.font-size-5,
.font-size-6,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--heading--font-family);
  font-weight: var(--heading--font-weight);
  line-height: var(--heading--line-height);
  margin-bottom: 0;
  margin-top: 0;
}
.font-size-1,
h1 {
  font-size: var(--h1--font-size);
}
.font-size-2,
h2 {
  font-size: var(--h2--font-size);
}
.font-size-3,
h3 {
  font-size: var(--h3--font-size);
}
.font-size-4,
h4 {
  font-size: var(--h4--font-size);
}
.font-size-5,
h5 {
  font-size: var(--h5--font-size);
}
.font-size-6,
h6 {
  font-size: var(--h6--font-size);
}
${this.fontWeight()}
${this.textAlign({ breakpoints, })}`;
  }
}

export default Typography;
