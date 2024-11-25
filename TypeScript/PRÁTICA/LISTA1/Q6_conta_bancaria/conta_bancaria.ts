export class ContaBancaria {
    private saldo : number;
    private titular : string;

    constructor(saldo: number, titular: string) {
        this.saldo = saldo;
        this.titular = titular;
    }

    depositar(valor: number) : void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Valor de R$${valor.toFixed(2)} depositado com sucesso!`)
        }
        else {
            console.log('O valor do depósito deve ser positivo, tente novamente!')
        }
    }

    sacar(valor: number) : void{
        if (valor > 0) {
            this.saldo -= valor;
            console.log(`Valor de R$${valor.toFixed(2)} sacado com sucesso!`)
        }
        else {
            console.log('O valor de saque deve ser positivo, tente novamente!')
        }
    }
 
    mostrarSaldo() : string {
        return `${this.titular}, seu saldo atual é de: R$${this.saldo.toFixed(2)}`;
    }

}


/* Crie uma classe ContaBancaria com atributos privados saldo (number) e titular (string).
Adicione um construtor que inicializa esses valores.
Crie métodos depositar(valor: number) e sacar(valor: number) para atualizar o saldo.
Crie um método mostrarSaldo() que retorna o saldo atual. */