---
layout: post
title: "POC RAG Puls-Events (Bordeaux Métropole)"
---

## Résumé
Proof-of-concept RAG (Retrieval-Augmented Generation) appliqué à des événements culturels/loisirs issus d’OpenAgenda (Bordeaux Métropole). Chaîne complète : ingestion API → nettoyage/pré-processing → embeddings + index FAISS → moteur RAG (recherche sémantique + filtres structurés) → UI Streamlit. :contentReference[oaicite:2]{index=2} :contentReference[oaicite:3]{index=3}

## Contexte & objectif
Objectif pédagogique : démontrer un système RAG fonctionnel, reproductible, sans sur-optimisation ni industrialisation (POC). :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5}

Périmètre :
- Données : événements publics OpenAgenda via API Huwise/OpenDataSoft, filtrés Bordeaux Métropole.
- Fenêtre temporelle POC : 01/10/2025 → 28/02/2026 (dans les scripts). :contentReference[oaicite:6]{index=6} :contentReference[oaicite:7]{index=7}

Non couvert (exemples) : réservation/billetterie, tarifs/accessibilité avancée, âge recommandé, adresse précise des lieux, robustesse sécurité prod. :contentReference[oaicite:8]{index=8}

## Solution livrée
### Architecture (3 blocs)
1. **Ingestion & pré-processing**
   - Ingestion OpenAgenda (API), filtrage géo+temps, normalisation, création d’un texte `embedding_text`, catégorisation via règles. :contentReference[oaicite:9]{index=9} :contentReference[oaicite:10]{index=10}
2. **Vectorisation & index FAISS**
   - Chunking + embeddings (backend local SentenceTransformers), index FAISS `IndexFlatIP` (vecteurs normalisés L2). :contentReference[oaicite:11]{index=11} :contentReference[oaicite:12]{index=12}
3. **Moteur RAG & UI**
   - Parsing de question (communes, dates, catégories) + retrieval FAISS + génération via LLM Mistral + UI Streamlit (paramètres `k_context`, `temperature`, `top_p`, `max_tokens`). :contentReference[oaicite:13]{index=13} :contentReference[oaicite:14]{index=14}

[Illustration à ajouter : schéma pipeline (Bloc 1/2/3), ou capture du mermaid]

## Outils & technologies
- **Langage** : Python (structure `src/` + orchestrateurs à la racine). :contentReference[oaicite:15]{index=15}
- **Données** : OpenAgenda (Huwise/OpenDataSoft), sorties JSONL/Parquet. :contentReference[oaicite:16]{index=16}
- **Embeddings** : SentenceTransformers `all-MiniLM-L6-v2` (dimension 384) en local. :contentReference[oaicite:17]{index=17}
- **Base vectorielle** : FAISS, index exact `IndexFlatIP` + normalisation L2. :contentReference[oaicite:18]{index=18}
- **LLM** : API Mistral (génération de réponse). :contentReference[oaicite:19]{index=19} :contentReference[oaicite:20]{index=20}
- **Interface** : Streamlit (`rag_ui.py`). :contentReference[oaicite:21]{index=21} :contentReference[oaicite:22]{index=22}
- **Tests** : pytest (tests parsing NLU). :contentReference[oaicite:23]{index=23}

## Résultats & démonstration
### Résultats quantitatifs (runs déc. 2025)
- ~**1 568** événements bruts ingérés
- ~**1 433** conservés après filtrage (Bordeaux Métropole + fenêtre)
- **135** rejetés (hors périmètre)
- **2 076 chunks** générés
- **2 076 vecteurs** dans l’index FAISS (dim **384**) :contentReference[oaicite:24]{index=24}

### Démonstration (reproductible)
- Pipeline :
  - `python ingestion_preprocessing.py`
  - `python vectorisation_index.py`
  - `streamlit run rag_ui.py` :contentReference[oaicite:25]{index=25}
- Tests parsing :
  - `python -m pytest -v src/tests` :contentReference[oaicite:26]{index=26}

[Illustration à ajouter : capture UI Streamlit + exemple de réponse]

### Limites observées (POC)
- Catégorisation basée sur règles (fallback “autre” possible).
- Interprétation des dates complexe perfectible.
- Couverture limitée à la fenêtre temporelle fixée. :contentReference[oaicite:27]{index=27}

## Compétences démontrées
- Concevoir une architecture RAG complète (data → embeddings → index → retrieval → génération). :contentReference[oaicite:28]{index=28}
- Mettre en place un pré-processing robuste (filtrage, normalisation, enrichissement, catégorisation). :contentReference[oaicite:29]{index=29}
- Construire/contrôler un index FAISS (alignement métadonnées, cohérence dimensionnelle). :contentReference[oaicite:30]{index=30}
- Implémenter un parsing NLU orienté “filtres structurés” + tests unitaires. :contentReference[oaicite:31]{index=31}
- Exposer un POC via une UI Streamlit et paramétrer le comportement du RAG. :contentReference[oaicite:32]{index=32}

## Valeur ajoutée
- Réponses en langage naturel **appuyées sur des événements sources** (réduction des hallucinations par retrieval + contexte).
- Filtrage structuré (lieu/date/type) pour augmenter la pertinence.
- POC rejouable : scripts d’orchestration séparés + configuration centralisée. :contentReference[oaicite:33]{index=33} :contentReference[oaicite:34]{index=34}

## Liens
- Repo GitHub : https://github.com/patrick-arbessier-data/p11_conception_deploiement_rag
- Brief OpenClassrooms : https://openclassrooms.com/fr/paths/1039/projects/1836

[Illustrations à ajouter]
- Thumbnail projet (home)
- Schéma pipeline (bloc 1/2/3)
- Capture Streamlit (question + réponse + sources)
