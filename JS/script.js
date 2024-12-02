import { CompteBancaire } from "./banque/compteBancaire.js";

let monCompte = new CompteBancaire;
monCompte.afficherSolde();
monCompte.deposer(100);
monCompte.afficherSolde();
monCompte.retirer(30);
monCompte.afficherSolde();