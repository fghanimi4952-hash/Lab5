// App.js
// Point d'entrée principal de l'application
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProductList from './components/ProductList';

// ============================================
// ÉTAPE 5 : Intégration de ProductList dans App.js
// ============================================
// Composant racine de l'application
// SafeAreaView garantit que le contenu ne passe pas sous la barre de statut
// sur certains appareils (notamment iPhone avec encoche)
export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      {/* Composant principal qui affiche le catalogue de produits */}
      <ProductList />
    </SafeAreaView>
  );
}

// Styles pour le conteneur principal de l'application
const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // Prend tout l'espace disponible
    backgroundColor: '#EDEFEE', // Fond gris clair cohérent avec ProductList
  },
});
