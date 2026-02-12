---
layout: post
title: "Gérer un projet d'infrastructure"
---

<div class="project-header">
  <h2 class="project-title">Gestion d'un projet d'infrastructure</h2>
  <h3 class="project-subtitle">Sport Data Solution</h3>
</div>

## Résumé

POC d’un pipeline data orchestré par Kestra.

Le système ingère des déclarations d’activité (Google Forms → Google Sheet), enrichit les données (Google Maps), calcule des avantages, contrôle la qualité (Soda), puis prépare des vues pour Power BI.

Le run est traçable, rejouable et notifie sur Slack.

### Contexte & objectif

Objectif : évaluer l’impact d’avantages liés à la pratique sportive.

Le POC permet de tester des scénarios et de mesurer :

- le coût estimé pour l’entreprise
- la volumétrie d’éligibilité
- l’évolution des KPI dans le temps

Contraintes principales :

- données RH à exposition minimale
- automatisation et traçabilité
- exécution au juste nécessaire

## Solution livrée

### Chaîne end-to-end

- Orchestration : Kestra
- Traitements : scripts Python ETL
- Stockage : PostgreSQL avec séparation logique sec / metier / ops
- Qualité : Soda sur tables puis sur vues BI
- Restitution : Power BI sur vues préparées
- Notifications : Slack pour messaging et alerting

### Exécuter uniquement le nécessaire

Le flow route l’exécution selon des signaux métier :

- S : mode simulation
- G : Google Sheet modifié
- P : paramètres d’avantages modifiés

Garde-fous techniques :

- E : fichier Excel RH/Sport modifié
- B : bootstrap RH requis

{% include lightbox_image.html image="projects/proj-1/p12_schema_orchestration.jpg"  alt="Schéma d'architecture" %}

### Stack

- Kestra
- PostgreSQL
- Python
- Soda
- Google Maps API
- Power BI
- Slack

{% include lightbox_image.html image="projects/proj-1/p12_stack.jpg" alt="Stack technique" caption="Stack technique (Kestra, Postgres, Soda, Slack, Google Forms / Sheets / Maps, Power BI, Python, SQL, CSV, MS Excel)" %}

## Démo

### Lancer l’infrastructure

```bash
docker compose up -d
```

Puis ouvrir Kestra : http://localhost:8080

### Exécuter le pipeline

Flow : p12.orchestration.pipeline_avantages_sportifs

Cas d’usage :

- Réel : soumettre un Google Forms, la ligne arrive dans le Sheet, elle est intégrée au run suivant
- Simulation : SIMULATION=1 dans .env pour générer des déclaratifs fictifs

### Résultats & preuves

La solution produit :

- des données normalisées et enrichies en base
- des contrôles qualité automatisés
- des vues BI prêtes à consommer
- une historisation des KPI
- des notifications Slack (succès, anomalies, erreurs)

#### Tests Soda

{% include lightbox_image.html image="projects/proj-1/p12_tests_soda.png" alt="Tests Soda" %}

#### Notifications et alertes Slack

{% include lightbox_image.html image="projects/proj-1/p12_notif_slack.jpg" alt="Notifications Slack" %}
{% include lightbox_image.html image="projects/proj-1/p12_alerting_slack.jpg" alt="Alerting Slack" %}

#### Exemple de rapport Power BI

{% include lightbox_image.html image="projects/proj-1/p12_exemples_rapport_bi.jpg" alt="Exemples rapport BI" %}

## Compétences démontrées

- Concevoir un pipeline data end-to-end
- Orchestrer des traitements conditionnels
- Industrialiser des contrôles qualité avec Soda
- Structurer un modèle PostgreSQL orienté BI
- Mettre en place monitoring, historisation et alerting
- Intégrer des services externes par configuration

## Valeur ajoutée

- Scénarios rapides grâce à la simulation et aux paramètres
- Fiabilité avant restitution BI
- Pilotage fin des exécutions
- Communication automatisée vers les parties prenantes

## Accès au repo

{% include image.html url="https://github.com/patrick-arbessier-data/p12_sport_data_solution" image="projects/proj-1/thumbnail.jpg" alt="Repo" text="Accéder au repo"%}
