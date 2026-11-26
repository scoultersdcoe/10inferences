# Module 11: The program worked on average. For whom, and how much is enough?

**Design:** Effect heterogeneity and dose-response within a randomized trial · **File:** [m11_heterogeneity_dose.csv](data/m11_heterogeneity_dose.csv) · **JASP analyses:** ANOVA (for plots), Flexplot (Visual Modeling), Linear Regression

This module uses a simulated program. In the data, half the students in each school and grade were randomly offered a made-up tutoring program, Reading Boost, in 2024-25. Students who were offered it attended anywhere from 0 to 40 sessions, and a known effect that depends on how many sessions they attended was added to their spring scores. The prior-year attendance rate is also made up. Your instructor will share the true effects when you meet.

## The problem

Module 10 answered "Did the program work, on average?" Decision makers usually ask two more questions. Did it work better for some students than for others? And did students who got more of it gain more?

- **What is missing.** Each kind of student's own effect, and what each program student would have scored with a different number of sessions.
- **The trial you wish you had.** A coin flip within each subgroup, which you have, and a second coin flip that assigns each student a number of sessions, which you do not have.
- **The stand-in available.** For a subgroup, the control students in the same subgroup. For a dose, the program students who attended fewer sessions.

An average effect can hide real differences. In Part 1, the ATE, the ATT and the ATU were different numbers only when students' effects differed. This module looks at those differences directly. Researchers call them effect heterogeneity. A characteristic that changes the size of the effect, such as being an English learner, is called a moderator.

The two questions in this module look alike, but they rest on very different ground. A subgroup comparison keeps the coin flip. Among English learners, the coin still decided who was offered tutoring, so the control English learners are a fair stand-in for the program English learners. A dose comparison does not keep the coin flip. The coin decided who was offered tutoring, but students and families decided how many sessions to attend. Students who attended more may differ from those who attended less in ways that also affect their scores.

**The story.** Each school and grade randomly split its students in half. The program half were offered up to 40 Reading Boost sessions during the year, and the control half were not. Most offered students attended between 11 and 40 sessions, and about 9% never attended. The outcome is the spring z-score, as in Module 10.

## Picture the design: filling in the missing world

Go back to the god's-eye view in Part 1. The true effects were +4 for Ava, +6 for Ben and +5 for everyone else. No study can see those individual numbers, because each student shows only one world. What a study can see is an average effect for a group, such as English learners or students who started the year behind. That group average is the conditional average treatment effect (CATE), and it is the most any study can say about who benefits.

Now look at dose. In Module 10, the coin flip put Ava, Cruz and Dev in the program. Suppose the program was tutoring, and they attended different numbers of sessions.

| Student | Sessions attended | Fall score | Spring score, observed (Y₁) | Spring without the program (Y₀, never seen) | True effect |
| --- | --- | --- | --- | --- | --- |
| Dev | 8 | 430 | 456 | 451 | +5 |
| Ava | 16 | 460 | 486 | 482 | +4 |
| Cruz | 24 | 500 | 525 | 520 | +5 |

The stand-in: for a dose comparison, the students who attended fewer sessions stand in for what the frequent attenders would have scored with fewer sessions.

![Dose-response in the running example. Dev attended 8 sessions and scored 456, Ava attended 16 and scored 486, and Cruz attended 24 and scored 525. A dashed line through their scores climbs 69 points from 8 to 24 sessions. Hollow circles just below each score show what each would have scored without the program, 451, 482 and 520, so the true effects are only +5, +4 and +5.](img/fig097.png)

Dose-response in the running example. Illustrative numbers, not ARISE data.

**Reading the picture.** Line up the program students by sessions, and spring scores climb steeply, by 69 points from Dev's 8 sessions to Cruz's 24. It looks as if every session adds about 4 points. But the hollow circles show that the three students would have been just as far apart without the program. Cruz started the year 70 points ahead of Dev. The true effects, +5, +4 and +5, do not grow with sessions at all. In this example the first few sessions did all the work, and the climb comes entirely from who attended more. The selection bias from Part 1 has come back, this time inside the program group.

