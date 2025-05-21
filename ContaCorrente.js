export class ContaCorrente {
    agencia;
    _saldo = 0;
    //#saldo = 0

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
}