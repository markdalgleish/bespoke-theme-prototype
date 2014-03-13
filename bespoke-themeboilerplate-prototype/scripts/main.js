bespoke.from('#bespoke-themeboilerplate', {
  keys: true,
  touch: true,
  bullets: '.bullet, li, p, blockquote, pre, ' + ['h1', 'h2', 'h3', 'h4'].map(function(selector) {
    return '.bespoke-slide:not(:first-child):not(:last-child) ' + selector;
  }),
  scale: true,
  hash: true,
  progress: true,
  state: true,
  forms: true
});
