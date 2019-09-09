const imports = require('./src/theme/imports');

module.exports = {
  plugins: {
    'postcss-preset-env': {
      importFrom: imports,
      stage: 1,
      preserve: false,
    }
  }
}
