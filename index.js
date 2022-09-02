import chalk from 'chalk';
import fs from 'fs';
//const fs = require('fs'); //fs: lib para acessar arquivos / dir

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push({[temp[1]]: temp[2]})
    }
    return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
    }

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho')); //Error objeto do Node
}

//async await
export default async function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
        return extraiLinks(texto); 
    }catch(erro){
        trataErro(erro);
    }finally {
        console.log(chalk.yellow('operação concluída'));
    }
}

//Função assíncrona 2


/*function pegaArquivo(caminhoDoArquivo){
    const enconding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, enconding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch((erro) => trataErro(erro))
}*/

//Função síncrona

/*function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    fs.readFile(caminhoDoArquivo, enconding, (erro , texto) => {

        if(erro){
            trataErro(erro);
            return;
        }
            console.log(chalk.green(texto));
        
        
    })
}*/


//pegaArquivo('./arquivos/texto1.md');

