export class CompteBancaire {
    //Definit le solde du compte à 0
    #solde = 0;
    //on dépose le montant indiquer dans le script.js
    deposer(montantDepot) {
        //on recupere le solde actuel(0€) et on y ajoute le montant indiquer
        this.#solde = this.#solde + montantDepot;
        console.log("Opération + reussie")
    }
    //on retire le montant indiquer dans le script.js
    retirer(montantDebit) {
        //Si le solde est supérieur ou égal ou montant que l'on veut retirer alors on effectue l'operation
        if (this.#solde >= montantDebit) {
            //on recupere le solde actuel et on y retire le montant indiquer
            this.#solde = this.#solde - montantDebit;
            console.log("Opération - reussie")
        }
        //sinon on refuse et on l'indique au client
        else {
            console.log(`"Impossible de retirer de l'argent, votre solde est de :"${this.#solde}€`)
        }
    }
    //on peut afficher le solde
    afficherSolde() {
        console.log(`Solde : ${this.#solde} €`)
    }
}