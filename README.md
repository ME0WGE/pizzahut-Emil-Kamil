Repo Git-Hub {EN PRIVE}: REACT-PIZZA-HOT
Branches: 7 minimum (main, fonctionalité1, fonctionalité2, ...)
Minimum pour 50 commits en tout
Mettez des commentaires dans votre code !!!!
Tech: REACT / (SASS) / BOOTSTRAP - TAILWIND / REDUX
Contrainte -> Reproduire un clone fidèle jusqu'au format mobile du site Pizza Hut
Deadline: Lundi 23/06 - 9:00
Responsive ? Yes ! Pc, Tab, Mobile
-> Mettre le repo sur gitPage au minimum 1 heure avant la deadline

## ORGANISATION

- Un doc d'organistion pour le projet avec répartition des tâches et vue de l'avancement du projet.
- Au choix: Notion, Obsidian, autre solution teamwork

## LE PROJET

- Comme le nom l'indique vous allez refaire entièrement le site du site pizza hut. (la partie catalogue et panier)
- Le site affiche toutes les pizza dispo sur le site (uniquement les pizzas, donc 21 pizzas en tout, par row de 3)
- Source => https://www.pizzahut.be/fr/catalog#PIZZA
- Au clique sur un carte pizza: On arrive sur la pizza avec les ingrédients affichez en "column liste".
- Un bouton supprimer (icon trashcan, ou "-", ou "x") pour enlever un ingrédient de la pizza.
- Si on as enlevé des ingrédient, dans le panier, la row pizza indique le nom et en description:
  => SANS: et la liste des ingrédient en enlevé. Exemple: Barbecue, sans: fromage, oignions, sauce barbecue.
  => Allez voir comment pizza hut présente son panier, faite de même

## FRONT END & DESIGN

- Votre site est a le même a l'identique mais uniquement pour les 21 pizzas.
- Le bouton "commander" est au bas du panier au format normal.
- Au clique sur "commander", une page "Merci pour votre commande" avec un petite icone validation propre en vert.

## AU FORMAT MOBILE

- le panier n'apparait pas dans la liste des pizzas, c'est un bouton panier au bas de la page (sitcky) qui mene au panier
- La page panier contient le bouton "commander", au clique => "Merci pour votre commande"

## COUPONS

- Dans le panier un input Coupon permet d'ajouter un coupon qui fait -10% sur le panier.
- Attention, on ne peut pas cumuler les coupons, on l'utilise qu'une seule fois !

## BONUS

1. More Coupon's => Un coupon qui offre la pizza la moins chère a partir de 4 pizzas
   Attention, si la condition n'est pas remplis, ne s'applique => Message "panier invalide !"
2. Ajouter un login.
   Au login, le user est connecté, dans la nav un cercle fond gris avec la première lettre de son nom en noir apparait.
3. Ajouter s'enregistrer => Je crée un user, un mail et un password, je peux désormais me connecter.
4. Pizza Maker => Ajoutez un log "Admin" l'admin a une page dispo dans le menu: Create Pizza
   Sur cette page, on créer une nouvelle pizza. Une pizza nécéssite un nom, un prix et des ingrédients.
   Les ingrédients s'ajoutes via une liste "column list".
   un bouton "+" permet d'ajouter un ingrédient
   Un bouton "-" permet de supprimer l'ingrédient si il existe sur la pizza
   un bouton ajouter la pizza, l'ajoute dans le catalogue de pizza.
