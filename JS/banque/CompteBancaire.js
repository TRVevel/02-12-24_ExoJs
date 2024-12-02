export class CompteBancaire {
    #solde = 0;
    deposer(montantDepot) {
        this.#solde = this.#solde + montantDepot;
        console.log("Opération + reussie")
    }
    retirer(montantDebit) {

        if (this.#solde >= montantDebit) {
            this.#solde = this.#solde - montantDebit;
            console.log("Opération - reussie")
        } else {
            console.log(`"Impossible de retirer de l'argent, votre solde est de :"${this.#solde}€`)
        }
    }
    afficherSolde() {
        console.log(`Solde : ${this.#solde} €`)
    }
}