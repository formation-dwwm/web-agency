# Mise en Situation | Web Statique

Un projet en deux parties distinctes à réaliser en simultané :
- Landing Page
- Système de partage d'informations

## Landing Page

Vous êtes maintenant développeurs ! Afin d'affirmer votre identité et être visibles sur le web, notre équipe Web a besoin d'une page de communication.  
A cette fin nous nous proposons de créer une landing page regroupant toutes les informations publiques sur une unique page web au design moderne.

### Architecture de la page

**Navigation**
Nav bar horizontale en haut de l'écran, fixe. Logo ou intitulé à gauche, liens sur la droite. Se transforme en menu déroulant avec icône Hamburger pour les plus petits écrans.

**Jumbotron**
Image accueillante, message de bienvenue ou call-to-action. Un gros bouton menant aux #service ou #contact (à décider).

**Services**
Les services proposés par l'équipe, regroupés en trois grandes familles.  
Par ex:
- Vitrines/Landing Pages (Web Statique)
- Sites complexes (Web Dynamique)
- Applications mobiles

**Portfolio**
Projets développés par l'équipe. Chaque projet est représenté par une card cliquable, qui affichera les informations détaillées dans un modal.

**About**
Timeline de l'équipe, avec par exemple:
- Entrée en formation
- Création du site de l'équipe
- Période en Entreprise
- Vers l'emploi !

**Team**
Présentation succincte des acteurs de l'équipe. Pour chaque personne :
- Avatar
- Nom et prénom
- Rôle (funky rôle ?)
- Liens sociaux

**Partenaires**
Bandeau indiquant les partenaires principaux de l'équipe (AFPA, CR PACA, Fond Social Européen, ...)

**Contact**
Simple petit formulaire de contact:
- Nom et prénom
- e-mail
- téléphone
- message
Et bouton Envoyer.

### Contraintes
- Responsive et adaptable
- Mobile First
- Static development (except contact form service)
- Accessibility AA 
- Tags SEO présents
- Targetted at modern browsers mainly

### Bonus
- Rendre le formulaire de contact opérationnel (WebService ?)

## Partage d'informations

Notre équipe a besoin d'une plateforme de partage d'information.  
Sur la base de ce qui a été réalisé pour les articles sur le Terminal, nous allons créer un **nouveau développement** nous permettant à chacun de facilement rédiger et partager de nouveaux articles, mais cette fois plus généralistes qu'uniquement sur le Terminal.

### Architecture

**Articles**
Format markdown bien connu. Chaque post peut avoir:
- une date
- une catégorie
- des tags
- un auteur référencé de l'équipe
- éventuellement une image référencée comme image principale

**Accueil**
Listing des différents articles proposés. 
Format liste (penser Medium ou autre site d'information) de cards avec pour chaque post:
- Titre
- Description ou 150 premiers caractères
- Auteur
- Image si une est indiquée

**Page d'article**
Nécéssairement toutes les informations liées à l'articles doivent être visibles.  

Notamment, faire apparaître l'auteur et son avatar dans une cartouche similaire à la landing page.

### Bonus
- Système de commentaires (WebService ?)
- Système de recherche des posts (client JS)


## Instruction générales

Le tout doit être développé en équipe, itérativement et avec Agilité :) ! Puisque ce projet propose deux développements distincts, vous veillerez à bien synchroniser l'ensemble de l'équipe. 
Réalisez :
- Maquettes
- Sites statiques
- Mises en ligne
