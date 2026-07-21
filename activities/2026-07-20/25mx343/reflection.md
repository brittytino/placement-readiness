# Mission Reflection: Thorogood 3

## Key Learnings
- **Algorithmic Deep Dive:** Implementing K-Means entirely from scratch solidified my understanding of how clustering models dynamically update iteratively based on basic distance metrics, rather than relying on `scikit-learn` black boxes.
- **Mathematical Translation:** Practical application of translating mathematical formulas (like Euclidean distance and centroid averaging) directly into standard application logic.

## Challenges Encountered
- **Convergence Condition:** One of the main challenges was determining the precise stopping condition. Initially, I considered a fixed number of iterations, but optimized it by tracking the coordinate shifts of centroids and breaking the loop when the shift reached zero.
- **Empty Clusters:** Handling edge cases where a centroid might be assigned no points required careful thought, ultimately addressed by adding fallback logic to reassign empty centroids.

## Future Improvements
- **K-Means++ Initialization:** To prevent poor clustering results from bad initial random centroids, implementing K-Means++ logic is the next logical step.
- **Visualization:** Integrating a lightweight plotting mechanism to dynamically visualize the cluster movements per iteration would make the final output much more engaging.
