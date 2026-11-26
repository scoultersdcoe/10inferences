# Data files

Each module uses one data file. Download the file for the module you are working on, then open it in JASP with **File → Open → Computer**.

| Module | Design | File | Rows | Size |
|---|---|---|---|---|
| [Module 1](module-01.md) | One-group pre-post | [m01_pre_post.csv](data/m01_pre_post.csv) | 2,082 | 151 KB |
| [Module 2](module-02.md) | Posttest-only comparison | [m02_posttest_only.csv](data/m02_posttest_only.csv) | 5,746 | 396 KB |
| [Module 3](module-03.md) | Regression adjustment | [m03_regression_adjusted.csv](data/m03_regression_adjusted.csv) | 5,584 | 495 KB |
| [Module 4](module-04.md) | Exact matching | [m04_exact_matching.csv](data/m04_exact_matching.csv) | 5,584 | 575 KB |
| [Module 5](module-05.md) | Propensity score matching | [m05_propensity_matching.csv](data/m05_propensity_matching.csv) | 5,584 | 558 KB |
| [Module 6](module-06.md) | Difference-in-differences | [m06_diff_in_diff.csv](data/m06_diff_in_diff.csv) | 17,645 | 1,827 KB |
| [Module 7](module-07.md) | Interrupted time series (school averages) | [m07_interrupted_time_series.csv](data/m07_interrupted_time_series.csv) | 12 | 1 KB |
| [Module 8](module-08.md) | Comparative interrupted time series (school averages) | [m08_comparative_its.csv](data/m08_comparative_its.csv) | 18 | 1 KB |
| [Module 9](module-09.md) | Regression discontinuity (simulated program) | [m09_regression_discontinuity.csv](data/m09_regression_discontinuity.csv) | 22,528 | 2,601 KB |
| [Module 10](module-10.md) | Randomized controlled trial (simulated program) | [m10_randomized_trial.csv](data/m10_randomized_trial.csv) | 6,110 | 570 KB |
| [Module 11](module-11.md) | Heterogeneity and dose-response (simulated program) | [m11_heterogeneity_dose.csv](data/m11_heterogeneity_dose.csv) | 6,110 | 593 KB |

## About the data

Modules 1 to 8 use i-Ready reading scores, grades K to 5, from four Oceanside elementary schools that started ARISE in 2024-25 and nine comparison schools that started in 2025-26. Modules 7 and 8 contain only school averages for each test window. Modules 9, 10 and 11 add a simulated program's effect to real scores, so the true effect is known; your instructor will share it when you meet.

Student identifiers have been replaced with one-way hashed codes. The same student has the same code in every file, so files can still be linked, but the codes cannot be traced back to an original identifier. All other values are unchanged.

Each module's **Get to know the data** section has a data dictionary for the variables that module uses. Every 0/1 variable is coded 1 = yes, and blank cells are missing values.
