---
layout: post
title: "Orchestrer un pipeline de flux"
---

<h2 style="text-align:center; margin-top: 0.2rem;">Orchestrer un pipeline de flux</h2>
<h3 style="text-align:center; margin-top: -0.6rem;">BottleNeck · Kestra · DuckDB</h3>

### Résumé

Industrialisation d’un pipeline mensuel d’analyse de ventes de vins.

Objectif : produire automatiquement un **rapport de chiffre d’affaires** et des listes de vins **premium** / **ordinaires**, à partir de trois sources hétérogènes. fileciteturn2file0


### Contexte & objectif

Contexte métier :
- Besoin mensuel des responsables produits pour piloter deux segments : premium vs ordinaires
- Trois fichiers en entrée : ERP, web, liaison
- Enjeu : réduire les manipulations manuelles et sécuriser la qualité des chiffres fileciteturn2file0

Objectif du projet :
- Concevoir et planifier l’ordonnancement de flux de données et de processus complets, avec une exécution mensuelle automatisée fileciteturn2file0


### Solution livrée

#### Pipeline nominal A→E orchestré par Kestra

Le pipeline suit un flux A→E :
- A : ingestion des données ERP / Web / Liaison
- B : préparation et nettoyage
- C : jointure ERP / Web via le fichier de liaison
- D : calcul du CA par produit et du CA total
- E : production des tables finales, classification premium / ordinaire, exports fileciteturn2file0

Kestra agit comme chef d’orchestre :
- un workflow unique **bottleneck_nominal** pilote l’enchaînement A→E
- déclenchement des scripts **Python** et **SQL**
- vue centralisée sur exécutions, logs et statuts fileciteturn2file0

[Illustration à ajouter : logigramme A→E (page 6) et vue Kestra (page 8)] fileciteturn2file0


#### Planification mensuelle

Ajout d’un trigger **cron** pour exécution récurrente :
- déclenchement automatique à date/heure fixes (ex. le 15 à 9h)
- historique des runs, statut, durée, logs fileciteturn2file0


#### Workflow enrichi avec tests A→E

Un second workflow **bottleneck_enrichi** encapsule le nominal et ajoute des tests alignés sur des valeurs de référence.

Principe :
- le run est considéré “réussi” uniquement si l’exécution **et** les tests sont au vert fileciteturn2file0

Exemples de garde-fous (A→E) :
- A : présence et conformité des fichiers sources
- B : volumes après nettoyage et dédoublonnage
- C : lignes après jointure
- D : CA total égal à une valeur de référence
- E : nombre de vins premium attendu (z-score) fileciteturn2file0

[Illustration à ajouter : stratégie de tests (pages 9–11) + workflow enrichi (pages 13–14)] fileciteturn2file0


### Stack

- **Kestra** (orchestration, planification, suivi d’exécution) fileciteturn2file0
- **DuckDB** (base unique pour centraliser et consolider) fileciteturn2file0
- **Python** (ingestion, préparation, exports) fileciteturn2file0
- **SQL** (jointures, agrégations, contrôles) fileciteturn2file0
- **Docker** (environnement d’exécution) fileciteturn2file0


### Résultats & preuves

Le pipeline ne fait pas qu’exécuter :
- il compare systématiquement ses résultats à un jeu de **valeurs de référence**
- il bloque en cas d’écart significatif fileciteturn2file0

Exemples de références utilisées :
- ERP clean : 825 lignes
- Liaison clean : 825 lignes
- Web filtré avant dédoublonnage : 1 428 lignes
- Sales unifié : 714 lignes
- CA total : 70 568,60 €
- Vins premium : 30 fileciteturn2file0

[Illustration à ajouter : vérifications DuckDB CLI (page 12)] fileciteturn2file0


### Compétences démontrées

- Concevoir un **data lineage** et le traduire en workflow orchestré
- Orchestrer un flux **multi-étapes** avec dépendances explicites
- Mettre en place une planification **cron** et un suivi d’exécution
- Industrialiser des **tests de conformité et de cohérence** à chaque étape
- Centraliser et requêter des données dans une base analytique **DuckDB**
- Distinguer clairement traitement nominal et couche de contrôle fileciteturn2file0


### Valeur ajoutée

- Production mensuelle automatique, fiable et répétable des indicateurs
- Réduction des manipulations manuelles et des risques d’erreurs
- Chiffres “stables” grâce à des garde-fous alignés sur des références
- Architecture simplifiée autour d’une base unique et de workflows lisibles fileciteturn2file0


### Liens

Brief OpenClassrooms : [Projet OpenClassrooms](https://openclassrooms.com/fr/paths/1039/projects/1834)

Repo GitHub du projet : à venir


### Accès (repo à venir)

{% include image.html url="https://openclassrooms.com/fr/paths/1039/projects/1834" image="projects/proj-3/thumbnail.jpg" %}
