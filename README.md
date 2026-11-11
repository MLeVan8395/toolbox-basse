# Boîte à outils basse

Une appli gratuite pour les bassistes : **gammes, modes et arpèges transposables**, placés automatiquement sur le manche dans la tonalité choisie, des **formules de basse dans quatre styles** (rock, reggae, funk, jazz) et des **jeux au métronome** pour les mettre en pratique.

C'est la petite sœur de la [Boîte à outils guitare](https://mlevan8395.github.io/toolbox-guitare/), conçue pour les élèves de basse musiques actuelles et jazz en conservatoire. Basse 4 cordes, partitions en clé de Fa.

👉 **Utiliser l'appli :** https://mlevan8395.github.io/toolbox-basse/

## Installer l'appli

- **Android** (Chrome) : ouvre le site, puis touche **Installer l'appli** en haut de la page, ou menu ⋮ → **Installer l'application**.
- **iPhone / iPad** (Safari) : bouton Partager → **Sur l'écran d'accueil**.
- **Ordinateur** (Chrome, Edge) : icône d'installation dans la barre d'adresse.

L'appli fonctionne ensuite **hors ligne**, son compris. Elle se met à jour toute seule à chaque ouverture avec une connexion.

## Ce qu'on y trouve

Six onglets, chacun avec son sous-menu :

| Onglet | Contenu |
|---|---|
| **Présentation** | Le mode d'emploi de la boîte à outils |
| **Manche** | Toutes les notes (de 0 à 12) ; les mains (un doigt par case, jeu aux doigts : pouce en appui, index et majeur alternés, butée) ; cycle des quartes sur une corde, avec le cercle affiché |
| **Gammes** | Premières gammes (majeure, mineure naturelle, pentatoniques, gamme blues, avec les doigts), modes et gammes dérivés ; en position, sur une octave (fondamentale sur la corde de Mi ou de La) ou le long d'une corde ; partition en clé de Fa sous chaque gamme ; à jouer au métronome sous le schéma, en noires, croches, triolets ou doubles croches, avec des motifs (tierces, quartes… triades, gammes brisées) |
| **Arpèges** | Triades et fondamentale-quinte-octave, Maj7, 7, m7, m7♭5, dim7 : sur une octave (corde de Mi ou de La) et en diagonale ; à jouer au métronome, cycle des quartes en option |
| **Styles** | Rock, reggae, funk, jazz : des formules de basse classées par difficulté, écrites en intervalles. Chaque formule s'affiche sur le manche et sur la portée dans l'accord choisi, puis se joue au métronome : toujours le même accord, cycle des quartes, ou une grille du style. La batterie et les accords accompagnent ; la basse, c'est l'élève |
| **Accordeur** | Accordeur chromatique au micro, réglé pour le grave de la basse (La de référence de 430 à 445 Hz), et les quatre cordes à vide à écouter |

Tempo lent, moyen ou rapide, réglable de 5 en 5 ; croches droites ou swing, et clic sur 2 et 4 en option. Un bouton **Droitier / Gaucher** retourne tous les manches.

## Principes

- **Aucune donnée collectée.** Pas de compte, pas de publicité ; les réglages restent dans le navigateur.
- **Notation française** : notes seules en Do, Ré, Mi… ; accords et tonalités en lettres (C, Am7, « en G ») ; intervalles notés ♭2, 2, ♭3, 3…
- **Contenu séparé du code** : les schémas sont dans `contenu/formes.js`, les formules et les grilles des styles dans `contenu/lignes.js`, lisibles et modifiables sans toucher à l'appli (voir `CONTRIBUER.md`).

## Crédits

- Glyphes musicaux de la partition (clé de Fa, altérations, silences) : tracés de la police GNU FreeFont (FreeSerif), utilisés selon son exception de police ; dièse, bémol et bécarre : police DejaVu Sans.
- Basse électrique (`sons/basse`) : échantillons de [Karoryfer Samples](https://www.karoryfer.com/karoryfer-samples), mis en forme par Nicholaus Brosowsky ([tonejs-instruments](https://github.com/nbrosowsky/tonejs-instruments)), licence [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/deed.fr). Fichiers raccourcis et convertis en mono.
- Batterie (`sons/batterie`) : Virtuosity Drums, domaine public ([CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.fr)).
- Contrebasse en pizzicato (`sons/contrebasse`) : [VSCO 2 Community Edition](https://github.com/sgossner/VSCO-2-CE) de Versilian Studios, domaine public (CC0). Fichiers raccourcis, normalisés et convertis en mono.
- Le métronome, le pad et l'orgue sont des sons de synthèse fabriqués par l'appli.

## Licence

© 2026 Mickael Le Van, **tous droits réservés** (voir [`LICENSE`](LICENSE)). Reproduction, diffusion et usage commercial interdits sans autorisation écrite de l'auteur. Les éléments de tiers cités restent sous leur propre licence.