**What it can and cannot answer.** Subgroup comparisons answer "Was the effect of being offered the program different for these students than for those?" Dose comparisons among program students answer "Did students who attended more score higher?" On their own, they cannot answer "Would attending more have raised a student's score?" Part E shows how the coin flip can help with that question.

**Looking ahead.** The wrap-up puts all ten designs side by side. This module adds a reminder for every one of them: an average effect is an average over students whose effects may differ.

## What must be true to believe it

This module asks you to believe two different things, one for each question.

For subgroup effects, the coin flip must have worked within each subgroup. In symbols, with X the subgroup:


$$
E[\,Y_0 \mid Z = 1, X = x\,] = E[\,Y_0 \mid Z = 0, X = x\,] \quad \text{for every subgroup } x
$$


Read it as: within English learners, and within students who are not English learners, the control students are a fair copy of the program students. Randomization makes this true as long as the subgroup is defined by something measured before the coin flip. A subgroup defined by something that happened afterward, such as "students who attended at least 20 sessions," is no longer protected by the coin.

For a dose-response pattern among program students, you need exchangeability across doses:


$$
E[\,Y_s \mid S = s', X\,] \text{ is the same for every dose } s' \text{ actually received, for each dose } s
$$


Read it as: once you hold the measured characteristics X fixed, students who attended 30 sessions would have scored, on average, the same as students who attended 10 sessions, had they attended the same number. This is the same kind of assumption as in Module 3, now applied to an amount of the program instead of a yes or no. It fails if motivation, family support or anything else not measured affects both attendance and scores.

**How you could check it.** For subgroups, check balance within each subgroup, as in Module 10, Part A. For dose, you cannot check it directly. You can compare students at different doses on characteristics measured before the program (Part D, step 2), and you can compare the dose-response slope with an estimate that uses the coin flip (Part E). If the two disagree, the dose comparison is probably biased.

**When the stand-in can be believable.** Subgroup effects are believable when the subgroup was defined by a characteristic measured before the coin flip, was chosen before anyone looked at the results, and has enough students to give a precise estimate. A dose-response pattern among program students is believable only when the main reasons students attended more were measured, or when it agrees with an estimate that relies on the coin flip.

**How the What Works Clearinghouse would judge it.** The WWC rates the design behind each finding. A subgroup effect from a randomized trial, for a subgroup defined before assignment, comes from the same randomized comparison as the main effect. A comparison of program students who received more of the program with those who received less is not a comparison of randomized groups, so it cannot borrow the trial's rating. Treat it the way you treated the designs in Modules 3 to 5.

## The design and its model: interactions and dose

Subgroup effects come from an interaction, the product of two predictors (Module 8 used the same idea). Part B's regression is:


$$
\text{tut\_z\_spring} = b_0 + b_1 \times \text{tut\_offer} + b_2 \times \text{el} + b_3 \times \text{tut\_offer\_x\_el} + b_4 \times \text{z\_fall}
$$


- b1 (tut\_offer): the effect of being offered tutoring for students who are not English learners.
- b2 (el): how far English learners in the control group were from other control students.
- b3 (tut\_offer\_x\_el): how much larger (or smaller) the effect was for English learners. This is the heterogeneity estimate.
- b4 (z\_fall): the fall score, which makes the estimates more precise, as in Module 10.

Part C uses the same idea with a moderator that is a number rather than a group. With tut\_offer\_x\_zfall in the model, the effect can grow or shrink as fall scores rise.

Part D asks a different kind of question. Among program students only, it regresses spring scores on sessions attended, first alone and then with characteristics measured before the program:


$$
\text{tut\_z\_spring} = a_0 + a_1 \times \text{tut\_sessions} + a_2 \times \text{z\_fall} + a_3 \times \text{att\_prior}
$$


The coefficient a1 is the difference in spring scores between students who attended one more session, after holding the other characteristics fixed. Whether it is the effect of one more session depends on the dose assumption above.

**The model, in symbols.** Articles write the subgroup model with Z for the coin flip:


$$
Y_i = \beta_0 + \beta_1 Z_i + \beta_2\,\text{EL}_i + \beta_3\,(Z_i \times \text{EL}_i) + \beta_4\,\text{Fall}_i + \varepsilon_i
$$


| Symbol | What it means | Where it shows up in JASP |
| --- | --- | --- |
| Yᵢ | Student i's spring score | Dependent Variable (tut\_z\_spring) |
| Zᵢ | 1 if the coin offered the student tutoring, 0 for control | tut\_offer |
| ELᵢ | 1 for English learners | el |
| Zᵢ × ELᵢ | 1 only for English learners who were offered tutoring | tut\_offer\_x\_el |
| β₁ | The effect for students who are not English learners | tut\_offer row |
| β₃ | The difference between the two groups' effects | tut\_offer\_x\_el row |
| Sᵢ | Sessions attended, 0 to 40 | tut\_sessions |
| Attᵢ | Prior-year attendance rate, a measured proxy for motivation | att\_prior |
| α₁ | The difference in spring scores per extra session, holding fall score and attendance fixed | tut\_sessions row in Part D |

Write out the model for each group by setting EL to 0 and then to 1:


$$
\begin{aligned}
\text{Effect for students who are not EL } (\text{EL} = 0)\text{:}\quad & \beta_1 \\
\text{Effect for English learners } (\text{EL} = 1)\text{:}\quad & \beta_1 + \beta_3 \\
\text{Difference between the two effects:}\quad & \beta_3
\end{aligned}
$$


With a number as the moderator, the effect becomes a line rather than two values:


$$
\begin{gathered}
Y_i = \beta_0 + \beta_1 Z_i + \beta_2\,\text{Fall}_i + \beta_3\,(Z_i \times \text{Fall}_i) + \varepsilon_i \\[8pt]
\text{Effect for a student whose fall z-score is } f\text{:}\quad \beta_1 + \beta_3\, f
\end{gathered}
$$


**Which effect does it estimate?** Each subgroup effect is a conditional average treatment effect, the ATE for students who share a characteristic:


$$
\tau(x) = E[\,Y_1 - Y_0 \mid X = x\,]
$$


Because the coin flip worked within each subgroup, β₁ estimates τ(not EL) and β₁ + β₃ estimates τ(EL). The overall ATE is the average of the subgroup effects, weighted by how common each subgroup is:


$$
\text{ATE} = \sum_{x} P(X = x)\,\tau(x) \qquad \text{e.g.}\quad \text{ATE} = 0.85\,\tau(\text{not EL}) + 0.15\,\tau(\text{EL})
$$


This is why the ATT and the ATU in Part 1 could differ. If English learners benefit more, and one group has more English learners than the other, the two groups' average effects differ even when every student is treated the same way.

For dose, split the comparison you can see in the same way as Part 1 split the difference in means. Compare students who attended 24 sessions with students who attended 8:


$$
\begin{gathered}
\underbrace{E[Y \mid S = 24] - E[Y \mid S = 8]}_{\text{what you see}} \\[4pt]
= \underbrace{E[\,Y_{24} - Y_{8} \mid S = 24\,]}_{\text{effect of the extra 16 sessions}}
+ \underbrace{E[\,Y_{8} \mid S = 24\,] - E[\,Y_{8} \mid S = 8\,]}_{\text{selection bias}}
\end{gathered}
$$


In the running example, Cruz scored 69 points more than Dev. The extra 16 sessions added nothing (both effects were +5), so 69 = 0 + 69: all selection bias. Adding fall scores and prior attendance to the regression removes the part of the bias those variables explain, and leaves the rest.

The coin flip offers another route. Being offered tutoring raised attendance by the first stage, and raised scores by the ITT. If the offer changed scores only by changing how many sessions students attended, the ratio is the effect per session:


$$
\text{effect per session} = \frac{E[Y \mid Z=1] - E[Y \mid Z=0]}{E[S \mid Z=1] - E[S \mid Z=0]} = \frac{\text{ITT}}{\text{first stage}}
$$


This is the same ratio as the LATE in Module 9, with sessions in place of a yes-or-no take-up. It assumes that the offer mattered only through sessions and that each session adds about the same amount. It gives an average effect per session for the students whose attendance the offer changed. It cannot tell you whether the 35th session matters as much as the 5th.

**Behind the scenes: what JASP computes.** Every regression in this module is ordinary least squares, as in Module 3. An interaction column is just two columns multiplied together, so tut\_offer\_x\_el is 1 only for English learners who were offered tutoring. Fitting one model with an interaction gives nearly the same effects as running the regression separately for each subgroup (Part B, step 3). The single model also gives a standard error and confidence interval for the difference between the groups' effects. That SE is much larger than the SE of the main effect, here about 0.042 against 0.016, because the estimate leans on the smaller subgroup. Detecting a difference between two effects often takes about four times as many students as detecting the effect itself. JASP does not divide the ITT by the first stage for you. Part E does it by hand, which gives the right estimate but not a proper SE.

## Example scenarios

**Scenario A: Summer school by grade.** A district randomly offers summer school to half of its rising 3rd and 4th graders. The overall effect is small, but the effect for rising 3rd graders is twice that for 4th graders. Question answered: Did the offer help 3rd graders more? Caution: If the district looked at ten subgroups and reported only the one that stood out, the difference may be chance.

**Scenario B: Tutoring dosage in an annual report.** A report says students who attended 30 or more tutoring sessions gained twice as much as students who attended fewer than 10. Question answered: Did frequent attenders score higher? Not answered: Would the infrequent attenders have gained more if they had come more often? Students who come to tutoring 30 times may differ in many ways from students who come 5 times.

## Your question in this module

*For students randomly offered Reading Boost tutoring, was the effect larger for English learners and for students who started the year further behind, and did attending more sessions produce larger gains?*

## Get to know the data

**Data dictionary.** The variables you will use in this module. Each row is one student.

| Variable | Definition | Data type |
| --- | --- | --- |
| tut\_group | "1 Program" or "2 Control", assigned at random within each school and grade | Category, text (Nominal) |
| tut\_offer | 1 = offered tutoring, 0 = control. The number version of tut\_group. | Binary 0/1 (Scale) |
| tut\_z\_spring | Spring reading z-score within grade, with the simulated tutoring effect added for students who attended. This is the outcome. | Continuous (Scale) |
| z\_fall | Fall reading z-score within grade, measured before the program. Missing for 206 students. | Continuous (Scale) |
| el | 1 = English learner, 0 = not | Binary 0/1 (Scale) |
| el\_group | "EL" or "Not EL", the text version of el, used for plots | Category, text (Nominal) |
| tut\_offer\_x\_el | tut\_offer × el. It is 1 only for English learners who were offered tutoring. | Binary 0/1 (Scale) |
| tut\_offer\_x\_zfall | tut\_offer × z\_fall. It equals z\_fall for offered students and 0 for control students. | Continuous (Scale) |
| tut\_sessions | Number of tutoring sessions attended, 0 to 40. Always 0 for control students. | Count (Scale) |
| tut\_sessions\_band | Sessions in bands: "0 (control)", "0 (offered)", "1-10", "11-20", "21-30", "31-40". Used only for plots. | Category, text (Nominal) |
| att\_prior | Attendance rate in the previous school year, in percent. Measured before the program. Simulated. | Continuous (Scale) |

1. Open m11\_heterogeneity\_dose.csv. Each row is one student, 6,110 in all.
2. Click Descriptives. Move tut\_sessions, tut\_z\_spring, z\_fall and att\_prior into Variables and tut\_group into Split. Under Plots, tick Distribution plots.

**What to look for:** tut\_sessions should be 0 for every control student. For program students, look at how spread out attendance is. Some students never came, and most came between 11 and 40 times. z\_fall and att\_prior should look alike in the two groups, because both were measured before the coin flip.

## Step by step in JASP

**Where the variables go, and why.**

| Variable | JASP box | Role and why |
| --- | --- | --- |
| tut\_z\_spring | Dependent Variable (Parts A to D) | The outcome |
| tut\_offer | Covariates | The coin flip. Its coefficient is the effect of being offered tutoring. |
| tut\_group, el\_group | Fixed Factors (ANOVA, Part B); Flexplot independent variable (Part C) | Text versions used only to draw plots with separate lines |
| el, z\_fall | Covariates | The moderators. Each must be in the model on its own whenever its interaction is. |
| tut\_offer\_x\_el, tut\_offer\_x\_zfall | Covariates | The interactions. Their coefficients show how the effect changes with the moderator. |
| tut\_sessions | Covariates (Part D); Dependent Variable (Part E) | The dose. In Part E it becomes the outcome of the first stage, as rdd\_received did in Module 9. |
| tut\_sessions\_band | Fixed Factors (ANOVA, Part D) | Used only to draw the dose plot |
| att\_prior | Covariates (Part D) | A characteristic measured before the program that may explain why some students attended more |
| tut\_offer = 1 | Filter (Part D) | Keeps only program students, because only they could attend sessions |

**Setup**

1. Open m11\_heterogeneity\_dose.csv.
2. Set tut\_group, el\_group and tut\_sessions\_band to Nominal. Set tut\_z\_spring, tut\_offer, el, z\_fall, tut\_offer\_x\_el, tut\_offer\_x\_zfall, tut\_sessions and att\_prior to Scale.

**Part A: The average effect**

1. Click Regression, then Linear Regression. Put tut\_z\_spring in Dependent Variable and tut\_offer and z\_fall in Covariates. Under Statistics, tick Estimates, Confidence intervals and Model fit.
2. Record the tut\_offer coefficient and its CI. This is the overall effect of being offered tutoring, as in Module 10, Part C. Keep it for Part E.

**Part B: Does the effect differ for English learners?**

1. Click ANOVA, then ANOVA. Put tut\_z\_spring in Dependent Variable and tut\_group and el\_group in Fixed Factors. Open Descriptives Plots, put el\_group on the Horizontal Axis and tut\_group in Separate Lines. The ANOVA is only there to draw the plot; ignore its tables. Look at the gap between the two lines for each group of students.
2. Click Linear Regression. Put tut\_z\_spring in Dependent Variable and tut\_offer, el, tut\_offer\_x\_el and z\_fall in Covariates. Tick Estimates and Confidence intervals.
3. Check: add the filter el = 1 and rerun Part A, then change the filter to el = 0 and rerun it again. Compare the two tut\_offer coefficients with the tut\_offer and tut\_offer + tut\_offer\_x\_el values from step 2. Remove the filter when you finish.

**Part C: Does the effect depend on the fall score?**

1. Click Visual Modeling, then Flexplot. Put tut\_z\_spring as the dependent variable, and z\_fall and tut\_group as the independent variables. The plot draws one line for each group.
2. Click Linear Regression. Put tut\_z\_spring in Dependent Variable and tut\_offer, z\_fall and tut\_offer\_x\_zfall in Covariates. Tick Estimates and Confidence intervals.

**Part D: Do students who attend more score higher?**

1. Click ANOVA, then ANOVA. Put tut\_z\_spring in Dependent Variable and tut\_sessions\_band in Fixed Factors. Open Descriptives Plots and put tut\_sessions\_band on the Horizontal Axis. Each dot is the average spring score for students in that band.
2. In the same ANOVA, replace tut\_z\_spring with z\_fall as the Dependent Variable. Then try att\_prior. These were measured before the program started, so the program cannot have changed them.
3. Add the filter tut\_offer = 1, so only program students remain. Click Linear Regression. Put tut\_z\_spring in Dependent Variable and tut\_sessions in Covariates. Tick Estimates and Confidence intervals, and record the tut\_sessions coefficient.
4. Add z\_fall to Covariates and record the tut\_sessions coefficient again. Then add att\_prior and record it a third time. Remove the filter when you finish.

**Part E: Use the coin flip to estimate the effect per session**

1. With no filter on, click Linear Regression. Put tut\_sessions in Dependent Variable and tut\_offer and z\_fall in Covariates. The tut\_offer coefficient is the first stage: how many more sessions being offered tutoring produced.
2. Divide the tut\_offer coefficient from Part A by this first stage. The result is the effect per session. Multiply it by 10 to get the effect of 10 sessions.
3. Compare it with the three tut\_sessions coefficients from Part D.

## Checkpoints

- Descriptives: Program N = 3,058, Control N = 3,052. Program students attended about 22 sessions on average.
- Regressions with z\_fall: N = 5,904 (students missing a fall score drop out).
- Part B: 460 English learners in the program group and 468 in the control group.
- Part D regressions with z\_fall: N = 2,958 program students.

## Reading the output

**Part A.** The tut\_offer coefficient is the effect of being offered tutoring, in SD units, averaged over all students. It should be close to Module 10's estimate.

**Part B.** In the plot, the gap between the program and control lines is the effect for each group of students. Read the regression this way:

| Row | What it tells you |
| --- | --- |
| tut\_offer | The effect for students who are not English learners |
| tut\_offer\_x\_el | How much larger the effect was for English learners. Its CI tells you whether the difference could be zero. |
| tut\_offer + tut\_offer\_x\_el | The effect for English learners. Add the two coefficients yourself. |
| el | How English learners in the control group compared with other control students. This is not an effect of the program. |

The separate regressions in step 3 should give effects close to those in step 2. They are not identical, because the single model makes the two groups share one z\_fall slope.

**Part C.** In the Flexplot, the two lines are further apart on the left, where students started behind, than on the right. The tut\_offer coefficient is the effect for a student with an average fall score (z\_fall = 0). The tut\_offer\_x\_zfall coefficient is how much the effect changes for each SD higher in the fall. A negative value means students who started behind gained more. Work out the effect for a student at z\_fall = −1 and at z\_fall = +1.

**Part D.** The dose plot climbs steeply from the 1-10 band to the 31-40 band. Step 2 shows why that is hard to read: fall scores and prior attendance climb across the bands too. Students who attended more were already ahead and already came to school more. Watch the tut\_sessions coefficient across the three regressions. It shrinks as you add z\_fall and then att\_prior, because part of what looked like the effect of sessions was really a difference between students. You can never be sure you have removed it all.

**Part E.** The coin flip decided who was offered tutoring, so the first stage and the ITT are both trustworthy. Their ratio is an estimate of the effect per session that does not depend on which students chose to attend more. If it is much smaller than the Part D coefficients, even the adjusted dose-response slope still contains selection bias.

## Explaining it to stakeholders

Subgroup and dose results are the ones stakeholders remember, and the easiest to overstate. Translate effects into i-Ready points as in Module 10 (1 SD is about 53 to 58 points in grades 1 to 5), and say clearly which results come from the coin flip.

| Result | How to say it | Example |
| --- | --- | --- |
| Overall effect (Part A) | Same as Module 10 | "Students offered tutoring gained about 10 more points than similar students who were not." |
| Subgroup effect (Part B) | Give each group's effect, then the difference and its range | "The effect for English learners was about twice as large as for other students, roughly 18 points compared with 9." |
| Moderator (Part C) | Describe the pattern across the range of starting points | "Students who started the year behind gained more than students who started ahead." |
| Dose (Parts D and E) | Lead with the coin-flip estimate, and call the attendance comparison a pattern, not an effect | "Each 10 sessions was worth about 4 to 5 points. Frequent attenders scored much higher, but most of that gap was there before tutoring began." |

**Cautions when you translate.**

- Do not say a program "works only for" a group because one subgroup's effect is significant and another's is not. Look at the difference (tut\_offer\_x\_el) and its CI.
- Say how many subgroups you looked at. If you check ten, expect one to stand out by chance.
- "Students who attended more gained more" is true and easy to misread. It does not mean that requiring more attendance would produce more gains.
- The program in this module is simulated, so these numbers are practice. If ARISE had attendance or dosage records, you would ask the same questions of them.

## Assumptions

- Random assignment within each school and grade, as in Module 10. Balance holds within subgroups as well.
- Subgroups were defined by characteristics measured before the coin flip.
- For Part D: no unmeasured differences between students who attended more and students who attended less, once z\_fall and att\_prior are held fixed. This assumption is not protected by randomization.
- For Part E: being offered tutoring affected scores only through the sessions attended, and each session adds about the same amount.

## Threats to internal validity

- Selection into dose: students who choose to attend more differ from those who attend less (Part D).
- Fishing across subgroups: testing many subgroups and reporting the one that stands out.
- Too few students in a subgroup to tell its effect apart from the others.
- Subgroups defined after the program started, such as "students who stayed all year," which the program itself may have changed.
- Dose measured with error, such as sessions recorded as attended when the student left early.

## Bring to your instructor

1. Report the overall effect (Part A), the effect for English learners and for other students, and the difference between them with its CI (Part B).
2. Using Part C, what is the effect for a student at z\_fall = −1 and at z\_fall = +1? Describe the pattern in one sentence a principal would understand.
3. Report the three tut\_sessions coefficients from Part D and the effect per session from Part E. Which do you trust most, and why?
4. Back to the two worlds. In the running example, Cruz scored 69 points more than Dev. Using the decomposition, how much of that was the effect of his extra 16 sessions, and how much was selection bias?
5. A board member says, "The program clearly works only for English learners, since that is where the effect is biggest." What would you say?
6. If you were designing a study to learn whether more sessions cause more gains, how could you use a coin flip to do it?

## Read an exemplar

Yeager, D. S., Hanselman, P., Walton, G. M., et al. (2019). A national experiment reveals where a growth mindset improves achievement. *Nature, 573*(7774), 364–369. [Journal (DOI)](https://doi.org/10.1038/s41586-019-1466-y) · [Free copy (eScholarship)](https://escholarship.org/uc/item/4xx99912)

**Why this study.** About 12,500 ninth graders in 65 nationally representative U.S. high schools were randomly assigned within their schools to a short online growth mindset program or a control module. The study asks where the program works, not only whether it does. Before seeing the results, the authors registered that they would focus on lower-achieving students, among whom core GPA rose by about 0.10 grade points. They also registered two school-level moderators: effects were largest in middle-achieving schools whose students' peers valued taking on challenges. The authors note that school norms were measured, not randomly assigned, the same distinction Module 11 makes between what the coin flip protects and what it does not.

**As you read, ask:**

- *Which subgroup analyses were registered before the results were known, and why does that matter?*
- *Why is the moderation by school norms not causal, even though the program itself was randomized?*
- *How would you explain to a principal what "where it works" means for their school?*

## Learn more

- *The Effect*, Chapter 10, Treatment Effects: heterogeneous effects, conditional effects and which average a design produces.
- *What If*, Chapter 4, Effect Modification: what it means for an effect to differ across subgroups, and why the answer can depend on how the effect is measured.
- *What If*, Chapter 12, IP Weighting and Marginal Structural Models: the section on treatments that come in amounts, for readers who want a way to estimate a dose-response curve without a coin flip.
- *Causal Inference: The Mixtape*, Chapter 4, Potential Outcomes Causal Model: heterogeneous effects and why the ATE, the ATT and the ATU differ.
- *Mastering 'Metrics*, Chapter 3, Instrumental Variables: using a randomized offer to recover the effect of the treatment itself.
- *Experimental and Quasi-Experimental Designs* (Shadish, Cook and Campbell), Chapter 10, Practical Problems 2: Treatment Implementation and Attrition: measuring how much of a program people actually received, and why comparing by dose is risky.

