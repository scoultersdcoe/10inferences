---
hide:
  - navigation
  - toc
---

# 10 Inferences

<p class="subtitle">Causal Designs in JASP</p>

<p class="byline">Shannon Coulter, Ph.D.</p>

Did a program actually cause a change? This book teaches ten ways to answer that question, and an eleventh chapter that asks for whom it worked and how much is enough. Each chapter starts from a problem, not a method: what is missing, what comparison stands in for it, and what must be true to believe that comparison. Every design is worked through in JASP, a free, point-and-click statistics program, using data from the ARISE literacy program.

The book is a companion to the source texts listed in the [References](references.md), not a replacement for them.

## Contents

**Front matter**

- [How to use this book](preface.md)
- [Data files](data.md)

**Part I. Foundations**

- [Part 1: Foundations](part1-foundations.md): causal effects, the two worlds, selection bias, the three conditions and how to read the math
- [Part 2: The ARISE data and getting started in JASP](part2-data-and-jasp.md)

**Part II. The designs, in order of increasing rigor**

| Chapter | The situation | Design |
|---|---|---|
| [Module 1](module-01.md) | We observe only the program group, before and after | One-group pre-post |
| [Module 2](module-02.md) | We have an untreated group, but only after the program | Posttest-only with a comparison group |
| [Module 3](module-03.md) | The groups differ, and we measured how | Regression-adjusted comparison |
| [Module 4](module-04.md) | The groups differ on a few things we can match exactly | Exact matching |
| [Module 5](module-05.md) | The groups differ on too many things to match exactly | Propensity score matching |
| [Module 6](module-06.md) | We have an untreated group, observed before and after | Difference-in-differences (DiD) |
| [Module 7](module-07.md) | The program starts at a known time, and we have a long history | Interrupted time series (ITS) |
| [Module 8](module-08.md) | The program starts at a known time, and an untreated group shares the same history | Comparative interrupted time series (CITS) |
| [Module 9](module-09.md) | Assignment follows a cutoff score | Regression discontinuity design (RDD) |
| [Module 10](module-10.md) | Assignment can be randomized | Randomized controlled trial (RCT) |
| [Module 11](module-11.md) | The program worked on average. For whom, and how much is enough? | Effect heterogeneity and dose-response within a randomized trial |

**Part III. Putting it together**

- [Wrap-up: Putting the designs side by side](wrap-up.md)

**Back matter**

- [Glossary](glossary.md)
- [References and readings by module](references.md)
