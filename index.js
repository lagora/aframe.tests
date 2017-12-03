export const run = selector => () => {
  console.info('...', 'test');
};

document.addEventListener(
    'DOMContentLoaded',
    run('#root'),
);
