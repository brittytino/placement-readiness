# Mission Reflection: The 4

## Key Learnings
- **Statistical Language Modeling:** Gained hands-on experience with how foundational predictive text and early NLP models function using purely statistical probability rather than deep learning.
- **Sparse Data Handling:** Learned the importance of choosing the right data structures (dictionaries over 2D lists) to represent sparse transition matrices efficiently in memory.

## Challenges Encountered
- **Handling Edge Cases (Dead Ends):** Encountered an issue where the generator would pick a word that only ever appeared at the very end of the corpus, leaving it with no "next word" options to transition to. Solved this by implementing a fallback mechanism that picks a new random starting word if a dead end is reached before the 100-word count.
- **Punctuation and Formatting:** Keeping the text "readable" was difficult because raw tokenization strips context. Deciding whether to treat punctuation as separate tokens or keep them attached to words required trial and error.

## Future Improvements
- **N-Gram Implementation:** Upgrade the architecture from an Order-1 to an Order-2 or Order-3 Markov Chain. Using tuples of the previous two words as the state key would drastically improve the semantic coherence of the generated 100-word paragraph.
- **Corpus Blending:** It would be interesting to ingest two completely different corpora (e.g., Shakespeare and modern technical documentation) to see the algorithmic blending of styles.
