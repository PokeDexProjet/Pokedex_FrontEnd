Pour exécuter votre serveur backend et vérifier la connexion à votre base de données MongoDB, suivez les étapes suivantes :

1. **Ouvrir le terminal** :
   - Appuyez sur `Win + R`, tapez `cmd` et appuyez sur `Entrée` pour ouvrir l'invite de commandes.

2. **Naviguer vers le répertoire du serveur backend** :
   - Utilisez la commande `cd` pour accéder au répertoire contenant votre fichier `server.js`. Par exemple :
     ```bash
     cd D:\Projet Cloud\Pokedex\back
     ```

3. **Exécuter le serveur Node.js** :
   - Lancez le serveur en exécutant la commande suivante :
     ```bash
     node server.js
     ```
   - Si le serveur démarre correctement, vous devriez voir le message :
     ```
     Serveur en cours d'exécution sur http://localhost:3000
     Connexion réussie à la base de données MongoDB
     ```

4. **Vérifier la connexion à la base de données** :
   - Ouvrez votre navigateur web et accédez à l'adresse suivante :
     ```
     http://localhost:3000
     ```
   - Si la page s'affiche correctement, cela signifie que votre serveur est opérationnel et connecté à la base de données.

**Remarques** :

- Assurez-vous que votre base de données MongoDB est en cours d'exécution et accessible.
- Vérifiez que les paramètres de connexion à la base de données dans votre fichier `server.js` sont corrects.
- Si vous rencontrez des erreurs, consultez les messages dans le terminal pour identifier et résoudre les problèmes éventuels.

En suivant ces étapes, vous devriez être en mesure de démarrer votre serveur backend et de vérifier sa connexion à la base de données MongoDB. 