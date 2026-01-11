# Lab 5 : Afficher un grand catalogue avec FlatList (TechMarket App)

##  Objectifs du lab

À la fin de ce lab, l'étudiant sera capable de :
- Définir une liste de données (tableau d'objets) pour un catalogue
- Utiliser le composant FlatList pour afficher une longue liste de façon performante
- Créer un composant d'élément (Item) réutilisable
- Utiliser keyExtractor pour gérer les clés
- Appliquer des styles avec StyleSheet pour séparer présentation et logique

##  Contexte pédagogique

On veut développer une petite application mobile appelée **TechMarket**, qui affiche une liste de produits technologiques (smartphones, laptops, casques, etc.) avec :
- le nom du produit
- le prix
- un identifiant unique (id)

Le catalogue peut contenir des dizaines d'articles, donc on veut un défilement fluide sans ralentir l'application. **FlatList** est donc le composant idéal.

##  Pré-requis

- Avoir un environnement React Native fonctionnel (Expo ou React Native CLI)
- Savoir créer un projet React Native basique
- Avoir déjà vu les composants View, Text, StyleSheet

##  Installation

### Étape 0 – Créer le projet

Si vous utilisez Expo :

```bash
npx create-expo-app techmarket-app
cd techmarket-app
npm start
```

Lancer ensuite l'application dans un émulateur ou sur un téléphone.

##  Structure du projet

```
techmarket-app/
├── App.js                    # Point d'entrée principal
├── components/
│   └── ProductList.js        # Composant avec FlatList et catalogue
└── README.md                 # Ce fichier
```

## 📝 Description des fichiers

### `App.js`
- Point d'entrée de l'application
- Utilise `SafeAreaView` pour éviter le chevauchement avec la barre de statut
- Intègre le composant `ProductList`

### `components/ProductList.js`
- Contient la liste de données `productsToDisplay` (catalogue de produits)
- Définit le composant `ProductItem` pour afficher un produit individuel
- Utilise `FlatList` pour afficher la liste de manière performante
- Contient tous les styles avec `StyleSheet`

##  Concepts clés

### FlatList
- Composant optimisé pour les longues listes
- Ne rend que les éléments visibles à l'écran (virtualisation)
- Props importantes :
  - `data` : tableau de données
  - `renderItem` : fonction de rendu pour chaque élément
  - `keyExtractor` : fonction pour extraire la clé unique

### keyExtractor
- Indique à React Native quelle propriété utiliser comme clé unique
- Essentiel pour optimiser les performances et gérer les mises à jour

### StyleSheet
- Séparation de la présentation et de la logique
- Optimisation des performances
- Meilleure organisation du code

##  Résultat attendu

L'application affiche :
- Un titre "Catalogue TechMarket" en haut
- Une liste scrollable de produits avec :
  - Numéro et nom du produit à gauche
  - Prix en orange/rose à droite
  - Chaque produit dans une carte blanche avec bordure

##  Tester l'application

1. Lancer l'application : `npm start`
2. Scanner le QR code avec Expo Go (sur téléphone) ou ouvrir dans un émulateur
3. Vérifier que la liste défile correctement
4. Vérifier que tous les produits s'affichent

##  Extensions (optionnelles)

Quelques pistes d'enrichissement :
- Ajouter un champ `category` pour chaque produit et l'afficher
- Changer le style pour les produits de prix > 500 € (couleur différente)
- Ajouter un `ListHeaderComponent` pour afficher un sous-titre
- Ajouter un `ItemSeparatorComponent` pour dessiner une ligne de séparation

##  Résumé

Dans ce lab, vous avez :
-  défini un catalogue de produits sous forme de tableau d'objets
-  créé un composant `ProductItem` pour isoler l'affichage d'un élément
-  utilisé FlatList avec les props `data`, `renderItem` et `keyExtractor`
-  appliqué des styles structurés via `StyleSheet`
-  intégré l'écran dans `App.js` via un composant dédié (`ProductList`)

