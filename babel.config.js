module.exports = {
  presets: [
    ['react-app', { flow: false, typescript: true }],
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-typescript']
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ],
};
