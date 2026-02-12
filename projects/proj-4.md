---
layout: post
title: "Modéliser une infrastructure hybride"
---
<div class="project-header">
  <h2 class="project-title">Modéliser une infrastructure hybride</h2>
  <h3 class="project-subtitle">Streaming & Data Lake</h3>
</div>

### Résumé

Conception d’une architecture hybride on-premise / cloud combinant flux batch et flux temps réel.

La **partie 1 - Modélisation** définit l’architecture cible sur AWS, l’intégration avec le SI existant, et les choix de sécurité, identités et coûts.

La **partie 2 - POC streaming** illustre le temps réel avec un pipeline Redpanda → PySpark pour traiter des tickets clients, enrichir et agréger les messages, puis produire des sorties exploitables.

### Contexte & objectif

Contexte :

- SI on-premise existant (ERP, CRM, identités)
- volumes de données importants
- besoins temps réel et analytique

Objectif :

- intégrer une plateforme cloud sans rupture
- sécuriser les identités et les flux
- proposer une architecture scalable et maîtrisée

Les flux batch couvrent l’export et l’intégration des données historiques et métiers, tandis que les flux temps réel adressent les événements (IoT ou tickets) nécessitant un traitement rapide et fiable.

### Solution livrée

La solution est structurée en deux livrables complémentaires :

- une **architecture hybride cible** décrivant l’intégration on-premise / AWS, les zones du data lake, et les mécanismes de sécurité et d’identité
- un **POC de streaming** démontrant un traitement temps réel de bout en bout sur un cas d’usage tickets

#### Architecture hybride

{% include lightbox_image.html image="projects/proj-4/p09_schema_infra_hybride.png"  alt="schéma d'infrastructure on-premise / cloud" caption="Schéma de l'infrastructure hybride - Cloud provider AWS"%}

- on-premise conservé comme référentiel
- ingestion batch et temps réel
- data lake structuré en zones
- traitements distribués
- entrepôt analytique centralisé

#### POC streaming

- messages produits en temps réel
- traitement avec **Spark**
- enrichissement et agrégations
- export de données préparées

##### Résultat de la création du topic

{% include lightbox_image.html image="projects/proj-4/P09_01_creation_topic_client_tickets.jpg"  alt="creation du topic"%}

##### Rsultats du Producer

{% include lightbox_image.html image="projects/proj-4/P09_03_producer_envoi_tickets_fin.jpg"  alt="Production des tickets" caption="Production de 100 tickets"%}

##### Résultat de l'agrégation Spark

{% include lightbox_image.html image="projects/proj-4/P09_07_extrait_agregation_croisee_type_priorite.jpg"  alt="agregation croisee type / priorite" caption="Agrégation croisée types / priorités"%}

### Stack

#### Modélisation cible

- **Amazon S3**
- **AWS Glue**
- **Amazon Redshift**
- **IAM / gestion des identités**

#### POC de streaming

- **Redpanda**
- **PySpark**
- **Docker**

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

## Accès au repo

{% include image.html url="https://github.com/patrick-arbessier-data/p09_modelisation_infra_cloud" image="projects/proj-4/indutechdata.jpg" alt="Repo projet 4" text="Accéder au repo"%}