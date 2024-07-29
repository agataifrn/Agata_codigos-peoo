const A = [[0, 5, 13],
           [1, 2, 2]];

const B = [[2, 2, 32],
           [9, 12, 12]];


const C = soma(A, B);

console.table(A);
console.table(B);
console.table(C);

function soma(a, b) {
    /* 
    Cria uma matriz pro resultado com um vetor vazio, 
    pra depois criar outros e preencher-los */
    let c = [];

    /* 
    Define que as linhas são o tamanho do "X" 
    (retorna 2, a quantidade de vetores/listas) */
    let linhas = a.length;
    /* 
    Define que as colunas são o tamanho de algum dos vetores de "X" 
    (retorna 3, a quantidade de elementos do primeiro vetor) */
    let colunas = a[0].length;

    // Percorre a linha (horizontal)
    for (let lin = 0; lin < linhas; lin++) {
            c[lin] = [];

            // Percorre a coluna (vertical)
            for (let col = 0; col < colunas; col++) {
                    c[lin][col] = a[lin][col] + b[lin][col];
            }
        /* 
        "lin" e "col" são os valores que estão rodando no momento do for, 
        os valores locais.
        As "linhas" e "colunas" são os valores globais a ser comparados. 
        */
    }
    return c;
}

