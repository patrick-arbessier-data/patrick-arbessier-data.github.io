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

### Contexte & objectif

Objectif : fournir des recommandations d’événements pertinentes et explicables, en limitant les hallucinations en s'appuyant sur des données sources indexées et en ajoutant une granularité contextuelle.

Le projet couvre :

- l’analyse de requêtes utilisateurs (lieu, date, type)
- la recherche sémantique
- la génération de réponses contextualisées

### Solution livrée

#### Pipeline RAG

{% include image.html image="projects/proj-2/p11_bloc1_ingestion.jpg" alt="Ingestion" caption="Phase d'ingestion" %}

{% include lightbox_image.html image="projects/proj-2/p11_bloc2_vectorisation.jpg" alt="phase embeddings & vectorisation" caption="Phase d'embeddings & de vectorisation"%}

{% include lightbox_image.html image="projects/proj-2/p11_bloc2_rag_ui.jpg" alt="retrieval, LLM et UI" caption="Phase de retrieval et affichage UI"%}


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

{% include lightbox_image.html image="projects/proj-2/p11_streamlit.jpg"  alt="affichage interface utilisateur" caption="Exemple de réponses adaptées / pertinentes affichées pour l'utilisateur"%}

#### Exécuter le POC

- `python ingestion_preprocessing.py`
- `python vectorisation_index.py`
- `streamlit run rag_ui.py`

### Résultats & preuves

{% include lightbox_image.html image="projects/proj-2/p11_streamlit.jpg"  alt="affichage interface utilisateur" caption="Exemple de réponses adaptées / pertinentes affichées pour l'utilisateur"%}

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

### Accès au repo

{% include image.html url="https://github.com/patrick-arbessier-data/p11_conception_deploiement_rag" image="projects/proj-2/thumbnail.jpg" %}
