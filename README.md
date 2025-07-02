# ECF_IONIC – Application de vote en Ionic React

Projet front-end réalisé dans le cadre de l’ECF Développeur Web / Web Mobile.  
Cette application consomme une API V2 Express avec SQLite pour la gestion des scrutins et votes.

---

## Fonctionnalités réalisées

### Mise en place du projet

- Création des pages **home**, **vote**, et **statistics** avec navigation de base
- Mise en place des **routes** entre les pages avec React Router

### Scrutins et membres

- Affichage de **tous les scrutins disponibles** sur la page d'accueil
- Affichage de la **liste des membres** par scrutin sur la page de vote
- Redirection vers la page de vote depuis un scrutin sélectionné

### Fonction de vote

- Ajout d'un bouton **"Voter"** à côté de chaque membre
- Le bouton disparaît après le vote et devient **"A voté"** (vote irréversible)
- Suppression d'une condition bloquante (comparaison date actuelle/début scrutin)

### Statistiques

- Création d’une **page dédiée aux statistiques** d’un scrutin
- Affichage des données de participation sous **forme de tableau**
- Ajout d’une **colonne "Statistiques"** dans la table des scrutins
- Intégration d’un **graphique (bar chart)** avec la librairie Recharts
- Mise en place du graphique dans la page statistiques

### Style et structure

- Création d’un dossier `styles/` pour organiser les fichiers CSS
- Ajout de **classes CSS personnalisées** pour les tableaux (scrutins, membres, statistiques)
- Ajout de **boutons de navigation** (retour vers l’accueil depuis vote et stats)

---

## Configuration de l’API V2 (Express + SQLite)

L’application se connecte à une API locale développée en Node.js avec Express et SQLite.

Pour que l’API fonctionne :

- Le fichier `db.js` configure une base **SQLite en mémoire** et initialise les tables + données
- La fonction `initDb()` doit être appelée depuis `src/app.js` :
```js
const { initDb } = require('./models/db');
initDb().then(() => {
  console.log("Base de données initialisée !");
});
