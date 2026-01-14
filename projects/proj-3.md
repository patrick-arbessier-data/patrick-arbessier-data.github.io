---
layout: post
title: "Orchestrer un pipeline de flux"
---

<h2 style="text-align:center; margin-top: 0.2rem;">Orchestrer un pipeline de flux</h2>
<h3 style="text-align:center; margin-top: -0.6rem;">BottleNeck</h3>

### Résumé

Industrialisation d’un pipeline mensuel d’analyse de ventes.

Le pipeline orchestre des flux de données hétérogènes afin de produire automatiquement des indicateurs fiables et exploitables.

### Contexte & objectif

Contexte :

- besoin mensuel de pilotage produit
- trois sources en entrée (ERP, web, liaison)
- réduction des manipulations manuelles

Objectif :

- concevoir et planifier l’ordonnancement de flux de données et de processus complets
- automatiser une exécution mensuelle fiable

### Solution livrée

#### Pipeline nominal A → E

- A : ingestion des données
- B : préparation et nettoyage
- C : jointure via fichier de liaison
- D : calcul des indicateurs
- E : production des tables finales et exports

**Kestra** orchestre l’ensemble via un workflow unique.

#### Pipeline enrichi avec contrôles

- ajout de tests à chaque étape
- validation systématique des volumes et indicateurs
- échec du run en cas d’écart significatif

### Stack

- **Kestra**
- **DuckDB**
- **Python**
- **SQL**
- **Docker**

### Résultats & preuves

- Pipeline automatisé et planifié
- Données contrôlées à chaque étape
- Résultats reproductibles et traçables

### Compétences démontrées

- Modéliser un **data lineage**
- Orchestrer des workflows multi-étapes
- Mettre en place une planification récurrente
- Implémenter des contrôles de cohérence
- Centraliser les traitements dans une base analytique

### Valeur ajoutée

- Fiabilité accrue des chiffres
- Réduction des erreurs humaines
- Lecture claire des dépendances et des flux

### Liens

Repo GitHub du projet : à venir

### Illustration

{% include image.html image="projects/proj-3/thumbnail.jpg" %}
