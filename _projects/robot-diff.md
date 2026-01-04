---
date: '2026-01-03'
title: robot-diff
tagline: A diffing tool for robot models
coverImage: /images/projects/robot-diff/robot-diff-cover.png
slug: robot-diff
repo: https://github.com/henrynoyes/robot-diff
---

As part of my recent research I have been exploring the world of physics simulation, specifically simulators tailored to robotic applications. With the advent of large-scale GPU parallelization and deep learning, these engines have seen a boost in popularity. As I tinkered with [Isaac Sim](https://docs.isaacsim.omniverse.nvidia.com/5.1.0/index.html), [MuJoCo](https://mujoco.readthedocs.io/en/stable/overview.html), [Genesis](https://genesis-world.readthedocs.io/en/latest/), [Drake](https://drake.mit.edu/), [Newton](https://newton-physics.github.io/newton/guide/overview.html)—the list goes on—I became increasingly frustrated with the process of developing robot models. Most simulators have the ability to import robot models from multiple formats, but almost always suggest a specific format as "native" or "fully-supported". MuJoCo has MJCF, Isaac Sim has USD, Drake has SDF—you get the point. Since I was working with a robot model that is actively in development, I found myself constantly switching between these formats for each simulator. Then, when I would make a change to the robot in one of files, I would lose track of which models I had to update to maintain a unified state.

Even if it appeared to be a small change like decreasing the length of a collision box, each format had their own specification for how they stored this information. My frustration did not arise from the fact that there *were* different formats. I understood why each was created and could see the benefit of their specialized features. I was unsatisfied because a subset of the information—often a large majority of it—was semantically identical between models, yet syntactically dissimilar.

This experience led me to create `robot-diff`. `robot-diff` is exactly what it sounds like: a diffing tool for robot models. It generates human-readable diffs for URDF, SDF, MJCF, and USD models (with some assumptions on the input conventions). The output diffs can be filtered by category and styled by three built-in formatters. The tool is written in in pure Python, with the full [Astral](https://astral.sh/) stack of [uv](https://github.com/astral-sh/uv) + [Ruff](https://astral.sh/ruff) + [ty](https://github.com/astral-sh/ty), and [pytest](https://docs.pytest.org/en/stable/) for testing. Below are some examples of `robot-diff` in action.

![status format](https://raw.githubusercontent.com/henrynoyes/robot-diff/refs/heads/master/docs/imgs/status-format.png)

![category format](https://raw.githubusercontent.com/henrynoyes/robot-diff/refs/heads/master/docs/imgs/category-format.png)

![git format](https://raw.githubusercontent.com/henrynoyes/robot-diff/refs/heads/master/docs/imgs/git-format.png)

As a side project, I spent a couple of hours messing around in Go creating a fork of [termshot](https://github.com/homeport/termshot). I felt the original project lacked cosmetic customization, so I made some minor modifications in [my fork](https://github.com/henrynoyes/termshot) to produce the "termshots" you see above for the `robot-diff` readme.