const A = [
    [1, 3, 5],
    [7, 9, 11],
    [13, 15, 17]
];

const B = [
    [2, 4, 6],
    [8, 10, 12],
    [14, 16, 18]
];

function somaM() {
    let resultado = [];
    for (let i = 0; i < A.length; i++) {
            resultado[i] = [];
            for (let j = 0; j < A[i].length; j++) {
                    resultado[i][j] = A[i][j] + B[i][j];
            }
    }
    return resultado;
}

const C = somaM(A, B);
console.table(A);
console.table(B);
console.table(C);
