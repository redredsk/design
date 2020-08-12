interface Variables {
  ':root': { name: string; value: string; }[];
  breakpoints: (null | { name: string; size: number; })[];
  sizes: { name: string; size: number; }[];
}

const variables: Variables = {
  ':root': [
    {
      name: 'body--background-color',
      value: '255, 255, 255',
    },
    {
      name: 'body--color',
      value: '0, 0, 0',
    },
    {
      name: 'body--font-family',
      value: 'system-ui, -apple-system, Segoe UI, Helvetica Neue, sans-serif',
    },
    {
      name: 'body--font-size',
      value: '1rem',
    },
    {
      name: 'body--font-weight',
      value: '400',
    },
    {
      name: 'body--line-height',
      value: '1.5',
    },
    {
      name: 'border--border-color',
      value: '128, 128, 128',
    },
    {
      name: 'border--border-width',
      value: '0.125rem',
    },
    {
      name: 'button--background-color',
      value: '128, 128, 128',
    },
    {
      name: 'button--border-color',
      value: 'var(--button--background-color)',
    },
    {
      name: 'button--border-width',
      value: 'var(--border--border-width)',
    },
    {
      name: 'button--color',
      value: '255, 255, 255',
    },
    {
      name: 'button--focus--background-color',
      value: '0, 0, 0',
    },
    {
      name: 'button--focus--border-color',
      value: 'var(--button--focus--background-color)',
    },
    {
      name: 'button--focus--color',
      value: 'var(--button--color)',
    },
    {
      name: 'h1--font-size',
      value: '2.75rem',
    },
    {
      name: 'h2--font-size',
      value: '2.25rem',
    },
    {
      name: 'h3--font-size',
      value: '1.75rem',
    },
    {
      name: 'h4--font-size',
      value: '1.5rem',
    },
    {
      name: 'h5--font-size',
      value: '1.25rem',
    },
    {
      name: 'h6--font-size',
      value: '1rem',
    },
    {
      name: 'heading--font-family',
      value: 'var(--body--font-family)',
    },
    {
      name: 'heading--font-weight',
      value: '500',
    },
    {
      name: 'heading--line-height',
      value: '1.25',
    },
    {
      name: 'input--background-color',
      value: '255, 255, 255',
    },
    {
      name: 'input--border-color',
      value: '128, 128, 128',
    },
    {
      name: 'input--border-width',
      value: 'var(--border--border-width)',
    },
    {
      name: 'input--checked--background-color',
      value: 'var(--input--focus--border-color)',
    },
    {
      name: 'input--checked--border-color',
      value: 'var(--input--focus--border-color)',
    },
    {
      name: 'input--color',
      value: 'var(--body--color)',
    },
    {
      name: 'input--focus--background-color',
      value: 'var(--input--background-color)',
    },
    {
      name: 'input--focus--border-color',
      value: '0, 0, 0',
    },
    {
      name: 'input--focus--color',
      value: 'var(--input--color)',
    },
    {
      name: 'label--color',
      value: 'var(--body--color)',
    },
    {
      name: 'select--background-color',
      value: 'var(--input--background-color)',
    },
    {
      name: 'select--border-color',
      value: 'var(--input--border-color)',
    },
    {
      name: 'select--border-width',
      value: 'var(--input--border-width)',
    },
    {
      name: 'select--color',
      value: 'var(--input--color)',
    },
    {
      name: 'select--focus--background-color',
      value: 'var(--input--focus--background-color)',
    },
    {
      name: 'select--focus--border-color',
      value: 'var(--input--focus--border-color)',
    },
    {
      name: 'select--focus--color',
      value: 'var(--input--focus--color)',
    },
  ],
  breakpoints: [
    null,
    {
      name: '\\#',
      size: 36,
    },
    {
      name: '\\#\\#',
      size: 48,
    },
    {
      name: '\\#\\#\\#',
      size: 60,
    },
  ],
  sizes: [
    {
      name: '0',
      size: 0,
    },
    {
      name: '1',
      size: 0.25,
    },
    {
      name: '2',
      size: 0.5,
    },
    {
      name: '3',
      size: 0.75,
    },
    {
      name: '4',
      size: 1,
    },
    {
      name: '5',
      size: 1.25,
    },
    {
      name: '6',
      size: 1.5,
    },
    {
      name: '7',
      size: 1.75,
    },
    {
      name: '8',
      size: 2,
    },
  ],
};

export default variables;
