// JSON -> JavaScript Object Notation
const produtos = [
    {
        codigo: 1,
        preco: 5.99,
        descricao: "Salgado"
    },
    {
        codigo: 2,
        preco: 4.50,
        descricao: "Snickers"
    },
    {
        codigo: 3,
        preco: 0.5,
        descricao: "Quebra-queixo"
    }
];
// TODO Obter os dados de produto a partir de um ARQUIVO JSON
// TODO Refatorar a função calculaDesconto()

function calculaDesconto(codigoProduto, qtdeProduto) {

    let preco;
    let descricao;
    let desconto;
    let valorFinal;

    // percorre o vetor de produtos para pesquisa
    for (let i = 0; i < produtos.length; i++) {

        // se o código for igual ao procurado, obtém o preco
        if (produtos[i].codigo === codigoProduto) {

            preco = produtos[i].preco;
            descricao = produtos[i].descricao;
        }
    }

    // atribui o desconto com base na quantidade comprada
    if (qtdeProduto >= 3 && qtdeProduto <= 5) {

        desconto = 0.02;

    } else if (qtdeProduto >= 6 && qtdeProduto <= 10) {

        desconto = 0.03;

    } else if (qtdeProduto > 10) {

        desconto = 0.05;

    } else {

        desconto = 0;

    }

    valorFinal = (preco * qtdeProduto) - (preco * qtdeProduto * desconto);

    return {
        codigo: codigoProduto,
        preco: preco,
        descricao: descricao,
        valorFinal: valorFinal
    };


}