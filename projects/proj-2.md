---
layout: post
title: "POC RAG Puls-Events"
---

<h2 style="text-align:center; margin-top: 0.2rem;">POC RAG Puls-Events</h2>
<h3 style="text-align:center; margin-top: -0.6rem;">Bordeaux Métropole</h3>

### Résumé

POC **RAG** (Retrieval-Augmented Generation) appliqué à des événements culturels et de loisirs.

Chaîne complète : ingestion API, préparation des données, **embeddings**, index **FAISS**, retrieval sémantique et génération via **Mistral**, exposée via une interface **Streamlit**.

### Contexte & objectif

Objectif : fournir des recommandations d’événements pertinentes et explicables, en limitant les hallucinations grâce à l’appui sur des données sources indexées.

Le projet couvre :
- l’analyse de requêtes utilisateurs (lieu, date, type)
- la recherche sémantique
- la génération de réponses contextualisées

### Solution livrée

#### Pipeline RAG

- Ingestion : API OpenAgenda, filtrage géographique et temporel
- Préparation : normalisation, enrichissement, création du texte d’indexation
- Vectorisation : **SentenceTransformers**
- Index : **FAISS** (IndexFlatIP)
- Génération : **Mistral**
- Interface : **Streamlit**

### Stack

- **Python**
- **SentenceTransformers**
- **FAISS**
- **Mistral API**
- **Streamlit**
- **pytest**

### Démo

#### Exécuter le POC

- `python ingestion_preprocessing.py`
- `python vectorisation_index.py`
- `streamlit run rag_ui.py`

### Résultats & preuves

- Index vectoriel cohérent et rejouable
- Réponses appuyées sur des événements réels
- Paramétrage fin du retrieval et de la génération
- UI permettant d’explorer le comportement du RAG

### Compétences démontrées

- Concevoir une architecture **RAG** complète
- Mettre en place une recherche sémantique avec **FAISS**
- Gérer des embeddings et leur cycle de vie
- Intégrer un LLM dans une chaîne contrôlée
- Exposer un POC via une interface interactive

### Valeur ajoutée

- Réduction des hallucinations grâce au retrieval
- Réponses explicables via les contextes récupérés
- Architecture modulaire et reproductible

### Liens

Repo GitHub du projet : [p11_conception_deploiement_rag](https://github.com/patrick-arbessier-data/p11_conception_deploiement_rag)

### Accès direct au repo

{% include image.html url="https://github.com/patrick-arbessier-data/p11_conception_deploiement_rag" image="projects/proj-2/thumbnail.jpg" %}
