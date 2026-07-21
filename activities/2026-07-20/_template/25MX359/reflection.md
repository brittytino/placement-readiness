## Reflection

This project helped demonstrate how unsupervised machine learning algorithms operate internally without relying on external libraries.

The major challenge was implementing centroid initialization, distance calculations, and iterative updates manually while ensuring convergence. Developing the algorithm from scratch improved understanding of clustering techniques and their computational requirements.

Important insights gained include:

* The choice of initial centroids significantly affects the final clusters.
* The value of K directly influences clustering quality.
* K-Means is computationally efficient for moderate datasets but becomes expensive as the number of data points increases.
* Visualization greatly improves interpretability of clustering results.

Future improvements may include:

* K-Means++ centroid initialization.
* CSV dataset support.
* Elbow Method implementation for selecting the optimal value of K.
* Performance benchmarking for large datasets.
