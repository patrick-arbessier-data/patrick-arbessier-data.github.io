---
layout: post
title: "Orchestrer un pipeline de flux"
---

<div class="project-header">
  <h2 class="project-title">Orchestrer un pipeline de flux</h2>
  <h3 class="project-subtitle">BottleNeck</h3>
</div>

## Résumé

Industrialisation d'un pipeline mensuel d'analyse de ventes.

Le pipeline orchestre des flux de données hétérogènes afin de produire automatiquement des indicateurs fiables et exploitables.

## Contexte & objectif

Contexte :

- besoin mensuel de pilotage produit
- trois sources en entrée (ERP, web, liaison)
- réduction des manipulations manuelles

Objectif :

- concevoir et planifier l'ordonnancement de flux de données et de processus complets
- automatiser une exécution mensuelle fiable

## Solution livrée

### Pipeline nominal A → E

- A : ingestion des données
- B : préparation et nettoyage
- C : jointure via fichier de liaison
- D : calcul des indicateurs
- E : production des tables finales et exports

**Kestra** orchestre l'ensemble via un workflow unique.

### Pipeline enrichi avec contrôles

- ajout de tests à chaque étape
- validation systématique des volumes et indicateurs
- échec du run en cas d'écart significatif

{% include lightbox_image.html image="projects/proj-3/p10_diagramme_flux_taches_bottleneck.png" alt="diagramme_pipeline_complet" caption="Diagramme de flux complet"%}

## Stack

<table class="project-table">
  <thead>
    <tr>
      <th>Outil / composant</th>
      <th>Rôle</th>
      <th>Pourquoi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kestra</td>
      <td>orchestration et planification</td>
      <td>centraliser l'exécution, la planification et le routage des tâches</td>
    </tr>
    <tr>
      <td>DuckDB</td>
      <td>base analytique</td>
      <td>traitement SQL rapide sur fichiers locaux sans infrastructure dédiée</td>
    </tr>
    <tr>
      <td>Python</td>
      <td>transformation et contrôles</td>
      <td>flexibilité pour les traitements métier et les tests de cohérence</td>
    </tr>
    <tr>
      <td>SQL</td>
      <td>requêtage et transformations analytiques</td>
      <td>lisibilité et maintenabilité des calculs d'indicateurs</td>
    </tr>
    <tr>
      <td>Docker</td>
      <td>conteneurisation</td>
      <td>reproductibilité de l'environnement d'exécution</td>
    </tr>
  </tbody>
</table>

{% include lightbox_image.html image="projects/proj-3/p10_stack.png" alt="Stack technique" caption="Stack technique (Kestra, DuckDB, Python, SQL, CSV, MS Excel)"%}

## Résultats & preuves

- Pipeline automatisé et planifié

{% include lightbox_image.html image="projects/proj-3/p10_orchestration_complete_kestra.jpg" alt="Orchestration complète avec planification" caption="Orchestration complète avec planification"%}

- Données contrôlées à chaque étape

{% include lightbox_image.html image="projects/proj-3/p10_conformite_tests.jpg" alt="Conformité attendus / tests" caption="Conformité attendus / tests"%}

- Résultats reproductibles et traçables

{% include lightbox_image.html image="projects/proj-3/p10_gantt enrichi.jpg" alt="Gantt d'exécution" caption="Gantt d'exécution"%}

## Valeur ajoutée

- Fiabilité accrue des chiffres
- Réduction des erreurs humaines
- Lecture claire des dépendances et des flux

## Accès au repo

Repo GitHub du projet : en cours de finalisation
