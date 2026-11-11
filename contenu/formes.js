// =====================================================================
//  Boîte à outils basse — schémas (contenu pédagogique)
//  © 2026 Mickael Le Van – Tous droits réservés (voir LICENSE). Pour proposer une idée : CONTRIBUER.md
//
//  Chaque forme est une liste de notes [corde, case, intervalle] :
//   - corde : 1 = Sol, 2 = Ré, 3 = La, 4 = Mi grave ;
//   - case : décalage en cases par rapport à la tonique « 1 » la plus grave
//     (0 = même case, -1 = une case plus bas vers le sillet, 2 = deux cases plus haut) ;
//   - intervalle : 1, ♭2, 2, ♭3, 3, 4, ♯4, ♭5, 5, ♯5, ♭6, 6, 𝄫7, ♭7, 7 (et ♭9, ♯9 pour la gamme altérée).
//  groupe : sous-titre dans la liste. acc : suffixe d'accord pour un arpège (C + "m7" = Cm7). arp : true pour un arpège.
//  doigts : case de la tonique dans le schéma de 4 cases (numéros de doigts sous les cases).
//  diag : true pour un schéma en diagonale (il peut partir d'une corde à vide).
//  La basse est accordée en quartes : un schéma garde la même forme quand on le déplace d'une corde.
// =====================================================================
const CHAPITRES=[
{id:"gammes",titre:"Premières gammes",intro:"Schémas transposables, tonique sur la corde de Mi grave : un doigt par case. Les numéros sous les cases sont les doigts de la main gauche.",formes:[
  {"n":"Gamme majeure","notes":[[4,0,"1"],[4,2,"2"],[3,-1,"3"],[3,0,"4"],[3,2,"5"],[2,-1,"6"],[2,1,"7"],[2,2,"1"],[1,-1,"2"],[1,1,"3"],[1,2,"4"]],"doigts":2,"groupe":"En position"},
  {"n":"Gamme mineure naturelle","notes":[[4,-2,"♭7"],[4,0,"1"],[4,2,"2"],[3,-2,"♭3"],[3,0,"4"],[3,2,"5"],[2,-2,"♭6"],[2,0,"♭7"],[2,2,"1"],[1,-1,"2"],[1,0,"♭3"],[1,2,"4"]],"doigts":2,"groupe":"En position"},
  {"n":"Pentatonique majeure","notes":[[4,0,"1"],[4,2,"2"],[3,-1,"3"],[3,2,"5"],[2,-1,"6"],[2,2,"1"],[1,-1,"2"],[1,1,"3"]],"doigts":2,"groupe":"En position"},
  {"n":"Pentatonique mineure","notes":[[4,0,"1"],[4,3,"♭3"],[3,0,"4"],[3,2,"5"],[2,0,"♭7"],[2,2,"1"],[1,0,"♭3"],[1,2,"4"]],"doigts":1,"groupe":"En position"},
  {"n":"Gamme blues","notes":[[4,0,"1"],[4,3,"♭3"],[3,0,"4"],[3,1,"♭5"],[3,2,"5"],[2,0,"♭7"],[2,2,"1"],[1,0,"♭3"],[1,2,"4"],[1,3,"♭5"]],"doigts":1,"groupe":"En position"},
  {"n":"Pentatonique mineure, positions 5, 1 et 2","notes":[[4,-2,"♭7"],[4,0,"1"],[4,3,"♭3"],[4,5,"4"],[3,-2,"♭3"],[3,0,"4"],[3,2,"5"],[3,5,"♭7"],[2,-3,"5"],[2,0,"♭7"],[2,2,"1"],[2,5,"♭3"],[1,-3,"1"],[1,0,"♭3"],[1,2,"4"],[1,4,"5"]],"groupe":"En position"},
  {"n":"Pentatonique majeure en diagonale","notes":[[4,0,"1"],[4,2,"2"],[3,-1,"3"],[3,2,"5"],[3,4,"6"],[2,2,"1"],[2,4,"2"],[1,1,"3"],[1,4,"5"],[1,6,"6"]],"groupe":"En diagonale","diag":true},
  {"n":"Pentatonique mineure en diagonale","notes":[[4,-2,"♭7"],[4,0,"1"],[3,-2,"♭3"],[3,0,"4"],[3,2,"5"],[2,0,"♭7"],[2,2,"1"],[1,0,"♭3"],[1,2,"4"],[1,4,"5"]],"groupe":"En diagonale","diag":true}
]},
{id:"modes",titre:"Modes et gammes dérivés",intro:"Sur une corde et en position.",formes:[
  {"n":"Ionien","notes":[[4,0,"1"],[4,2,"2"],[3,-1,"3"],[3,0,"4"],[3,2,"5"],[2,-1,"6"],[2,1,"7"],[2,2,"1"],[1,-1,"2"],[1,1,"3"],[1,2,"4"]],"groupe":"Modes de la gamme majeure"},
  {"n":"Dorien","notes":[[4,0,"1"],[4,2,"2"],[3,-2,"♭3"],[3,0,"4"],[3,2,"5"],[2,-1,"6"],[2,0,"♭7"],[2,2,"1"],[1,-1,"2"],[1,0,"♭3"],[1,2,"4"]],"groupe":"Modes de la gamme majeure"},
  {"n":"Phrygien","notes":[[4,0,"1"],[4,1,"♭2"],[3,-2,"♭3"],[3,0,"4"],[3,2,"5"],[2,-2,"♭6"],[2,0,"♭7"],[2,2,"1"],[1,-2,"♭2"],[1,0,"♭3"],[1,2,"4"]],"groupe":"Modes de la gamme majeure"},
  {"n":"Lydien","notes":[[4,0,"1"],[4,2,"2"],[3,-1,"3"],[3,1,"♯4"],[3,2,"5"],[2,-1,"6"],[2,1,"7"],[2,2,"1"],[1,-1,"2"],[1,1,"3"]],"groupe":"Modes de la gamme majeure"},
  {"n":"Mixolydien","notes":[[4,0,"1"],[4,2,"2"],[3,-1,"3"],[3,0,"4"],[3,2,"5"],[2,-1,"6"],[2,0,"♭7"],[2,2,"1"],[1,-1,"2"],[1,1,"3"],[1,2,"4"]],"groupe":"Modes de la gamme majeure"},
  {"n":"Éolien","notes":[[4,0,"1"],[4,2,"2"],[3,-2,"♭3"],[3,0,"4"],[3,2,"5"],[2,-2,"♭6"],[2,0,"♭7"],[2,2,"1"],[1,-1,"2"],[1,0,"♭3"],[1,2,"4"]],"groupe":"Modes de la gamme majeure"},
  {"n":"Locrien","notes":[[4,0,"1"],[4,1,"♭2"],[3,-2,"♭3"],[3,0,"4"],[3,1,"♭5"],[2,-2,"♭6"],[2,0,"♭7"],[2,2,"1"],[1,-2,"♭2"],[1,0,"♭3"],[1,2,"4"]],"groupe":"Modes de la gamme majeure"},
  {"n":"Mineur mélodique","notes":[[4,0,"1"],[4,2,"2"],[3,-2,"♭3"],[3,0,"4"],[3,2,"5"],[2,-1,"6"],[2,1,"7"],[2,2,"1"],[1,-1,"2"],[1,0,"♭3"],[1,2,"4"]],"groupe":"Modes du mineur mélodique"},
  {"n":"Dorien ♭2","notes":[[4,0,"1"],[4,1,"♭2"],[3,-2,"♭3"],[3,0,"4"],[3,2,"5"],[2,-1,"6"],[2,0,"♭7"],[2,2,"1"],[1,-2,"♭2"],[1,0,"♭3"],[1,2,"4"]],"groupe":"Modes du mineur mélodique"},
  {"n":"Lydien augmenté","notes":[[4,0,"1"],[4,2,"2"],[3,-1,"3"],[3,1,"♯4"],[3,3,"♯5"],[2,-1,"6"],[2,1,"7"],[2,2,"1"],[1,-1,"2"],[1,1,"3"]],"groupe":"Modes du mineur mélodique"},
  {"n":"Lydien dominant","notes":[[4,0,"1"],[4,2,"2"],[3,-1,"3"],[3,1,"♯4"],[3,2,"5"],[2,-1,"6"],[2,0,"♭7"],[2,2,"1"],[1,-1,"2"],[1,1,"3"]],"groupe":"Modes du mineur mélodique"},
  {"n":"Mixolydien ♭6","notes":[[4,0,"1"],[4,2,"2"],[3,-1,"3"],[3,0,"4"],[3,2,"5"],[2,-2,"♭6"],[2,0,"♭7"],[2,2,"1"],[1,-1,"2"],[1,1,"3"],[1,2,"4"]],"groupe":"Modes du mineur mélodique"},
  {"n":"Locrien ♯2","notes":[[4,0,"1"],[4,2,"2"],[3,-2,"♭3"],[3,0,"4"],[3,1,"♭5"],[2,-2,"♭6"],[2,0,"♭7"],[2,2,"1"],[1,-1,"2"],[1,0,"♭3"],[1,2,"4"]],"groupe":"Modes du mineur mélodique"},
  {"n":"Altéré","notes":[[4,0,"1"],[4,1,"♭9"],[3,-2,"♯9"],[3,-1,"3"],[3,1,"♭5"],[2,-2,"♯5"],[2,0,"♭7"],[2,2,"1"],[1,-2,"♭9"],[1,0,"♯9"],[1,1,"3"]],"groupe":"Modes du mineur mélodique"},
  {"n":"Mineur harmonique","notes":[[4,0,"1"],[4,2,"2"],[3,-2,"♭3"],[3,0,"4"],[3,2,"5"],[2,-2,"♭6"],[2,1,"7"],[2,2,"1"],[1,-1,"2"],[1,0,"♭3"],[1,2,"4"]],"groupe":"Modes du mineur harmonique"},
  {"n":"Locrien ♯6","notes":[[4,0,"1"],[4,1,"♭2"],[3,-2,"♭3"],[3,0,"4"],[3,1,"♭5"],[2,-1,"6"],[2,0,"♭7"],[2,2,"1"],[1,-2,"♭2"],[1,0,"♭3"],[1,2,"4"]],"groupe":"Modes du mineur harmonique"},
  {"n":"Ionien ♯5","notes":[[4,0,"1"],[4,2,"2"],[3,-1,"3"],[3,0,"4"],[3,3,"♯5"],[2,-1,"6"],[2,1,"7"],[2,2,"1"],[1,-1,"2"],[1,1,"3"],[1,2,"4"]],"groupe":"Modes du mineur harmonique"},
  {"n":"Dorien ♯4","notes":[[4,0,"1"],[4,2,"2"],[3,-2,"♭3"],[3,1,"♯4"],[3,2,"5"],[2,-1,"6"],[2,0,"♭7"],[2,2,"1"],[1,-1,"2"],[1,0,"♭3"]],"groupe":"Modes du mineur harmonique"},
  {"n":"Phrygien dominant","notes":[[4,0,"1"],[4,1,"♭2"],[3,-1,"3"],[3,0,"4"],[3,2,"5"],[2,-2,"♭6"],[2,0,"♭7"],[2,2,"1"],[1,-2,"♭2"],[1,1,"3"],[1,2,"4"]],"groupe":"Modes du mineur harmonique"},
  {"n":"Lydien ♯2","notes":[[4,0,"1"],[4,3,"♯2"],[3,-1,"3"],[3,1,"♯4"],[3,2,"5"],[2,-1,"6"],[2,1,"7"],[2,2,"1"],[1,0,"♯2"],[1,1,"3"]],"groupe":"Modes du mineur harmonique"},
  {"n":"Super-locrien ♭♭7","notes":[[4,0,"1"],[4,1,"♭2"],[3,-2,"♭3"],[3,-1,"3"],[3,1,"♭5"],[2,-2,"♭6"],[2,-1,"𝄫7"],[2,2,"1"],[1,-2,"♭2"],[1,0,"♭3"],[1,1,"3"]],"groupe":"Modes du mineur harmonique"},
  {"n":"Diminuée demi-ton/ton","notes":[[4,-2,"♭7"],[4,0,"1"],[4,1,"♭2"],[3,-2,"♭3"],[3,-1,"3"],[3,1,"♯4"],[3,2,"5"],[2,-1,"6"],[2,0,"♭7"],[2,2,"1"],[1,-2,"♭2"],[1,0,"♭3"],[1,1,"3"]],"groupe":"Gammes symétriques"},
  {"n":"Diminuée ton/demi-ton","notes":[[4,0,"1"],[4,2,"2"],[4,3,"♭3"],[3,0,"4"],[3,1,"♭5"],[3,3,"♭6"],[3,4,"6"],[2,1,"7"],[2,2,"1"],[2,4,"2"],[1,0,"♭3"],[1,2,"4"],[1,3,"♭5"]],"groupe":"Gammes symétriques"},
  {"n":"Gamme par tons","notes":[[4,-2,"♭7"],[4,0,"1"],[4,2,"2"],[3,-1,"3"],[3,1,"♯4"],[2,-2,"♯5"],[2,0,"♭7"],[2,2,"1"],[1,-1,"2"],[1,1,"3"]],"groupe":"Gammes symétriques"},
  {"n":"Gamme chromatique","notes":[[4,0,"1"],[4,1,"♭2"],[4,2,"2"],[4,3,"♭3"],[3,-1,"3"],[3,0,"4"],[3,1,"♯4"],[3,2,"5"],[3,3,"♭6"],[2,-1,"6"],[2,0,"♭7"],[2,1,"7"],[2,2,"1"],[2,3,"♭2"],[1,-1,"2"],[1,0,"♭3"],[1,1,"3"],[1,2,"4"],[1,3,"♯4"]],"groupe":"Gammes symétriques"}
]},
{id:"arp-triades",titre:"Triades et fondamentale-quinte-octave",intro:"Les trois sons de l'accord, jusqu'à l'octave : 1  3  5 (majeur), 1  ♭3  5 (mineur). La forme fondamentale, quinte, octave va sur tous les accords.",formes:[
  {"n":"Majeur, fondamentale sur la corde de Mi","notes":[[4,0,"1"],[3,-1,"3"],[3,2,"5"],[2,2,"1"]],"groupe":"Fondamentale sur la corde de Mi","acc":"","arp":true},
  {"n":"Mineur, fondamentale sur la corde de Mi","notes":[[4,0,"1"],[4,3,"♭3"],[3,2,"5"],[2,2,"1"]],"groupe":"Fondamentale sur la corde de Mi","acc":"m","arp":true},
  {"n":"Fondamentale, quinte, octave, fondamentale sur la corde de Mi","notes":[[4,0,"1"],[3,2,"5"],[2,2,"1"]],"groupe":"Fondamentale sur la corde de Mi","acc":"5","arp":true},
  {"n":"Majeur, fondamentale sur la corde de La","notes":[[3,0,"1"],[2,-1,"3"],[2,2,"5"],[1,2,"1"]],"groupe":"Fondamentale sur la corde de La","acc":"","arp":true},
  {"n":"Mineur, fondamentale sur la corde de La","notes":[[3,0,"1"],[3,3,"♭3"],[2,2,"5"],[1,2,"1"]],"groupe":"Fondamentale sur la corde de La","acc":"m","arp":true},
  {"n":"Fondamentale, quinte, octave, fondamentale sur la corde de La","notes":[[3,0,"1"],[2,2,"5"],[1,2,"1"]],"groupe":"Fondamentale sur la corde de La","acc":"5","arp":true}
]},
{id:"arp-maj7",titre:"Arpèges Maj7",intro:"Arpège Maj7 : 1  3  5  7. Sur une octave (fondamentale sur la corde de Mi ou de La), puis en diagonale sur les quatre cordes (7-1 puis 3-5).",formes:[
  {"n":"Maj7, fondamentale sur la corde de Mi","notes":[[4,0,"1"],[3,-1,"3"],[3,2,"5"],[2,1,"7"]],"groupe":"Une octave","acc":"Maj7","arp":true},
  {"n":"Maj7, fondamentale sur la corde de La","notes":[[3,0,"1"],[2,-1,"3"],[2,2,"5"],[1,1,"7"]],"groupe":"Une octave","acc":"Maj7","arp":true},
  {"n":"Maj7, en diagonale (7-1 puis 3-5)","notes":[[4,-1,"7"],[4,0,"1"],[3,-1,"3"],[3,2,"5"],[2,1,"7"],[2,2,"1"],[1,1,"3"],[1,4,"5"]],"groupe":"En diagonale","acc":"Maj7","arp":true,"diag":true}
]},
{id:"arp-7",titre:"Arpèges 7",intro:"Arpège 7 : 1  3  5  ♭7. Sur une octave (fondamentale sur la corde de Mi ou de La), puis en diagonale sur les quatre cordes (7-1 puis 3-5).",formes:[
  {"n":"7, fondamentale sur la corde de Mi","notes":[[4,0,"1"],[3,-1,"3"],[3,2,"5"],[2,0,"♭7"]],"groupe":"Une octave","acc":"7","arp":true},
  {"n":"7, fondamentale sur la corde de La","notes":[[3,0,"1"],[2,-1,"3"],[2,2,"5"],[1,0,"♭7"]],"groupe":"Une octave","acc":"7","arp":true},
  {"n":"7, en diagonale (7-1 puis 3-5)","notes":[[4,-2,"♭7"],[4,0,"1"],[3,-1,"3"],[3,2,"5"],[2,0,"♭7"],[2,2,"1"],[1,1,"3"],[1,4,"5"]],"groupe":"En diagonale","acc":"7","arp":true,"diag":true}
]},
{id:"arp-m7",titre:"Arpèges m7",intro:"Arpège m7 : 1  ♭3  5  ♭7. Sur une octave (fondamentale sur la corde de Mi ou de La), puis en diagonale sur les quatre cordes (7-1 puis 3-5).",formes:[
  {"n":"m7, fondamentale sur la corde de Mi","notes":[[4,0,"1"],[4,3,"♭3"],[3,2,"5"],[2,0,"♭7"]],"groupe":"Une octave","acc":"m7","arp":true},
  {"n":"m7, fondamentale sur la corde de La","notes":[[3,0,"1"],[3,3,"♭3"],[2,2,"5"],[1,0,"♭7"]],"groupe":"Une octave","acc":"m7","arp":true},
  {"n":"m7, en diagonale (7-1 puis 3-5)","notes":[[4,-2,"♭7"],[4,0,"1"],[3,-2,"♭3"],[3,2,"5"],[2,0,"♭7"],[2,2,"1"],[1,0,"♭3"],[1,4,"5"]],"groupe":"En diagonale","acc":"m7","arp":true,"diag":true}
]},
{id:"arp-m7b5",titre:"Arpèges m7♭5",intro:"Arpège m7♭5 : 1  ♭3  ♭5  ♭7. Sur une octave (fondamentale sur la corde de Mi ou de La), puis en diagonale sur les quatre cordes (7-1 puis 3-5).",formes:[
  {"n":"m7♭5, fondamentale sur la corde de Mi","notes":[[4,0,"1"],[4,3,"♭3"],[3,1,"♭5"],[2,0,"♭7"]],"groupe":"Une octave","acc":"m7♭5","arp":true},
  {"n":"m7♭5, fondamentale sur la corde de La","notes":[[3,0,"1"],[3,3,"♭3"],[2,1,"♭5"],[1,0,"♭7"]],"groupe":"Une octave","acc":"m7♭5","arp":true},
  {"n":"m7♭5, en diagonale (7-1 puis 3-5)","notes":[[4,-2,"♭7"],[4,0,"1"],[3,-2,"♭3"],[3,1,"♭5"],[2,0,"♭7"],[2,2,"1"],[1,0,"♭3"],[1,3,"♭5"]],"groupe":"En diagonale","acc":"m7♭5","arp":true,"diag":true}
]},
{id:"arp-dim7",titre:"Arpèges dim7",intro:"Arpège dim7 : 1  ♭3  ♭5  𝄫7. Sur une octave (fondamentale sur la corde de Mi ou de La), puis en diagonale sur les quatre cordes (7-1 puis 3-5).",formes:[
  {"n":"dim7, fondamentale sur la corde de Mi","notes":[[4,0,"1"],[4,3,"♭3"],[3,1,"♭5"],[2,-1,"𝄫7"]],"groupe":"Une octave","acc":"dim7","arp":true},
  {"n":"dim7, fondamentale sur la corde de La","notes":[[3,0,"1"],[3,3,"♭3"],[2,1,"♭5"],[1,-1,"𝄫7"]],"groupe":"Une octave","acc":"dim7","arp":true},
  {"n":"dim7, en diagonale (7-1 puis 3-5)","notes":[[4,-3,"𝄫7"],[4,0,"1"],[3,-2,"♭3"],[3,1,"♭5"],[2,-1,"𝄫7"],[2,2,"1"],[1,0,"♭3"],[1,3,"♭5"]],"groupe":"En diagonale","acc":"dim7","arp":true,"diag":true}
]}
];
