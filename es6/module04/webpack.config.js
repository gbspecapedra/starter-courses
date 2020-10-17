module.exports = {
  entry: ['@babel/polyfill', './src/script.js'], //arquivo principal
  output: {
    path: __dirname + '/public', //pra qual lugar e arquivo devo enviar o código convertido
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/public' //é o caminho pra onde deve abrir o servidor
  },
  module: {
    rules: [ //como o webpack deve se comportar ao importar outros arquivos
      {
        test: /\.js$/, //expressão regular para buscar os arquivos js
        exclude: /node_modules/, //não executar nenhum arquivo de dentro da pasta
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};