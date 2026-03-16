---
layout: post
title: "Concevoir un pipeline d’avantages sportifs"
---

<div class="project-header">
  <h2 class="project-title">Concevoir une infrastructure de <br />données pour les avantages sportifs</h2>
  <h3 class="project-subtitle">Sport Data Solution</h3>
</div>

## Résumé

POC d’un pipeline data end-to-end conçu pour évaluer la faisabilité d’un dispositif d’avantages sportifs en entreprise.

La solution ingère des déclarations d’activité (Google Forms → Google Sheet), contrôle leur cohérence, enrichit les données via l'API Google Maps, calcule les avantages, applique des contrôles qualité avec Soda, déclenche des notifications Slack et prépare des données historisées pour Power BI.

L’objectif est de tester à la fois la robustesse technique, les données nécessaires au dispositif et l’impact financier des règles d’éligibilité.

L’exécution du pipeline démontre la faisabilité d’une chaîne data robuste, traçable et rejouable pour piloter l’éligibilité aux avantages sportifs et en mesurer l’impact.

## Contexte & objectif

L’entreprise veut valider un dispositif encore non industrialisé afin d’en mesurer les coûts, de comparer différents scénarios et d’en produire une restitution synthétique via des indicateurs.

Pour y parvenir, elle veut tester la faisabilité et l’impact de deux avantages avant déploiement :

- Une prime sportive de 5 % du salaire annuel brut pour les salariés venant au bureau par un mode de déplacement sportif
- 5 journées bien-être pour les salariés ayant au moins 15 activités physiques par an

Le POC doit répondre à trois questions :

- Le pipeline permet-il d’ingérer, transformer, contrôler et restituer les données de manière robuste, sécurisée et supervisée ?
- Quelles données faut-il collecter, transformer ou calculer pour déterminer l’éligibilité aux avantages ?
- Quel est l’impact financier des avantages proposés, et comment varie-t-il selon différents scénarios ou hypothèses de calcul ?

## Périmètre, contraintes & hypothèses

Le POC couvre :

- l’ingestion des déclarations d’activité et des données RH nécessaires au calcul des avantages
- le calcul de l’éligibilité et de l’impact financier selon différents scénarios
- les contrôles de cohérence, de qualité et le suivi d’exécution du pipeline
- les notifications Slack et la préparation de données historisées pour Power BI

Contraintes et hypothèses :

- exposition minimale des données RH sensibles
- historique simulé sur 12 mois pour tester les flux et les scénarios
- distances domicile-travail contrôlées ou calculées via l’API Google Maps
- exécution conditionnelle au juste nécessaire pour éviter les recalculs inutiles
- POC centré sur la faisabilité, le pilotage et la restitution, sans déploiement généralisé du dispositif

## Démarche & logique de résolution

Le projet a été construit en six étapes :

1. cadrer les règles métier, les conditions d’éligibilité et les scénarios à tester
2. définir un pipeline end-to-end capable d’ingérer, transformer, contrôler et restituer les données
3. structurer le stockage PostgreSQL en zones sécurité / métier / ops pour séparer données sensibles, traitements métier et suivi d’exécution
4. intégrer les sources réelles et simulées, puis enrichir les données avec l’API Google Maps pour fiabiliser les trajets déclarés
5. calculer les avantages, historiser les indicateurs et préparer les vues de restitution
6. appliquer des contrôles qualité avec Soda, superviser les runs et limiter l’exécution au strict nécessaire selon les changements détectés

## Solution livrée

La solution s’organise en une chaîne end-to-end pilotée par Kestra :

- ingestion des déclarations d’activité depuis Google Forms / Google Sheet
- chargement des données RH, sportives et des paramètres d’avantages dans PostgreSQL
- enrichissement des trajets et contrôle de cohérence via l’API Google Maps
- calcul de l’éligibilité, des avantages et des indicateurs de pilotage
- contrôles qualité avec Soda sur les tables métier et les vues de restitution
- notifications Slack pour les messages métier et l’alerting
- préparation de données historisées pour Power BI

Le pipeline route l’exécution selon les signaux détectés : simulation, modification des sources, changement des paramètres d’avantages ou besoin de réinitialisation. Cette logique permet de rejouer le POC sans relancer inutilement toute la chaîne.

