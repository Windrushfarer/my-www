module.exports = {
  templates: `${__dirname}/dev/templates`,
  helpers: {
    relative: (from, to) => path.relative(from, to),
    src: () => __dirname,
  },
};
