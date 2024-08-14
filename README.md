# Bacdephilosophie.com

Ce site m'a servi à réviser pour le Bac de Philo 2024.

## Organisation

Il est organisé en trois sections principales :

- Notions
- Sujets
- Penseurs

**Notions** et **Penseurs** sont les plus importantes.

Lorsque la professeure présentait un nouveau philosophe, je consultais sa fiche sur le site. Parfois, il est utile de compléter la fiche avec des informations supplémentaires sur le philosophe. Ensuite, je créais un sous-titre (## en Markdown) avec le concept abordé par ce philosophe. Par exemple, si on parlait de l'exploitation de la classe ouvrière avec Marx, j'ajoutais dans la fiche de Marx :

```md
## Karl Marx - Exploitation de la classe ouvrière

Explication
```

Ensuite, dans la fiche "Travail" ou "État" (ou une autre fiche où il serait pertinent de se souvenir de cette notion), j'ajoutais un lien vers cette section. C'est également très utile de créer des liens entre les fiches lorsque cela fait sens. Par exemple, si un philosophe fait référence à une notion développée par un autre, un lien peut être ajouté.

## Obsidian

J'ai utilisé Obsidian pour rédiger les cours. Deux points super importants :

- Utilise les liens, c’est ultra utile.
- Le plugin Obsidian Copilot est génial : il te propose des suggestions basées sur l'IA pendant que tu écris. Ne prends pas ces suggestions au pied de la lettre, mais elles peuvent t'aider à mieux structurer ton texte. Même si ce n’est pas parfait, ça te donne une direction. Tu peux demander à M. Labidi de t’aider avec l’abonnement ; envoie-lui un email, il sera ravi de t’aider. En tant qu’élève, tu peux l’obtenir gratuitement via le GitHub Student Pack (qui offre d'autres avantages sympas aussi).

Les plugins devraient se configurer automatiquement, car j'ai laissé le dossier `.obsidian` dans le dépôt avec les plugins. Normalement, une fois que tu ouvres le "vault" dans `./content`, tout devrait fonctionner directement.

Amuse-toi avec Obsidian, n’hésite pas à ajouter des plugins ou d'autres fonctionnalités qui te semblent utiles (assure-toi juste qu’ils soient compatibles avec Quartz ; Excalidraw ne l’est pas, par exemple).

Il y a un dossier `0.-Templates` car sur Obsidian, tu peux utiliser des modèles pour chaque type de fiche. Par exemple, si je veux créer une nouvelle fiche pour un penseur, j'ai déjà un modèle tout prêt. Si tu crées de nouveaux types de fiches (par exemple des fiches de textes), il pourrait être utile de créer un modèle pour celles-ci.

Obsidian fonctionne comme la plupart des éditeurs Markdown, mais il est un peu plus puissant avec les liens entre les notes, alors profite-en.

## Quartz

Quartz est le serveur web qui prend le "vault" d'Obsidian et le transforme en site statique (c'est un SSG). Ne te prends pas trop la tête avec ça, j'ai fait quelques ajustements manuels, mais normalement tu n’auras pas besoin de toucher au code, c’est un logiciel déjà configuré.

## Git et Vercel

J'ai mis en place un système d'intégration continue et de déploiement continu, donc une fois que tu "commits" et que tu "push" sur le dépôt distant sur GitHub, les changements sont automatiquement envoyés sur bacdephilosophie.com.

## Suggestions pour le site

Il y a certaines choses que j'aurais aimé faire si j'avais eu plus de temps. Si tu veux les réaliser, lance-toi :

- **Fiches textes** : Parfois, il est utile d'avoir un texte sous la main. C'est un peu fastidieux car Mme Geli met parfois les textes sous forme d'images, ce qui rend la conversion en texte plus compliquée, mais tu peux peut-être trouver des sites qui le font automatiquement, ou utiliser Google Lens ou l’appareil photo d’iOS.
- **Fiches exemples** : Sur les fiches notions, j'ajoute parfois des exemples (par exemple une œuvre d'art, un film). Cela ne correspond pas forcément à une idée de penseur, donc je les mets sur les fiches notions.
- **Intros/Conclusions joker** : De temps en temps, il est utile de rédiger des introductions et conclusions passe-partout. J'ai fait cela pour mon bac, et ça a bien marché. Ce sont des amorces qui peuvent s'appliquer à plusieurs sujets, avec des définitions. Parfois, ça fonctionne, parfois non, mais c'est toujours utile d'avoir ça sous la main.

Ce sont des idées que j'ai eues mais que je n'ai pas eu le temps de réaliser. Peut-être que toi, en commençant avec une base déjà établie, tu auras le temps. Mais fais avant tout ce qui te semble utile, ce site est vraiment fait pour toi.

N’hésite pas à améliorer ou corriger ce que j’ai écrit, si nécessaire. Bref, fais de ce site ton lieu de révision.

Ah oui, il se peut que les notions changent en 2025, car elles changent souvent. Fais attention à ne pas réviser quelque chose qui n’est plus au programme (et si ça change, ajoute une section "Anciennes notions" sur la page d'accueil).

## Suggestions pour le bac

Quelques conseils pour le bac de philo (j'ai eu 16) :

- Apprends la méthode dès le début de l’année. C’est le premier truc que tu dois maîtriser. Les correcteurs veulent voir que tu as compris que le sujet qu’ils te donnent a plusieurs enjeux pas évidents. Ils veulent que tu joues avec toutes les définitions possibles des notions, les mots clés, les notions satellites (celles qui ne sont pas forcément mentionnées). Mme Geli va t’expliquer tout cela, et tu peux aussi trouver des vidéos YouTube sur le sujet. Mais apprends-la tôt. Crois-moi, il vaut mieux savoir rédiger une bonne dissertation que d’apprendre toutes les notions par cœur.
- Insiste pour utiliser ton ordinateur en cours. Elle n’aimera peut-être pas trop au début, mais elle te laissera faire si elle voit que tu travailles. Essaie de compléter les fiches au fur et à mesure des cours, et à la maison (avant le bac blanc probablement), tu réorganises tout proprement.

## Dernières idées

Ne te force pas à gérer le site comme moi. Je l’ai fait avant tout pour réviser. Si tu vois que ça ne t’aide pas, ne le fais pas. Je n'ai pas d'attachement émotionnel à ce site, je te le passe parce que je pense que ça pourrait t'aider et j’aime bien l’idée qu’un truc que j’ai fait puisse servir à d’autres, et continuer de passer de génération en génération au LIL (ou dans d’autres lycées). Par contre, essaie de le transmettre à quelqu’un d’autre ou de me prévenir si tu ne veux plus t’en occuper.

Je suis à Londres en année de césure sans faire grand-chose, donc n’hésite pas à me contacter si tu ne comprends pas un truc sur l’organisation du site, ou même pour de l’aide. Je suis super ouvert.

Bonne chance pour le bac l’année prochaine, tu vas tout déchirer !

Gabriel