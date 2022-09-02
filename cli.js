//const pegaArquivo = require('./index');
import chalk from 'chalk';
import pegaArquivo from './index.js'
import validaURLs from './http-validacao.js';

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    if (caminhoDoArquivo[3] === 'validar'){
        console.log(chalk.yellow('links validados'), await validaURLs(resultado));
    }else{
        console.log(chalk.yellow('lista de links'), resultado);
    }
    
}

processaTexto(caminho);