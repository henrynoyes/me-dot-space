---
date: '2025-12-12'
title: Spaceship Earth Model
tagline: A scale model of Spaceship Earth from EPCOT
coverImage: /images/projects/spaceship-earth/green-light.jpg
slug: spaceship-earth
---

I built a ~1:260 scale model of the iconic Spaceship Earth from Walt Disney World's EPCOT.

![green light](/images/projects/spaceship-earth/green-light.jpg)

![from below](/images/projects/spaceship-earth/from-below.jpg)

![dark cycle](/images/projects/spaceship-earth/dark-cycle.gif)

# Modeling

I was not very satisfied with the fidelity and accuracy of the meshes available online, so I decided to model the structure from scratch. The core geometry was modeled in Blender, and is a 190mm diameter icosphere with four subdivisions. I found this configuration to match the true shape well, which is a derivative of a [pentakis dodecahedron](https://en.wikipedia.org/wiki/Pentakis_dodecahedron). The center vertices of the pyramids measure 2.2mm from the surface of the icosphere. The holes for the lights were procedurally generated at the appropriate vertices with geometry nodes.

![geometry nodes](/images/projects/spaceship-earth/geometry-nodes.png)

![render](/images/projects/spaceship-earth/render.png)

This was my first real foray in creating a model with Blender and SolidWorks, and it was a fun challenge to develop a workflow that leverages both polygonal and parametric modeling together. To integrate parts like the support legs, I modeled them in SolidWorks with a reference sphere to represent the polyhedron. Then, I exported them as STLs with respect to the sphere origin and boolean differenced them with the Blender model to create the proper indents. I think this method should work for most situations in which the Blender geometry can be fairly represented by geometric primitives. Though, I will note that there were some non-manifold hoops I had to jump through as a result of the boolean operations. The [3D Print Toolbox](https://extensions.blender.org/add-ons/print3d-toolbox) helped with cleaning up the mesh.

# Build

The structure was sliced in half and 3D printed in PLA. The two domes align via neodymium magnets on the inside surface. A spherical RGB lamp was placed inside the structure to emulate [the light show](https://www.youtube.com/watch?v=hvssM6wN0Wo). The support legs were printed in white and spray painted to match the real-world material. They attach to the bottom dome via neodymium magnets.

![parts](/images/projects/spaceship-earth/parts.jpg)