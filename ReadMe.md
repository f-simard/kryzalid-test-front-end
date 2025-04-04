# 💼 Kryzalid Test

Dans le cadre d'un éventuel recrutement voici le petit test qu'il sera demander de réaliser.
On veut surtout se faire une idée sur l'étendu de te compétences en terme d'intégration, dynamisation ainsi que ta rapidité d'exécution.

**Temps à prévoir : environ 2h** *On ne veut pas que tu passes ta journée dessus, simplement faire le **maximum** possible dans ce temps prévu.*

*On est conscient que 2h c'est peut être short pour tout faire, donc pas de pression si il manque des choses.*

*( Ne pas inclure le temps de préparation de ton espace de dev .)*

**🎯 Objectif:** Réaliser une page web de liste de nouvelles en suivant les recommandation de la maquette.Avec des données qui proviennent d'une API. 

- La liste doit être ordonné par date du plus récent au plus vieux. 
- Le page doit être responsive au mieux.
- La liste peut être filtré par **catégorie** pour ne laisser afficher que les nouvelles   correspondante.

## 🗂️ Choix de technologie:
Le projet inclut un environnement de développement prêt à l’emploi, similaire à celui que tu pourrais retrouver chez Kryzalid. Il est là pour te faire gagner du temps de configuration : tu peux l’utiliser tel quel et te concentrer uniquement sur le développement.

Cependant, si tu préfères travailler avec ta propre stack ou adapter l’environnement, libre à toi de le faire ! Dans ce cas, merci simplement de nous expliquer clairement comment faire tourner ton projet (installation, compilation, lancement, etc.).


## ✅ Bon à savoir

Tu trouveras la maquette complète via le template figma ici présent: 
(https://www.figma.com/design/QU93dmh7VexxXU8tZRrK0q/Test-RH-Dev?node-id=1-373)[lien du Figma] ou alors en pdf dans les assets du site. le mode view Dev te guidera dans les styles à appliquer 

Pour la font tu peux utiliser les Googles fonts suivant: 
**Aleo** : Pour le titre "Nouvelles"
**DM Sans** : Pour les items de nouvelles

    @import url('https://fonts.googleapis.com/css2?family=Aleo:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

    $primaryFont: 'Aleo', Arial, sans-serif;
    $secondaryFont: 'DM Sans', Arial, sans-serif;

##  Installation de l’environnement
Ce projet inclut un environnement de développement prêt à l’emploi, conçu pour reproduire ce que tu pourrais retrouver chez Kryzalid. Il te permet de développer rapidement sans configuration manuelle.

### ✨ Fonctionnalités :
- Support de Sass (SCSS)
- Utilisation de templates Twig pour générer ton HTML
- JavaScript natif librement utilisable
- API locale simulée via ```json-server```

### 🗂️ Architecture du projet 
```java
src/
├── scss/                   → Tes fichiers Sass
├── templates/              → Tes fichiers Twig (structure HTML)
│   └── partials/           → Éventuels composants réutilisables (.twig)
├── images/                 → Quelques images utiles pour la pages
├── compile.js              → Fichier de compilation (ne pas modifier)
├── db.json                 → Contenu de la "fake API"
├── maquette-Nouvelles.pdf  → Export de la maquette Figma
```

### ▶️ Lancement du projet
Assure-toi d’avoir Node.js et npm installés.
Installe les dépendances :

```bash
npm install
```
Démarre le projet :
```bash
npm run start
```
Cela va :
- Lancer un live-server accessible sur [127.0.0.1:8080](http://127.0.0.1:8080)
- Démarrer une API locale disponible sur [localhost:4000](http://localhost:4000/)

## 🔌 API à connecter
Le projet embarque une API simulée générée aléatoirement grâce au package json-server.
Elle contient notamment une collection de 100 articles factices.

### 📍 Accès à l'API
Si tu utilises la configuration fournie (npm run start), l’API sera automatiquement disponible à l’adresse suivante :
http://localhost:4000

Tu pourras par exemple accéder à la liste des articles via l’endpoint suivant :
```bash
GET /posts
```
Chaque article contient des champs comme id, title, intro, date, thumbnail, category, etc.

### 🔍 Pour aller plus loin
Tu peux consulter la documentation officielle pour voir les possibilités offertes par json-server :
👉 [json-server](https://www.npmjs.com/package/json-server) sur npm


## Recapitulatif
L’objectif de ce test est d’évaluer ta capacité à produire une intégration de qualité dans un environnement de développement proche de celui que tu pourrais retrouver chez Kryzalid. Voici les éléments clés que nous prendrons en compte :

#### 🎨 Intégration & expérience utilisateur
- Un code bien structuré, lisible, commenté si nécessaire.
- Une intégration HTML/CSS propre, fidèle au design fourni.
- Une interface responsive, fluide et agréable sur tous les formats.
- Une récupération dynamique des données de l’API locale (via /posts) avec un affichage automatisé du contenu.

#### 🎯 Bonus
- Un filtre de catégories fonctionnel, permettant de trier dynamiquement les articles affichés.
- Des animations ou micro-interactions bien pensées pour améliorer la fluidité et l’expérience utilisateur.

#### 💤 Moins prioritaire
- Une pagination pour naviguer dans les articles : optionnelle, mais un plus si elle est bien réalisée.


## 🚀 Rendu du test
Une fois le test complété, tu peux simplement nous transmettre une archive .zip du projet ou partager un lien vers un dépôt distant (GitHub, GitLab, etc.).
Ce test a pour objectif de mieux comprendre ta manière de travailler, ton sens de l’organisation et ta capacité à livrer un résultat soigné.

Ce n’est pas un test chronométré, mais il est conçu pour pouvoir être réalisé dans une journée. On sait que tout n’est pas forcément faisable en 1 ou 2 heures, donc priorise ce que tu juges le plus pertinent.

### Have fun et bonne réalisation 🤘 !
Au plaisir de découvrir ton travail !