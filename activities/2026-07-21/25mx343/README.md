# Mission The 4: Markov Chain Text Generator

**Author:** Sabarish P. (25MX343)
**Institution:** PSG College of Technology - MCA Department

## Problem Statement
Build a predictive text Markov Chain generator. Ingest a large text corpus (e.g., Shakespeare), build a transition probability matrix, and write a function that generates a 100-word paragraph of readable, procedurally generated text based on the corpus.

## Architectural Design
The solution is designed around a state-transition model (Order-1 Markov Chain):
1. **Pre-processing:** The text corpus is ingested, converted to lowercase (optional based on readability requirements), and tokenized into individual words/punctuation.
2. **Transition Matrix Construction:** A dictionary-based adjacency list is used to build the matrix. Each unique word acts as a state (key), and its value is another dictionary tracking the frequencies of all subsequent words.
3. **Probability Calculation:** The frequencies are converted into normalized probabilities so that the sum of transitions from any given word equals 1.0.
4. **Text Generation (Random Walk):** Starting from a random initial word (or a designated start token), the algorithm uses weighted random selection to pick the next word based on the transition probabilities, repeating until the 100-word limit is reached.

## Methodology & Insights
- **Data Structures:** Python dictionaries (`dict` of `dict`s) were chosen over a dense 2D array (like a NumPy matrix) because text transition matrices are incredibly sparse. Most words only ever follow a small subset of the total vocabulary.
- **Insights:** A first-order Markov Chain (considering only the immediately preceding word) often produces grammatically disjointed text. Higher-order chains (considering the previous 2 or 3 words) yield significantly more coherent paragraphs.

## Big-O Trade-offs
- **Time Complexity:** 
  - **Building the model:** $O(N)$ where $N$ is the total number of words in the corpus. We iterate through the text sequentially exactly once.
  - **Generating text:** $O(L)$ where $L$ is the desired length of the output text (100 words).
  - *Trade-off:* The model generation is extremely fast and scales linearly, avoiding nested loops.
- **Space Complexity:** $O(V + E)$ where $V$ is the unique vocabulary size and $E$ is the number of unique word-pair transitions. 
  - *Trade-off:* While theoretically bounded by $O(V^2)$ in the worst case, natural language is sparse. Using nested dictionaries saves massive amounts of memory compared to an explicitly allocated $V 	imes V$ grid.
