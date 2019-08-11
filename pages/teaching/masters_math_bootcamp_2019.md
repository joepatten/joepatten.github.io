---
layout: page
title: Master's Math Bootcamp 2019
sidebar_link: False
permalink: /teaching/masters_math_bootcamp_2019
---
<!--make new sidebar with reading, syllabus, etc-->



### Syllabus 

[Click here for syllabus]({{ site.baseurl }}/teaching/masters_math_bootcamp_2019/syllabus)


<a name="assign"></a>

### Assignments


The Assignment will be posted here. I will also post solutions to the assignment and final exam.

| Description  | Due Date | Assignment | Key |
| :--- | :---   | ---: | ---: |{% for assignment in site.data.masters_math_bootcamp_2019.assignments %}
  | {{assignment.descrip}} | {{assignment.due}} | {% if assignment.upload != 'none' %} [{{assignment.name}}]({{ url }}/assets/pdfs/masters_math_bootcamp/assignments/{{assignment.link}})  {% endif %} | {% if assignment.upload_key != 'none' %} [{{assignment.key_name}}]({{ url }}/assets/pdfs/masters_math_bootcamp/assignments/{{assignment.key_link}}) {% endif %} {% endfor %}




<!--
| Description  | Due Date | Link |
| :--- | :---: | :---: |
| **Univariate calculus, sets, and logic** | --- | <button name="button">Problem Set 0</button> |
| **Linear Systems and Matrix Algebra** | July 27 | <button name="button">Problem Set 1</button> |
| **Set Theory and Proofs and Real Analysis** | August 3 | <button name="button">Problem Set 2</button> |
| **Multivariate Calculus and Miscellaneous Topics** | August 10 | <button name="button">Problem Set 3</button> |
-->

### Course Outline

Below I have provided a *tentative* schedule. Dates as well as topics are subject to change depending on the pace of the course, as well as what I think should be covered.

{% include masters_mathcamp_outline_2019_new.html %}