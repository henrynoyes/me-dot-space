---
date: '2026-03-01'
title: robot-see
tagline: A visualization tool for robot models
coverImage: /images/projects/robot-see/robot-see-cover.png
repo: https://github.com/henrynoyes/robot-see
video:
  path: "https://github.com/user-attachments/assets/18fb12b7-5c99-460d-8660-9090263749c3"
viserScenes:
  - path: "/viser-scenes/cobra-visual.viser"
    caption: "COBRA Visuals"
  - path: "/viser-scenes/m4-visual.viser"
    caption: "M4 Visuals"
  - path: "/viser-scenes/cobra-inertial.viser"
    caption: "COBRA Inertia Ellipsoids"
  - path: "/viser-scenes/m4-collision.viser"
    caption: "M4 Collision Primitives"
---

[YouTube link](https://www.youtube.com/watch?v=O8cmVK34qgA)

# Description

Visualization enables fast and accurate development of robot models. It establishes a tight feedback loop that is essential in validating the state of a model. Without it, errors in the model can go unchecked, potentially wasting significant time and effort in resulting simulation work.

Existing visualization tools are highly specialized, often preferring a single "native" format for the input robot model. Some notable tools include [RVIZ](https://github.com/ros2/rviz) from OSRF for URDFs, [meshcat](https://github.com/meshcat-dev/meshcat) from Drake for SDFs, [MuJoCo simulate](https://github.com/google-deepmind/mujoco/tree/main/simulate) from Google DeepMind for MJCFs, and [usdview](https://github.com/PixarAnimationStudios/OpenUSD) from Pixar/[Isaac Sim](https://github.com/isaac-sim/IsaacSim) from NVIDIA for USDs. Many of these are feature-rich applications scoped well beyond basic model visualization. However, these extra capabilities are seldom utilized in the model building stage of development, where the primary focus is the accurate construction of kinematic, visual, inertial, and collision information.

`robot-see` aims to fill this gap by providing a lightweight, easy-to-use visualization tool that supports all four major model formats^[1]^ (URDF, SDF, MJCF, USD). `robot-see` is a command-line tool that can be activated by simply calling the command on an input model path.

![help](https://raw.githubusercontent.com/henrynoyes/robot-see/refs/heads/master/docs/help.png)

It parses the robot model into a unified internal representation and constructs a local web visualization with GUI controls. The GUI allows the user to toggle the visibility of different geometry groups, actuate individual joints, and scale the frame groups for detailed visual control. See the gallery below for some snapshots of `robot-see` visualizations with robot models I have created.

[1] with some assumptions on input conventions.

# Gallery