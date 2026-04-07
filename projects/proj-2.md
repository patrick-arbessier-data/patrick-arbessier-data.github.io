---
layout: post
title: "POC RAG Bordeaux Métropole"
---

<div class="project-header">
  <h2 class="project-title">POC RAG Evénements<br />Bordeaux Métropole</h2>
  <h3 class="project-subtitle">Puls-Events</h3>
</div>

## Résumé

POC **RAG** (Retrieval-Augmented Generation) appliqué à des événements culturels et de loisirs.

Chaîne complète : ingestion API, préparation des données, **embeddings**, index **FAISS**, retrieval sémantique et génération via **Mistral**, exposée via une interface **Streamlit**.

## Contexte & objectif

Objectif : fournir des recommandations d'événements pertinentes et explicables, en limitant les hallucinations grâce aux données sources indexées complétées par une granularité contextuelle.

Le projet couvre :

- l'analyse de requêtes utilisateurs (lieu, date, type)
- la recherche sémantique
- la génération de réponses contextualisées

## Solution livrée

### Pipeline RAG

{% include lightbox_image.html image="projects/proj-2/p11_bloc1_ingestion.jpg" alt="Ingestion" caption="Phase d'ingestion" %}

{% include lightbox_image.html image="projects/proj-2/p11_bloc2_vectorisation.jpg" alt="phase embeddings & vectorisation" caption="Phase d'embeddings & de vectorisation"%}

{% include lightbox_image.html image="projects/proj-2/p11_bloc2_rag_ui.jpg" alt="retrieval, LLM et UI" caption="Phase de retrieval & affichage UI"%}

- Ingestion : API OpenAgenda, filtrage géographique et temporel
- Préparation : normalisation, enrichissement, création du texte d'indexation
- Vectorisation : **SentenceTransformers**
- Index : **FAISS** (IndexFlatIP)
- Génération : **Mistral**
- Interface : **Streamlit**

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
      <td>Python</td>
      <td>scripting, traitement et orchestration</td>
      <td>polyvalence et richesse des librairies NLP / ML</td>
    </tr>
    <tr>
      <td>SentenceTransformers</td>
      <td>génération d'embeddings</td>
      <td>modèles pré-entraînés performants pour la recherche sémantique</td>
    </tr>
    <tr>
      <td>FAISS</td>
      <td>index vectoriel et recherche par similarité</td>
      <td>recherche rapide et efficace sur embeddings en local</td>
    </tr>
    <tr>
      <td>Mistral API</td>
      <td>génération de réponses contextualisées</td>
      <td>modèle performant et accessible via API</td>
    </tr>
    <tr>
      <td>Streamlit</td>
      <td>interface utilisateur</td>
      <td>prototypage rapide d'une UI interactive sans frontend dédié</td>
    </tr>
    <tr>
      <td>pytest</td>
      <td>tests automatisés</td>
      <td>valider les comportements critiques du pipeline</td>
    </tr>
  </tbody>
</table>

## Résultats & preuves

{% include lightbox_image.html image="projects/proj-2/p11_streamlit.jpg" alt="affichage interface utilisateur" caption="Exemple de réponses adaptées / pertinentes affichées pour l'utilisateur"%}

- Index vectoriel cohérent et rejouable
- Réponses appuyées sur des événements réels
- Paramétrage fin du retrieval et de la génération
- UI permettant d'explorer le comportement du RAG

## Valeur ajoutée

- Réduction des hallucinations grâce au retrieval
- Réponses explicables via les contextes récupérés
- Architecture modulaire et reproductible

## Accès au repo

{% include image.html url="https://github.com/patrick-arbessier-data/p11_conception_deploiement_rag" image="projects/proj-2/thumbnail.jpg" alt="Repo" text="Accéder au repo"%}
