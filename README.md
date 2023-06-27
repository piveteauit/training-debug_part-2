Bien sûr ! Voici la version corrigée du README.md avec les commandes npm formatées en mode code :


# Projet training-debug_part-2 - Guide d'installation et de dépannage

Ce guide fournit des instructions pour installer et exécuter le projet training-debug_part-2, ainsi que des détails sur les bogues connus et les évolutions prévues. Veuillez suivre les étapes ci-dessous pour configurer le projet correctement.

## Installation

1. Initialisez le fichier `.env` du backend en vous basant sur les informations du fichier `.env.sample`.

2. Exécutez le script suivant depuis la racine du projet pour configurer l'environnement :
   ```
   npm run setup
   ```

3. Démarrez le projet en exécutant la commande suivante :
   ```
   npm run dev
   ```

## Liste des tâches

### Bug - Frontend

- Lorsque vous effectuez un checkout sans recharger la page après avoir ajouté un produit, une erreur se produit.

- Le prix total des commandes ne s'affiche pas dans l'historique.

### Bug - Backend

- Tous les nouveaux utilisateurs qui s'inscrivent sont automatiquement assignés en tant qu'administrateurs ("ADMIN"), alors qu'ils devraient être des utilisateurs normaux ("USER").

- Il est impossible de s'inscrire avec une adresse e-mail professionnelle : lawildatoutprix@yopmail.com.

### Problèmes des deux côtés (Frontend et Backend)

- Il est impossible de mettre à jour le profil.

- Il est possible de commander un nombre d'articles négatif en cliquant sur le bouton "-" dans le résumé du panier.

## Évolutions prévues

### Amélioration - Interface utilisateur

- Modifier le texte "Déjà dans le panier" pour rendre l'interface plus intuitive. Ajouter les boutons "+" et "-" si un article est déjà présent dans le panier.

N'hésitez pas à consulter la liste des tâches ci-dessus pour plus de détails sur les problèmes connus et les évolutions prévues. Si vous rencontrez des problèmes supplémentaires, veuillez les signaler à l'équipe de développement.


J'espère que cette version convient à vos attentes !
