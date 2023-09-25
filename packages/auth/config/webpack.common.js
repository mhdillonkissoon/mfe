module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // <-- changed
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-react', // <-- added
              '@babel/preset-env'
            ],
            plugins: [
              '@babel/plugin-transform-runtime' // <-- added
            ]
          }
        }
      }
    ]
  }
};