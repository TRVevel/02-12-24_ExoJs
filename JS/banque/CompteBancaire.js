export class Compte {
    #solde = 0;
    deposer100() {
        this.#solde = this.#solde + 100;
        console.log("Opération + reussie")
    }
    retirer10() {

        if (this.#solde > 10) {
            this.#solde = this.#solde - 10;
            console.log("Opération - reussie")
        } else {
            console.log(`"Impossible de retirer de l'argent, votre solde est de :"${this.#solde}€`)
        }
    }
    afficherSolde() {
        console.log(`Solde : ${this.#solde} €`)
    }
}