# Contribuer à la Boîte à outils basse

Pas besoin d'être développeur : les schémas sont dans `contenu/formes.js`, les formules et les grilles des styles dans `contenu/lignes.js`.

## Écrire un schéma

Un schéma est une liste de notes `[corde, case, intervalle]` :

- **corde** : 1 = Sol, 2 = Ré, 3 = La, 4 = Mi grave ;
- **case** : décalage par rapport à la tonique « 1 » la plus grave du schéma (0 = même case, −1 = une case vers le sillet, 2 = deux cases vers le corps) ;
- **intervalle** : `1`, `♭2`, `2`, `♭3`, `3`, `4`, `♯4`, `♭5`, `5`, `♯5`, `♭6`, `6`, `𝄫7`, `♭7`, `7`.

Exemple, l'arpège m7 avec la fondamentale sur la corde de Mi grave :

```js
{"n":"m7, fondamentale sur la corde de Mi","notes":[[4,0,"1"],[4,3,"♭3"],[3,2,"5"],[2,0,"♭7"]],"groupe":"Une octave","acc":"m7","arp":true}
```

Champs facultatifs :
- `groupe` : sous-titre dans la liste ;
- `acc` et `arp: true` : pour un arpège, le nom de l'accord sans sa fondamentale (`"m7"` donne Cm7, Dm7…) ;
- `doigts` : case de la tonique dans un schéma de 4 cases, pour afficher les doigts ;
- `diag: true` : schéma en diagonale.

L'appli vérifie elle-même le placement : elle calcule les noms des notes à partir de la tonalité choisie.

## Écrire une formule de basse

Une formule est une mesure écrite en intervalles, pour aller sur n'importe quel accord : `"1.12 t.12 5.12 a.12"` = fondamentale, tierce de l'accord, quinte, note d'approche, en noires. Le mode d'emploi complet est en tête de `contenu/lignes.js`. L'appli refuse une formule dont la durée ne fait pas une mesure.

## Règles de notation

- Une note seule s'écrit en solfège : Do, Ré, Mi…
- Accords et tonalités en lettres : C, Am7, « en G ».
- Intervalles avec les vrais signes ♭ et ♯.

## Proposer une modification

1. Sur GitHub, ouvre `contenu/formes.js` ou `contenu/lignes.js` et clique sur le crayon (« Edit this file »).
2. Fais ta modification, puis « Propose changes ».
3. Ou ouvre simplement une *issue* pour signaler une erreur ou proposer un schéma.

## Droits

Le projet est sous « tous droits réservés » (voir `LICENSE`). En proposant une contribution, tu acceptes que Mickael Le Van l’intègre, la modifie et l’exploite dans ses applications, y compris de façon commerciale.
