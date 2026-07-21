# AI Prompt Log

**Environment:** Visual Studio Code
**Model Used:** Amazon Q

## Prompt History

**Task:** Centroid Initialization
- **Prompt:** "Write a Python function to randomly initialize K centroids from a given list of 2D coordinates without using scikit-learn or numpy."
- **Outcome:** Amazon Q provided a clean, native function utilizing the standard `random.sample()` method.

**Task:** Distance Calculation Optimization
- **Prompt:** "How do I calculate the Euclidean distance between a 2D point and a list of centroids efficiently in standard Python?"
- **Outcome:** The model suggested utilizing list comprehensions alongside the `math.dist` module to keep the code concise and performant without external libraries.

**Task:** Convergence Logic
- **Prompt:** "What is the best way to check for convergence in a custom K-Means algorithm to break the while loop?"
- **Outcome:** Recommended comparing the previous centroid coordinates with the newly computed centroid coordinates and breaking the loop if they perfectly match or the difference falls below a tiny epsilon threshold.
