# How to use this book

This book teaches you ten ways to answer one question: *Did a program actually cause a change?* You work through it on your own, at your own pace, in JASP (a free, point-and-click statistics program). After each module, you meet with the instructor to talk through what you found.

**Work through the modules in order.** Each one builds on the last. Module 1 uses the simplest design and Module 10 uses the strongest. Along the way you will watch the same program look very effective, then less effective, then not effective at all, depending on the design. Understanding why is the real goal of the course.

**How the modules are organized.** Each module starts from a problem, not a method. Its title names the situation you are in, such as "We observe only the program group, before and after." The module then asks three questions in order. What is missing? What comparison stands in for it? What must be true for us to believe that comparison? The name of the design and its statistical model come last, as the tool that answers those questions. Long after you have forgotten which JASP menu runs a regression, these are the questions you should still be asking of every study you read.

**A companion, not a textbook.** This book shows you how to carry out and read each design. It does not replace the source texts that teach regression, regression discontinuity and the other designs in depth, and you should use it alongside them. The math here is kept to what you need to see what JASP is doing and how each design arrives at its estimate. The source texts give the fuller treatment, and each module's Learn more section points to the chapters that match it.

## What every module contains

| Part | What it gives you |
| --- | --- |
| The problem | The situation you are in, what is missing, and the trial you wish you had |
| Picture the design | A picture of the design using the six students from Part 1: how it fills in the missing world, what it assumes, and how close it gets to the true effect |
| What must be true to believe it | The assumption that makes the stand-in work, in words and in symbols; how you could check it; and how the What Works Clearinghouse would judge the design |
| The design and its model | The model as it appears in research articles, decoded symbol by symbol; how it arrives at the effect; and the formulas JASP uses behind the scenes |
| Example scenarios | One or two everyday examples, with the question each design answers |
| Your question | What you are asking of the ARISE data in this module |
| Get to know the data | A data dictionary of the variables you will use, then a quick look at the file before any test: what a row is, what's missing, typical values and the shape of the data |
| Step by step in JASP | Where each variable goes in JASP and why, then exact clicks using that module's data file |
| Checkpoints | Numbers you should see if you set things up correctly |
| Reading the output | What each number in the JASP tables means, and which ones matter |
| Explaining it to stakeholders | How to put the estimate in real-world terms, with a sample sentence and what to add so listeners don't over-read it |
| Assumptions | What has to be true for the analysis to give a trustworthy answer |
| Threats to internal validity | The most common ways this design can mislead you |
| Bring to your instructor | Conceptual questions to answer before your meeting, including how the design filled in the missing world for ARISE |
| Learn more | Matching chapters in the source texts, chosen to fit this course |

## About the checkpoints

Checkpoints are numbers like sample sizes (for example, "N should be 5,584"). They tell you whether you opened the right file, applied the right filter, and put the right variables in the right boxes. If your checkpoint does not match, stop and recheck your setup before you interpret anything. Checkpoints never give you the answer itself. Working out what the results mean is your job, and that is what you will discuss with your instructor.

## What you need

- **JASP**, installed on your computer (free from jasp-stats.org).
- **The eleven module data files** (m01 through m11, .csv), which you can download from the [Data files](data.md) page.
- **The Effect**, by Nick Huntington-Klein, which you can [read free online](https://theeffectbook.net). Chapter numbers in this book match both the 1st (2021) and 2nd (2025) editions for Chapters 1 to 20.
- A notebook or document for your answers to the reflection questions.

## Source texts

These books teach the methods in this book in more depth. Most go well beyond this course, so each module's Learn more section lists only the chapters that match it.

| Text | Why it is useful here | Access |
| --- | --- | --- |
| *The Effect*, Nick Huntington-Klein | The main text for this course. Clear explanations of research design, regression, matching, difference-in-differences and regression discontinuity, with little math. | Free online |
| *Causal Inference: The Mixtape*, Scott Cunningham | Potential outcomes, matching, regression discontinuity and difference-in-differences, with a bit more math and worked examples | Free online |
| *Causal Inference: What If*, Miguel Hernán and James Robins | The clearest statement of what must be true to believe a causal estimate (exchangeability, positivity and consistency) and of the target trial idea. Written for public health, but the logic carries over. | Free online |
| *Mastering 'Metrics*, Joshua Angrist and Jörn-Steffen Pischke | A short, friendly introduction to randomized trials, regression, regression discontinuity and difference-in-differences, with examples from economics | Print |
| *Methods Matter*, Richard Murnane and John Willett | Causal designs explained with education examples, including experiments in schools, clustering and regression discontinuity | Print |
| *Experimental and Quasi-Experimental Designs for Generalized Causal Inference*, William Shadish, Thomas Cook and Donald Campbell | The classic source on research design and threats to validity in education, criminal justice and social programs | Print |
| *What Works Clearinghouse Procedures and Standards Handbook, Version 5.0* | The standards U.S. education researchers use to judge whether a study's evidence is believable, including baseline equivalence, attrition and regression discontinuity | Free online |

## When you get stuck

1. Reread the step. Most problems come from a variable in the wrong box or a missing filter.
2. Check the variable type (Part 2 explains how).
3. Compare your output with the checkpoint.
4. Still stuck? Write down exactly where it went wrong and bring a screenshot to your instructor.