{% include lightbox_image.html image="projects/proj-1/p12_stack.jpg" alt="Stack technique" caption="Stack technique (Kestra, Postgres, Soda, Slack, Google Forms / Sheets / Maps, Power BI, Python, SQL, CSV, MS Excel)" %}

## Stack

| Outil / composant | Rôle | Pourquoi |
| --- | --- | --- |
| Kestra | orchestration du pipeline | centraliser l’exécution, le suivi et les relances conditionnelles |
| Python | extraction, transformation, calculs et simulation | souplesse de traitement et logique métier |
| PostgreSQL | stockage des données métier, sécurité, opérations et vues BI | structurer les données et séparer les usages |
| Soda | contrôles qualité | automatiser les vérifications sur tables et vues |
| Google Maps API | contrôle et calcul des distances domicile-travail | fiabiliser les déclarations et enrichir les données |
| MS Excel | source legacy RH et sport | intégrer les données salariés existantes au POC |
| Google Forms / Google Sheets | collecte des déclarations d’activité | disposer d’une saisie simple et exploitable dans le POC |
| CSV | fichiers intermédiaires de transformation | faciliter certains échanges et traitements de données |
| Slack API / Webhook | notifications métier et alerting | informer rapidement sur les événements et les anomalies |
| Power BI | restitution des indicateurs | analyser les coûts, l’éligibilité et les scénarios |

## Mise en œuvre

L’exécution du POC suit une chaîne de traitement bout en bout :

1. ingestion des sources RH, sportives, déclaratives et simulées
2. chargement et structuration des données dans PostgreSQL
3. enrichissement des trajets et contrôle de cohérence via l’API Google Maps
4. calcul de l’éligibilité, des avantages et des indicateurs selon les paramètres actifs
5. application de contrôles qualité avec Soda sur les tables métier et les vues de restitution
6. génération de notifications Slack, historisation des données et préparation des vues Power BI

Le pipeline adapte son exécution selon les changements détectés sur les sources, les paramètres ou le mode simulation, afin de rejouer uniquement les traitements nécessaires.

## Résultats & preuves

Le POC démontre :

- un pipeline data end-to-end exécuté et orchestré par Kestra
- des données RH et sportives normalisées, enrichies et chargées en base
- un contrôle de cohérence des trajets via l’API Google Maps
- des contrôles qualité automatisés avec Soda sur les tables métier et les vues BI
- des notifications Slack pour les succès, anomalies et erreurs
- des données historisées pour analyser coûts, éligibilité et évolution des KPI dans Power BI

### Tests Soda

{% include lightbox_image.html image="projects/proj-1/p12_tests_soda.png" alt="Tests Soda" %}

### Notifications et alertes Slack

{% include lightbox_image.html image="projects/proj-1/p12_notif_slack.jpg" alt="Notifications Slack" %}
{% include lightbox_image.html image="projects/proj-1/p12_alerting_slack.jpg" alt="Alerting Slack" %}

### Exemple de rapport Power BI

{% include lightbox_image.html image="projects/proj-1/p12_exemples_rapport_bi.jpg" alt="Exemples rapport BI" %}

## Compétences démontrées

- Concevoir un pipeline data end-to-end orienté cas d’usage métier
- Orchestrer des traitements conditionnels, traçables et rejouables
- Structurer un modèle PostgreSQL exploitable pour le pilotage BI
- Industrialiser des contrôles qualité sur les données et les vues de restitution
- Intégrer et orchestrer des services externes dans une chaîne unique
- Mettre en place une chaîne de monitoring, d'historisation et d'alerting
- Traduire des règles métier d’éligibilité en logique de données et de contrôle

## Valeur ajoutée

- Tester la faisabilité du dispositif avant généralisation à l’échelle de l’entreprise
- Quantifier le coût potentiel des avantages à partir de règles paramétrables
- Fiabiliser les déclarations salariés par des contrôles automatiques plutôt que par revue manuelle
- Rendre le dispositif rejouable si les données sources ou les paramètres d’avantages évoluent
- Alimenter le pilotage RH et financier par des indicateurs exploitables, tout en soutenant la communication interne autour de la pratique sportive

## Accès au repo

{% include image.html url="https://github.com/patrick-arbessier-data/p12_sport_data_solution" image="projects/proj-1/thumbnail.jpg" alt="Repo" text="Accéder au repo"%}
