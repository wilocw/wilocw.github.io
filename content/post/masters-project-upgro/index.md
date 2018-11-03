+++
title = "Machine Learning and International Rural Water Supply"
subtitle = "MSc Project 2018 / 19"

date = 2018-11-02T00:00:00
lastmod = 2018-11-03T00:15:00
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = []

tags = []
summary = ""

# Featured image
# To use, add an image named `featured.jpg/png` to your project's folder.
[image]
  # Caption (optional)
  caption = "Image credit: [**UPGro / BGS**](https://upgro-hidden-crisis.org)"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

+++

<span style="font-weight:bold" id="top-anchor">Machine learning on images from the Unlocking the Potential of Groundwater for the Poor project</span>. This page contains details of the proposed MSc project. The data is provided by the British Geological Survey [(BGS)](https://bgs.ac.uk), who will be involved in supporting the project. A number of images have been provided of hand pumps in use in sub-Saharan Africa, some of which are in good working order, and others which have failed. The basic aim of the project is to investigate whether these images can be used to indicate whether a pump has failed with machine learning. The project is expected to contain active research, as well as significant programming using a machine learning framework.

This project is suitable for students enrolled on the following courses:

- Advanced Computer Science (ACS)
- Advanced Software Engineering (ASE)
- Data Analytics (DA)

No prior experience with computer vision is necessary, but familiarity with basic machine learning concepts, including classification, is essential. Some experience with programming is required, ideally with Python.

## Contents
- [Project Background](#project-background)
- [Project Aims](#project-aims)
- [Expected Work Plan](#expected-work-plan)
- [Additional Information](#additional-information)
- [References](#references)

## Project Background

Unlocking the Potential of Groundwater for the Poor (UPGro), is an international research programme funded by UK’s Department for International Development (DFID), Natural Environment Research Council (NERC) and the Economic and Social Research Council (ESRC). It focuses on improving the evidence base around groundwater availability and management in sub-Saharan Africa (SSA) to enable developing countries and partners in SSA to use groundwater in a sustainable way in order to benefit the poor. There are 5 ‘consortium’ projects as part of UPGro, one of which is Hidden Crisis (HC), led by researchers at the British Geological Survey (BGS). The HC project aims to unravel the immediate and underlying causes of poor functionality of rural hand pumped borehole (HPB) supplies in SSA – what available data exists suggests up to a third of these supplies fail within just a few years of construction, and thereafter enter repeated cycles of failure and repair, or are abandoned altogether. The overall aim of wider HC project is to build a robust, multi-country evidence base on the causes of the unacceptably high rates of hand pumped borehole service failure and use this knowledge to deliver a step-change in future functionality, with recommendations for (1) diagnosing existing problems in country programmes, and (2) developing policy and practice to mitigate risks. To help meet the Project Aims and Objectives, the research approach reflects the need to understand both the physical/technical realities of borehole functioning and the human behaviours and arrangements that shape this. We draw on a range of methods from natural, social sciences and engineering, and will use an interdisciplinary approach to examine how these areas inter-relate and contribute to water supply failure in different conditions. By using this approach, the consortium has the potential to lead to a step change in understanding for hand pumped borehole functionality.

The first survey of the Hidden Crisis project assessed 600 HPBs in three African countries (Ethiopia, Malawi and Uganda). The HPBs were selected using a two stage randomised stratified sampling approach and functionality was assessed using a tiered definition designed in the early phases of the project.[^2] Survey one results indicate that at any one time around 70 to 80% of HPBs provide some water, but only one third reliably provide sufficient water of good quality year-round. The reasons for these poor statistics are multifaceted, and relate not simply to poor construction or a changing climate, but are the result of a wide set of inter-related issues. Phase two of the project examined in detail a subset of 150 of the original 600 HPBs. At each HPB detailed engineering inspections of pump components, pumping tests, water quality and residence time sampling and downhole CCTV inspections were conducted. Communities were asked detailed questions about their experience of the pump and sanitary and geological surveys were conducted.

During survey two the engineering and sanitary inspections included taking photographs of the hand pump, its components, and the surrounding environment. Numerous photographs were taken at each site. The hypothesis of the proposed research project is that these images could potentially provide a rich source of information on the functionality status and condition of the hand pumps and the boreholes. Recent work, conducted in Bangladesh, suggests that visual inspection of hand pump platforms can be used to determine the presence or arsenic contamination in the aquifer.[^1]
[˄](#top-anchor)

## Project Aims
The aim of the proposed MSc project is to investigate whether the images taken during the engineering and sanitary investigations can be used to predict the condition of downhole pump components and possible contamination or other aquifer issues. Ultimately the aim is to ascertain whether the images captured during the second survey can be used to predict the functionality status of rural hand pumped boreholes, with reference to the definitions of functionality designed during the first phase of the Hidden Crisis project. This will be achieved using machine learning methods. Machine learning has recently been applied in the rural water sector using hand pumps installed with sensors to predict groundwater levels[^3], and to diagnose existing pump problems and predict future breakdowns.[^4] The prospective student will have access to the database of images and additional data from the sanitary surveys, engineering, hydrogeological and water quality investigations. The outcomes of the project could potentially have much wider implications because much of the monitoring and evaluation (M&E) of rural water supply projects rely on images. Photos are often captured as a routine part of M&E and completion reports. The key question is can these images be used to tell us something about the condition and functionality of the hand pump? If they can, then they could serve as a rapid screening tool for asset management, preventative maintenance and monitoring and evaluation of rural water supply projects potentially leading to better sustainability of rural water supplies.
[˄](#top-anchor)

## Expected Work Plan
The prospective student will need to curate images from the data set to identify a training set. The student will need to employ machine learning techniques in classification to learn the features used to categorise images, and use good practice to validate the results. During the project, the student will be actively engaged with the project partner at the BGS who will advise on the project background and requirements.

An example might be to use transfer learning, taking a pre-trained neural network (of which many are widely available), to reduce the features of each image from pixel level (high-dimensional) to some lower-dimensional _latent_ representation and use this to train their classification model.

The specific direction of the project is flexible depending on the student's experiences and interests. This may focus more on improving results through research; or building a software system. If sufficient progress is made with the classification results, the student may have the chance to contribute to a research paper in collaboration with researchers at the BGS and University of Sheffield.

[˄](#top-anchor)
## Additional Information
More details about the Hidden Crisis project and UPGro can be found at the following links:

- https://upgro-hidden-crisis.org
- https://upgro.org

A brief tutorial on transfer learning using TensorFlow can be found at the following link:

- https://www.tensorflow.org/hub/tutorials/image_retraining

[˄](#top-anchor)
## References
[^1]: Annaduzzaman, M., P. Bhattacharya, A. Biswas, M. Hossain, K. M. Ahmed, and D. van Halem (2018), Arsenic and manganese in shallow tubewells: validation of platform color as a screening tool in Bangladesh, Groundwater for Sustainable Development, 6, 181-188, doi: https://doi.org/10.1016/j.gsd.2017.11.008.

[^2]: Bonsor, H., A. MacDonald, V. Casey, R. Carter, and P. Wilson (2018), The need for a standard approach to assessing the functionality of rural community water supplies, Hydrogeology Journal, doi: https://doi.org/10.1007/s10040-017-1711-0.

[^3]: Colchester, F. E., H. G. Marais, P. Thomson, R. Hope, and D. A. Clifton (2017), Accidental infrastructure for groundwater monitoring in Africa, Environmental Modelling & Software, 91, 241-250, doi: https://doi.org/10.1016/j.envsoft.2017.01.026.

[^4]:Wilson, D. L., J. R. Coyle, and E. A. Thomas (2017), Ensemble machine learning and forecasting can achieve 99% uptime for rural handpumps, PLOS ONE, 12(11), e0188808, doi: https://doi.org/10.1371/journal.pone.0188808.
