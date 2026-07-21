# AI Prompt Log

**Environment:** Visual Studio Code
**Model Used:** Amazon Q

## Prompt History

**Task:** Data Preprocessing and Tokenization
- **Prompt:** "Write a Python script to read a large .txt file and tokenize it into a list of words while keeping basic punctuation intact for readability. Optimize for standard Python libraries."
- **Outcome:** Amazon Q provided a solid regular expression using `re.findall()` that separated words and punctuation marks effectively.

**Task:** Transition Matrix Construction
- **Prompt:** "How can I efficiently build a Markov Chain transition frequency dictionary from a list of words without using excessive memory?"
- **Outcome:** The model suggested utilizing `collections.defaultdict` to automatically handle missing keys, which made the state-mapping loop much cleaner and avoided repetitive `KeyError` checks.

**Task:** Weighted Random Choice
- **Prompt:** "In Python, what is the best way to select a random item from a dictionary's keys based on their corresponding frequency values (weights)?"
- **Outcome:** Amazon Q recommended using `random.choices(population, weights, k=1)`, which perfectly handled the probability logic without requiring manual normalization of the frequencies.
