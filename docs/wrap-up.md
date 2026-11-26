# Wrap-up: Putting the designs side by side

The same program can look large, small or absent depending on the design. A design is only as good as its stand-in for "what would have happened," and every stand-in rests on an assumption you cannot fully test.

## The ten designs compared

| Module | Design | Key assumption | Biggest threat | JASP analysis |
| --- | --- | --- | --- | --- |
| 1 | One-group pre-post | Nothing would have changed without the program | Maturation | Paired t-test |
| 2 | Posttest-only | Groups were equal before the program | Selection | Independent t-test |
| 3 | Regression-adjusted | No unmeasured differences once controls are included | Unmeasured confounders | Linear regression |
| 4 | Exact matching | Matched students differ only in program status | Unmeasured confounders; dropped cases | Weighted regression |
| 5 | Propensity score matching | Selection depends only on the measured variables | Unmeasured confounders | Logistic regression, t-test |
| 6 | Difference-in-differences | Parallel trends | Different pre-existing trends | Regression, mixed model |
| 7 | Interrupted time series | Pre-program trend would have continued | History | Segmented regression |
| 8 | Comparative ITS | Comparison series shows what would have happened | Differential history | Segmented regression |
| 9 | Regression discontinuity | Nothing else changes at the cutoff | Manipulation; other programs at the cutoff | Regression within a bandwidth |
| 10 | Randomized trial | Randomization worked and was followed | Attrition, non-compliance | t-test, regression |

## Weighing the evidence across designs

The ten estimates will not agree, and that is the point of the course. Do not average them, and do not simply pick the one that is statistically significant. Work through these questions instead.

1. **How believable is each stand-in for ARISE?** Start with the design's assumption, not its p-value. ARISE schools chose the program. Designs that rely on the groups being alike (Module 2) or on measured characteristics capturing that choice (Modules 3 to 5) rest on weaker ground than designs that also use change over time (Modules 6 and 8).
2. **Which way would each design's likely bias push the estimate?** Pre-post counts normal growth as an effect, so it is biased upward. Posttest-only counted ARISE students' head start as an effect. An early start in comparison schools would push Modules 2 to 8 toward zero. Knowing the direction tells you whether an estimate is more likely a ceiling or a floor.
3. **Do designs with different weaknesses agree?** Agreement among designs that share a weakness tells you little. Regression and matching share one assumption (nothing important went unmeasured), while DiD and CITS rely on different ones (parallel changes or trends). If estimates from both families land in the same place, the conclusion does not hinge on any one assumption.
4. **What does the most believable estimate rule out?** Use its confidence interval (Part 1, Reading a result that is not significant). Say which effects the evidence rules out and which it cannot.
5. **What could none of the designs address?** Modules 2 to 8 share some limits: only four ARISE schools, a single program year, and comparison schools that may have started early. Agreement among designs cannot fix a limit they all share, so name these limits in every summary.

**Putting it into one statement.** A good summary names the best estimate and its range, the design it comes from and why you trust it, what the other designs add, and what remains uncertain. For example: "Across the designs that best account for how ARISE schools were chosen, ARISE's first-year effect on spring reading scores was close to zero, and the most precise estimates rule out effects larger than about \_\_\_ SD. This is one year of data from four schools, so a smaller effect, or one that takes longer to appear, cannot be ruled out."

## Your results log

Fill this in as you go, and bring it to your final meeting. For "Trust," rate how much you believe the estimate reflects the true ARISE (or simulated) effect, from 1 (not at all) to 5 (very much). In the same column, note which way the estimate is likely biased (too high, too low or unclear) and why, and whether its confidence interval rules out a meaningful effect.

| Module | Estimate | 95% CI | p-value | Effect size (SD) | Trust (1–5), likely bias and why |
| --- | --- | --- | --- | --- | --- |
| 1 Pre-post |  |  |  |  |  |
| 2 Posttest-only |  |  |  |  |  |
| 3 Regression |  |  |  |  |  |
| 4 Exact matching |  |  |  |  |  |
| 5 PSM |  |  |  |  |  |
| 6 DiD (regression) |  |  |  |  |  |
| 6 DiD (mixed model) |  |  |  |  |  |
| 7 ITS (level / slope) |  |  |  |  |  |
| 8 CITS (level / slope) |  |  |  |  |  |
| 9 RDD (ITT / receiving) |  |  |  |  |  |
| 10 RCT (unadjusted / adjusted) |  |  |  |  |  |
| 11 Heterogeneity and dose (EL difference / effect per session) |  |  |  |  |  |

## Final reflection questions

1. Which estimates of the ARISE effect agree with each other, and which stand out? What explains the outliers?
2. If a principal asked you, "Does ARISE work?", what would you say, and which modules would you point to?
3. Which result was statistically significant but practically small, or practically large but not trustworthy?
4. If you could redesign the ARISE evaluation from the start, what design would you use, and why?
5. Which estimates rule out a meaningful effect, and which are simply inconclusive? How does that change what you would tell the principal?
6. What would you want to know about how ARISE was carried out in its first year before concluding that it does or does not work?

