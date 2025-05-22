export class ContaCorrente {
    agencia;
    _cliente;
    _saldo = 0;
    //#saldo = 0

    set cliente(novoValor){
        this._cliente = novoValor;
    }
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor) {
        if (valor <= 0) return; // mesmo que    if(valor <= 0) {
        this._saldo += valor;               //     return;
    }                                      //   }   
    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}