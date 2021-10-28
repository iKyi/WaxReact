
module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    mode: 'extends',
    configure: {
      module: {
        rules: [
          {
            test: /\.mjs$/,
            include: /node_modules/,
            type: "javascript/auto"
          }
        ]
      },
    }
  },
};