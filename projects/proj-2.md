---
layout: post
title: "POC RAG Puls-Events (Bordeaux Métropole)"
---

<h2 style="text-align:center; margin-top: 0.2rem;">POC RAG Puls-Events</h2>
<h3 style="text-align:center; margin-top: -0.6rem;">Bordeaux Métropole</h3>

### Résumé

POC **RAG** (Retrieval-Augmented Generation) appliqué à des événements issus d’**OpenAgenda**.

Chaîne complète : ingestion API, préparation, **embeddings**, index **FAISS**, retrieval, génération via **Mistral**, et UI **Streamlit**.

### Contexte & objectif

Objectif : fournir des recommandations d’événements pertinentes et justifiables, avec réduction des hallucinations grâce au retrieval.

Périmètre POC :
- données : événements OpenAgenda (Bordeaux Métropole)
- fenêtre : 01/10/2025 → 28/02/2026 (scripts)

### Solution livrée

#### Pipeline RAG

- Ingestion et normalisation : API OpenAgenda, filtrage géo/temps, création d’un texte d’indexation
- Vectorisation : embeddings **SentenceTransformers** (local)
- Index : **FAISS** (`IndexFlatIP` + normalisation L2)
- Moteur RAG : parsing de requêtes (lieu/date/catégorie), retrieval, génération **Mistral**
- UI : **Streamlit** (paramètres de recherche et génération)

[Illustration à ajouter : schéma pipeline RAG]

### Stack

- **Python**
- **OpenAgenda API**
- **SentenceTransformers**
- **FAISS**
- **Mistral API**
- **Streamlit**
- **pytest**

### Démo

#### Reproduire le POC

- Pipeline :
  - `python ingestion_preprocessing.py`
  - `python vectorisation_index.py`
  - `streamlit run rag_ui.py`

- Tests NLU :
  - `python -m pytest -v src/tests`

### Résultats & preuves

Exemple de run (déc. 2025) :
- 1 568 événements ingérés
- 1 433 conservés après filtrage
- 2 076 chunks
- 2 076 vecteurs dans l’index FAISS (dimension 384)

[Illustration à ajouter : capture UI Streamlit + exemple question/réponse]

### Compétences démontrées

- Concevoir une architecture **RAG** complète et reproductible
- Mettre en place un pré-processing robuste (filtrage, normalisation)
- Construire et valider un index **FAISS**
- Implémenter du parsing NLU orienté **filtres structurés** + tests **pytest**
- Exposer un POC via une UI **Streamlit** paramétrable

### Valeur ajoutée

- Recommandations basées sur des sources indexées, avec justification via contexte récupéré
- Meilleure pertinence via filtrage structuré (lieu, date, type)
- POC rejouable : scripts séparés et configuration simple

### Liens

Repo GitHub du projet : [p11_conception_deploiement_rag](https://github.com/patrick-arbessier-data/p11_conception_deploiement_rag)

Brief OpenClassrooms : [Projet OpenClassrooms](https://openclassrooms.com/fr/paths/1039/projects/1836)

### Accès direct au repo

{% include image.html url="https://github.com/patrick-arbessier-data/p11_conception_deploiement_rag" image="projects/proj-2/thumbnail.jpg" %}
