async function recupererTaches() {
    try {
        let reponse = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'GET',
        });

        let taches = await reponse.json();
        console.log('Liste des taches:', taches);
        return taches;
    } catch (err) {
        console.error('Erreur recup taches:', err);
    }
}
await recupererTaches();

async function creerTache() {
    try {
        let reponse = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }), headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        });

        let tacheCree = await reponse.json();
        console.log('Tache créé:', tacheCree);
        return tacheCree;
    } catch (err) {
        console.error('Erreur création tache:', err);
    }
}
creerTache();