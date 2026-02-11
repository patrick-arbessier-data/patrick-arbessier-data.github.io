---
layout: post
title: "Modéliser une infrastructure hybride"
---
<div class="project-header">
  <h2 class="project-title">Modéliser une infrastructure hybride</h2>
  <h3 class="project-subtitle">Streaming & Data Lake</h3>
</div>

### Résumé

Conception d’une architecture **hybride on-premise / cloud** intégrant des flux **batch** et **temps réel** pour gérer des tockets clients avec Redpanda et PySpark.

Le projet combine étude d’existant, modélisation cible et POC de streaming.

### Contexte & objectif

Contexte :

- SI on-premise existant (ERP, CRM, identités)
- volumes de données importants
- besoins temps réel et analytique

Objectif :

- intégrer une plateforme cloud sans rupture
- sécuriser les identités et les flux
- proposer une architecture scalable et maîtrisée

### Solution livrée

#### Architecture hybride

{% include lightbox_image.html image="projects/proj-4/p09_schema_infra_hybride.png"  alt="schéma d'infrastructure on-premise / cloud" caption="Schéma de l'infrastructure hybride - Provider cloud AWS"%}

- on-premise conservé comme référentiel
- ingestion temps réel via streaming
- data lake structuré en zones
- traitements distribués
- entrepôt analytique centralisé

#### POC streaming

- messages produits en temps réel
- traitement avec **Spark**
- enrichissement et agrégations
- export de données préparées

### Stack

- **Redpanda**
- **PySpark**
- **Docker**
- **Amazon S3**
- **AWS Glue**
- **Amazon Redshift**
- **IAM / gestion des identités**

### Résultats & preuves

- architecture cohérente et extensible
- intégration batch + streaming
- flux sécurisés et identités maîtrisées
- estimation des coûts et leviers de contrôle

### Compétences démontrées

- Concevoir une architecture **hybride**
- Mettre en place une chaîne **streaming**
- Structurer un **data lake**
- Traiter des flux avec **Spark**
- Intégrer sécurité, identités et coûts dès la conception

### Valeur ajoutée

- Transition cloud progressive
- Vision claire des compromis techniques
- Base solide pour industrialisation future

### Liens

Repo GitHub du projet : à venir

### Illustration

{% include image.html image="projects/proj-4/thumbnail.jpg" %}
