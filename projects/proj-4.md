---
layout: post
title: "Modéliser une infrastructure hybride"
---

<div class="project-header">
  <h2 class="project-title">Modéliser une infrastructure hybride</h2>
  <h3 class="project-subtitle">Streaming & Data Lake</h3>
</div>

## Résumé

Conception d'une architecture hybride on-premise / cloud combinant flux batch et flux temps réel.

La **partie 1 - Modélisation** définit l'architecture cible sur AWS, l'intégration avec le SI existant, et les choix de sécurité, identités et coûts.

La **partie 2 - POC streaming** illustre le temps réel avec un pipeline Redpanda → PySpark pour traiter des tickets clients, enrichir et agréger les messages, puis produire des sorties exploitables.

## Contexte & objectif

Contexte :

- SI on-premise existant (ERP, CRM, identités)
- volumes de données importants
- besoins temps réel et analytique

Objectif :

- intégrer une plateforme cloud sans rupture
- sécuriser les identités et les flux
- proposer une architecture scalable et maîtrisée

Les flux batch couvrent l'export et l'intégration des données historiques et métiers, tandis que les flux temps réel adressent les événements (IoT ou tickets) nécessitant un traitement rapide et fiable.

## Démarche

- Conservation du SI local comme référentiel
- Séparation batch / temps réel
- Continuité des identités via AD Connector plutôt que duplication d'annuaire

## Solution livrée

La solution est structurée en deux livrables complémentaires :

- une **architecture hybride cible** décrivant l'intégration on-premise / AWS, les zones du data lake, et les mécanismes de sécurité et d'identité
- un **POC de streaming** démontrant un traitement quasi temps réel de bout en bout sur un cas d'usage tickets

### Architecture hybride

{% include lightbox_image.html image="projects/proj-4/p09_schema_infra_hybride.png" alt="schéma d'infrastructure on-premise / cloud" caption="Schéma de l'infrastructure hybride - Cloud provider AWS"%}

- on-premise conservé comme référentiel
- ingestion batch et temps réel
- data lake structuré en zones
- traitements distribués
- entrepôt analytique centralisé

### POC streaming

- messages produits en temps réel
- traitement avec **Spark**
- enrichissement et agrégations
- export de données préparées

#### Résultat de la création du topic

{% include lightbox_image.html image="projects/proj-4/P09_01_creation_topic_client_tickets.jpg" alt="creation du topic"%}

#### Résultat du Producer

{% include lightbox_image.html image="projects/proj-4/P09_03_producer_envoi_tickets_fin.jpg" alt="Production des tickets" caption="Production de 100 tickets"%}

#### Résultat de l'agrégation Spark

{% include lightbox_image.html image="projects/proj-4/P09_07_extrait_agregation_croisee_type_priorite.jpg" alt="agregation croisee type / priorite" caption="Agrégation croisée types / priorités"%}

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
      <td>Amazon S3</td>
      <td>stockage du data lake</td>
      <td>scalabilité et intégration native dans l'écosystème AWS</td>
    </tr>
    <tr>
      <td>AWS Glue</td>
      <td>catalogue et ETL managé</td>
      <td>simplifier l'intégration des sources hétérogènes sans infrastructure dédiée</td>
    </tr>
    <tr>
      <td>Amazon Redshift</td>
      <td>entrepôt analytique</td>
      <td>requêtage performant sur grands volumes pour le pilotage BI</td>
    </tr>
    <tr>
      <td>IAM</td>
      <td>gestion des identités et des accès</td>
      <td>sécuriser les flux et les permissions dès la conception</td>
    </tr>
    <tr>
      <td>Redpanda</td>
      <td>broker de messages</td>
      <td>alternative Kafka légère et performante pour le streaming local</td>
    </tr>
    <tr>
      <td>PySpark</td>
      <td>traitement distribué des flux temps réel</td>
      <td>puissance de traitement et agrégations sur événements en continu</td>
    </tr>
    <tr>
      <td>Docker</td>
      <td>conteneurisation du POC</td>
      <td>reproductibilité de l'environnement de streaming</td>
    </tr>
  </tbody>
</table>

## Résultats & preuves

- architecture hybride cible définie
- intégration batch / temps réel modélisée
- sécurité, identités et coûts intégrés à la conception
- POC streaming exécuté de bout en bout
- production de 100 tickets
- sorties générées : enrichissement + 3 agrégations

## Valeur ajoutée

- Préparer une transition cloud progressive sans remettre en cause le SI existant
- Sécuriser dès la conception l'intégration entre on-premise, identités et flux de données
- Valider par un POC la faisabilité d'un traitement quasi temps réel avant industrialisation

## Accès au repo

{% include image.html url="https://github.com/patrick-arbessier-data/p09_modelisation_infra_cloud" image="projects/proj-4/indutechdata.jpg" alt="Repo projet 4" text="Accéder au repo"%}
