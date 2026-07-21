## Project Title

K-Means Clustering from Scratch using Python

## Problem Statement

The objective of this project is to implement the K-Means Clustering algorithm without using Scikit-learn. Given a two-dimensional dataset representing customer coordinates, the algorithm groups customers into K distinct clusters and computes the final centroid locations.

## Mission Objectives

1. Pre-process and validate the dataset.
2. Implement K-Means Clustering from scratch.
3. Evaluate clustering performance and convergence.
4. Visualize clustered data and centroid positions.
5. Document the methodology and architectural decisions.

## Methodology

The implementation follows the standard K-Means workflow:

1. Initialize K centroids randomly.
2. Compute the Euclidean distance between every data point and each centroid.
3. Assign every point to its nearest centroid.
4. Calculate the new centroid as the mean of all points in the cluster.
5. Repeat the process until centroids stop changing or the maximum number of iterations is reached.

## Architecture Design

Input Dataset
↓
Initialize K Centroids
↓
Calculate Distances
↓
Assign Points to Clusters
↓
Update Centroids
↓
Check for Convergence
↓
If Not Converged → Repeat
↓
Display Final Clusters and Centroids
↓
Visualize Results

## Dataset

The implementation uses a two-dimensional dataset represented as coordinate pairs:

(2,3), (3,4), (4,5),
(10,12), (11,13), (12,11),
(20,21), (21,20), (22,22)

The dataset can easily be replaced with CSV input files if required.

## Performance Evaluation

The algorithm is evaluated using:

* Number of iterations until convergence.
* Correct centroid calculation.
* Cluster assignments.
* Visualization of clustered points.

## Time Complexity

Let:

* n = Number of data points
* K = Number of clusters
* I = Number of iterations

The overall time complexity is:

O(n × K × I)

This complexity arises because every iteration calculates the distance from every point to every centroid.

## Space Complexity

The space complexity is:

O(n + K)

where:

* n stores the dataset.
* K stores centroid information.

## Big-O Trade-offs

Advantages:

* Simple and efficient for medium-sized datasets.
* Easy to implement and interpret.
* Low memory requirements.

Limitations:

* Sensitive to centroid initialization.
* Requires the value of K beforehand.
* Can converge to local optima.
* Performance decreases for very large datasets.

## Technologies Used

* Python
* Matplotlib
* Basic Mathematical Operations
* No Scikit-learn Library

## Output

The program provides:

* Final centroid coordinates.
* Cluster assignments.
* Scatter plot visualization of clusters.
* Iterative convergence of the K-Means algorithm.
