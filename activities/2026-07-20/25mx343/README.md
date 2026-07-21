# Mission Thorogood 3: K-Means Clustering

**Author:** Sabarish P. (25MX343)
**Institution:** PSG College of Technology - MCA Department

## Problem Statement
Implement a K-Means Clustering algorithm from scratch (without utilizing Scikit-learn) to cluster a 2D dataset of customer coordinates into K distinct zones.

## Architectural Design
The implementation follows a clean, iterative approach:
1. **Initialization:** Centroids are initialized randomly directly from the given dataset points.
2. **Assignment Step:** Calculates the Euclidean distance from each point to all centroids and assigns the point to the nearest centroid's cluster.
3. **Update Step:** Recalculates the centroids by computing the mean of all points assigned to each cluster.
4. **Convergence Check:** The algorithm repeats the Assignment and Update steps until the centroids no longer change significantly (or a maximum number of iterations is reached).

## Methodology & Insights
- **Data Processing:** The 2D customer coordinates are handled using standard lists/arrays to ensure no dependency on external heavy machine learning libraries.
- **Distance Metric:** Euclidean distance is used for its geometric appropriateness for physical 2D coordinates.
- **Insights:** Standard random initialization can sometimes lead to suboptimal local minima. A potential architectural improvement would be implementing K-Means++ for smarter initial centroid placement.

## Big-O Trade-offs
- **Time Complexity:** `O(I * K * N * d)`, where:
  - `I` = Number of iterations until convergence
  - `K` = Number of clusters
  - `N` = Number of data points
  - `d` = Number of dimensions (2 in this case)
  *Trade-off:* While highly intuitive and simple to implement from scratch, native K-Means computation scales linearly with all factors, making it potentially slow for exceptionally large values of `N` without vectorized optimizations.
- **Space Complexity:** `O(N * d + K * d)` to store the data points and the centroids in memory. 
