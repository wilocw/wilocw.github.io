+++
title = "Deep Probabilistic Machine Learning"
date = 2017-10-02
draft = false

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags = ["machine-learning", "deep-learning", "spatio-temporal"]

# Project summary to display on homepage.
summary = "In this project, we developed scalable approaches for applying Gaussian process regression to multi-output signals with non-linear dependencies. This included using physics-based techniques, including series representation and ordinary differential equation solvers, combined with machine learning techniques such as GPs and autoregressive flows, to infer latent variables and forces."
#This project will develop scalable approaches to deep non-parametric probabilistic models that use approximate inference techniques to learn the structure of the model. The project requires that the development of practical, interpretable models, with latent variables that can be used by clinicians and non-academics in a meaningful way. We also aim to build distributed user-centric data models, in which the learning occurs across distributed devices, through the paradigm of differential privacy. The successful candidate will be able to demonstrate knowledge of a wide range of machine learning techniques (in particular probabilistic modelling) and practical experience handling data which is noisy, sparse and/or of high dimensionality."

# Optional image to display on homepage.
image_preview = ""

# Optional external URL for project (replaces project detail page).
external_link = ""

# Does the project detail page use math formatting?
math = false

# Does the project detail page use source code highlighting?
highlight = true

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++

This project aimed to develop scalable approaches to deep non-parametric probabilistic models that use approximate inference techniques to learn the structure of the model. The project required the development of practical, interpretable models, with latent variables that can be used by non-academics in a meaningful way.

In this project, we developed scalable approaches for applying Gaussian process regression to multi-output signals with non-linear dependencies. This included using physics-based techniques, including series representation and ordinary differential equation solvers, combined with machine learning techniques such as GPs and autoregressive flows, to infer latent variables and forces. The outputs of this project were the development of two papers, on using Volterra series for non-linear multi-output Gaussian processes (NLMOGP)[^1], and normalising flows for inferring latent forces in non-linear models[^2].

[^1]: MA Álvarez, WOC Ward, C Guarnizo, [Non-linear process convolutions for multi-output Gaussian processes](../../publication/non-linear-process-convolutions-mogp/). AISTATS 2019
[^2]: WOC Ward, T Ryder, D Prangle, MA Álvarez, [Black-box inference for non-linear latent force models](../../publication/black-box-inference-nlfm/). AISTATS 2020
