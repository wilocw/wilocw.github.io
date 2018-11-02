+++
title = "Introducing diffusion tensor to high order variational model for image reconstruction"
date = 2017-10-01
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["J. Duan", "W.O.C. Ward", "L. Sibbett", "Z. Pan", "L. Bai"]

# Publication type.
# Legend:
# 0 = Uncategorized
# 1 = Conference proceedings
# 2 = Journal
# 3 = Work in progress
# 4 = Technical report
# 5 = Book
# 6 = Book chapter
publication_types = ["2"]

# Publication name and optional abbreviated version.
publication = "Digital Signal Processing"
publication_short = ""

# Abstract and optional shortened version.
abstract = "Second order total variation (SOTV) models have advantages for image reconstruction over their first order counterparts including their ability to remove the staircase artefact in the reconstructed image. However, such models tend to blur the recovered image when discretised for a numerical solution [1–5]. To overcome this drawback, we introduce a novel tensor weighted second order (TWSO) variational model for image reconstruction. Specifically, we develop a new regulariser for the original SOTV model that uses the Frobenius norm of the product of the Hessian matrix and a diffusion tensor, which has the duel effects of sharpening edges and introducing anisotropy to the model. We then efficiently solve the proposed model by breaking the original problem into several closed-form subproblems using the alternating direction method of multipliers. The proposed method is compared with state-of-the-art approaches such as the tensor-based anisotropic diffusions, total generalised variation, and Euler's elastica. We validate the TWSO model using extensive experiments on numerous images from the Berkeley BSDS500. We also show that our method effectively reduces both the staircase and blurring effects and outperforms existing approaches for image inpainting and denoising applications."
abstract_short = ""

# Does this page contain LaTeX math? (true/false)
math = false

# Does this page require source code highlighting? (true/false)
highlight = true

# Featured image thumbnail (optional)
image_preview = ""

# Is this a selected publication? (true/false)
selected = false

# Links (optional)
url_pdf = "http://eprints.nottingham.ac.uk/44633/1/1-s2.0-S1051200417301434-main.pdf"
url_preprint = ""
url_code = ""
url_dataset = ""
url_project = ""
url_slides = ""
url_video = ""
url_poster = ""
url_source = ""

[[url_custom]]
    name = "DOI"
    url="https://doi.org/10.1016/j.dsp.2017.07.001"

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++
