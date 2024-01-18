const path = require('path')
//essa linha a cima importa uma função utilizada pelo node.js, ela vai fazer com que a separação do diretorio seja mudada de acordo com sistema operacional.
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
    mode: isDevelopment ? 'development' : 'production', // ou 'production' dependendo do ambiente
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //Essa configuração faz com que quando você especionar a pagina e for no javascript ele vai estar do jeito que você escreveu e não da forma compilada pelo babel.
    entry: path.resolve(__dirname, "src", "index.jsx"),
    //então ao invez de utilizar src/index.jsx, utilizamos o codigo acima, o __dirname puxa o caminho do documento atual.
    //nesse caso temos que o entry: e o diretorio do documento de origen e o output é o de destino do documento modificado.
    output: {
        path: path.resolve(__dirname, 'dist'),
        //path vem o caminho
        filename: "bundle.js"
        //filename o nome do arquivo a ser criado
            
    },
    resolve: {
        alias: {
            'core-js/modules/es.symbol.description': 'core-js/modules/es.symbol.description'
        }
    },
    
    resolve: {
        extensions: [".js", ".jsx"]
        //com essa configuração dizemos que o webpack vai ler arquivos js e jsx
    },
    devServer: {
        //Essa configuração mosta aonde está o nosso public html, para que o webpack-dev-serve verifique se tem modificação e altere o bundle.
        static: path.resolve(__dirname, "public")
    },
    plugins: [
        //Essa configuração a baixo vai fazer com que o html seja enviado junto com o index.js para a pasta dist já com o bundle ou outro nome caso você tenha mudado
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    //o que temos aqui é que o webpack vai acessar um arquivos jsx e apagar todos os arquivos que vem no node-modules, e usar o babel para converter esse jsx.
                    // de um npm install --save-dev babel-loader
                    options: {
                        sourceMaps: true
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node-modules/,
                use: ['style-loader','css-loader','sass-loader'],
                //o que temos aqui é que o webpack vai acessar um arquivos css e apagar todos os arquivos que vem no node-modules, e usar o babel para converter esse css.
                // de um npm install --save-dev style-loader css-loader
                
            }
        ]
    }
    
}