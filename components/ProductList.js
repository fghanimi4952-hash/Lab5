// components/ProductList.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// ============================================
// ÉTAPE 1 : Liste de données (catalogue)
// ============================================
// On définit un tableau d'objets représentant les produits technologiques
// Chaque produit a :
// - id : identifiant unique (utilisé comme clé pour FlatList)
// - name : nom du produit
// - price : prix affiché au format texte
const productsToDisplay = [
  { id: 'P01', name: 'Smartphone Nova X', price: '499 €' },
  { id: 'P02', name: 'Laptop Pro 15"', price: '1 199 €' },
  { id: 'P03', name: 'Casque Bluetooth AirSound', price: '149 €' },
  { id: 'P04', name: 'Montre Connectée FitTrack', price: '199 €' },
  { id: 'P05', name: 'Clavier Mécanique MX Blue', price: '89 €' },
  { id: 'P06', name: 'Souris Gamer LaserX', price: '59 €' },
  { id: 'P07', name: 'Écran 27" UltraHD', price: '349 €' },
  { id: 'P08', name: 'Disque SSD 1 To', price: '129 €' },
  { id: 'P09', name: 'Routeur WiFi 6', price: '179 €' },
  { id: 'P10', name: 'Casque VR Immersion', price: '399 €' },
  // On peut imaginer encore plus d'éléments pour simuler une "grande liste"
  { id: 'P11', name: 'Tablette Graphique Pro', price: '299 €' },
  { id: 'P12', name: 'Enceinte Bluetooth Portable', price: '79 €' },
  { id: 'P13', name: 'Webcam 4K Ultra', price: '129 €' },
  { id: 'P14', name: 'Micro-casque Gaming', price: '99 €' },
  { id: 'P15', name: 'Chargeur Sans Fil', price: '39 €' },
];

// ============================================
// ÉTAPE 2 : Composant ProductItem
// ============================================
// Composant réutilisable pour afficher un produit individuel
// Il reçoit name et price en props et les affiche dans un conteneur stylisé
// L'isolation de l'affichage dans ce composant permet de garder FlatList lisible
function ProductItem({ name, price }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemPrice}>{price}</Text>
    </View>
  );
}

// ============================================
// ÉTAPE 3 : Composant ProductList avec FlatList
// ============================================
// Composant principal qui utilise FlatList pour afficher tous les produits
// FlatList est optimisé pour les longues listes et ne rend que les éléments visibles
export default function ProductList() {
  // Fonction qui décrit comment afficher chaque élément de la liste
  // FlatList appelle cette fonction pour chaque élément avec :
  // - item : l'objet produit (ex: { id: 'P01', name: 'Smartphone Nova X', price: '499 €' })
  // - index : l'index de l'élément dans le tableau (commence à 0)
  const renderProductItem = ({ item, index }) => {
    return (
      <ProductItem
        name={`${index + 1}. ${item.name}`}
        price={item.price}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* Titre du catalogue */}
      <Text style={styles.headerText}>Catalogue TechMarket</Text>

      {/* 
        FlatList : composant optimisé pour afficher de longues listes
        Props importantes :
        - data : le tableau de données à afficher
        - renderItem : fonction qui définit comment rendre chaque élément
        - keyExtractor : fonction qui extrait la clé unique de chaque élément
                        (nécessaire pour React Native pour optimiser le rendu)
      */}
      <FlatList
        data={productsToDisplay}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

// ============================================
// ÉTAPE 4 : Styles avec StyleSheet
// ============================================
// Tous les styles sont centralisés ici pour séparer la présentation de la logique
// StyleSheet.create() optimise les styles pour de meilleures performances
const styles = StyleSheet.create({
  // Conteneur principal : occupe tout l'écran avec un fond gris clair
  container: {
    flex: 1, // Prend tout l'espace disponible
    backgroundColor: '#EDEFEE', // Fond gris clair
    paddingTop: 50, // Espacement en haut pour éviter le chevauchement avec la barre de statut
    paddingHorizontal: 16, // Espacement horizontal (gauche et droite)
  },
  
  // Style du titre du catalogue
  headerText: {
    fontSize: 24, // Taille de police grande
    fontWeight: 'bold', // Texte en gras
    color: '#333333', // Couleur gris foncé
    marginBottom: 16, // Espacement en bas
    textAlign: 'center', // Centrage du texte
  },
  
  // Conteneur pour chaque produit
  itemContainer: {
    backgroundColor: '#FFFFFF', // Fond blanc pour chaque produit
    paddingVertical: 12, // Espacement vertical (haut et bas)
    paddingHorizontal: 16, // Espacement horizontal (gauche et droite)
    marginBottom: 8, // Espacement entre les produits
    borderRadius: 8, // Coins arrondis
    borderWidth: 1, // Bordure fine
    borderColor: '#DDDDDD', // Couleur de la bordure (gris clair)
    flexDirection: 'row', // Disposition en ligne (nom et prix côte à côte)
    justifyContent: 'space-between', // Espace entre le nom et le prix
  },
  
  // Style du nom du produit
  itemName: {
    fontSize: 16, // Taille de police moyenne
    color: '#333333', // Couleur gris foncé
    flex: 1, // Prend l'espace disponible
    marginRight: 10, // Espacement à droite
  },
  
  // Style du prix du produit
  itemPrice: {
    fontSize: 16, // Taille de police moyenne
    color: '#EE9972', // Couleur orange/rose pour mettre en évidence
    fontWeight: 'bold', // Texte en gras pour attirer l'attention
  },
});
