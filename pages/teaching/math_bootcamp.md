---
layout: page
title: PhD Math Bootcamp
sidebar_link: False
permalink: /teaching/math_bootcamp
---
<!--make new sidebar with reading, syllabus, etc-->

### Syllabus 

[Click here for syllabus]({{ site.baseurl }}/teaching/math_bootcamp/syllabus)

### Lecture Notes

[Linear Algebra Notes]({{ site.baseurl }}/assets/pdfs/math_bootcamp/Mathcamp_Linear_Algebra.pdf)

<a name="assign"></a>

### Assignments


Assignments will be posted here at the Tuesday evening of each week. I will also post solutions.



<!--
<table class="table table-striped">
{% for assignment in site.data.math_bootcamp.assignments %}
<tr>
    <td>
    <a class="btn btn-default" href="{{page.assets}}{{assignment.link}}">
        <i class="fa fa-download"></i>&nbsp; {{assignment.name}}</a>&nbsp;
    <span style="color:red; font-weight:bold;">Due: {{assignment.due}}</span>
    <p>{{assignment.descrip}}</p>
   {% for link in assignment.keys %} 
    <a style="background-color:#b0b0b0;" class="btn btn-default btn-sm" href="{{page.assets}}{{link.link}}"><i class="fa fa-key">&nbsp; {{link.name}}</i></a> 
   {% endfor %}
    </td>
</tr>
{% endfor %}
</table>


<table class="table table-striped">
{% for assignment in site.data.math_bootcamp.assignments %}
<tr>
    <td>
    <a class="btn btn-default" href="{{page.assets}}{{assignment.link}}">
        <i class="fa fa-download"></i>&nbsp; {{assignment.name}}</a>&nbsp;
    <span style="color:red; font-weight:bold;">Due: {{assignment.due}}</span>
    <p>{{assignment.descrip}}</p>
   {% for link in assignment.keys %} 
    <a style="background-color:#b0b0b0;" class="btn btn-default btn-sm" href="{{page.assets}}{{link.link}}"><i class="fa fa-key">&nbsp; {{link.name}}</i></a> 
   {% endfor %}
    </td>
</tr>
{% endfor %}
</table>
-->
<!--
<table style="width:100%">
  <tr>
    <th>Description</th>
    <th>Due Date</th> 
    <th>Link</th>
  </tr>
  {% for assignment in site.data.math_bootcamp.assignments %}
  <tr>
    <td>{{assignment.descrip}}</td>
    <td>{{assignment.due}}</td> 
    <td> [here]({{ url }}/assets/pdfs/math_bootcamp/assignments/{{assignment.link}}) </td>
  </tr>
  {% endfor %}
</table>

-->


| Description  | Due Date | Link |  
| :--- | :---   | ---: |{% for assignment in site.data.math_bootcamp.assignments %}
  | {{assignment.descrip}} | {{assignment.due}} | {% if assignment.upload != 'none' %} [{{assignment.name}}]({{ url }}/assets/pdfs/math_bootcamp/assignments/{{assignment.link}})  {% endif %}  {% endfor %}




<!--
| Description  | Due Date | Link |
| :--- | :---: | :---: |
| **Univariate calculus, sets, and logic** | --- | <button name="button">Problem Set 0</button> |
| **Linear Systems and Matrix Algebra** | July 27 | <button name="button">Problem Set 1</button> |
| **Set Theory and Proofs and Real Analysis** | August 3 | <button name="button">Problem Set 2</button> |
| **Multivariate Calculus and Miscellaneous Topics** | August 10 | <button name="button">Problem Set 3</button> |
-->
Note: The material in assignment 0 is fair game for the final exam. You should complete these problems to refresh old topics and learn some new ones. However, you do not need to turn this assignment in to me. I will assume your understanding and familiarity with the material during the mathcamp, so please complete your study no later than July 23rd

### Assignment LaTeX Template

The template file is [hw_template.tex]({{ url }}/assets/pdfs/math_bootcamp/assignments/hw_template.tex) (thanks to my colleague Brett Devine).  The template is marked with some commented code to know where you type the assignment name, your name and where your answers go.

First, enter the assignment name and your name in the designated fields.

```latex
\title{Assignment ?}
\author{Jon Doe}
```

Next, for each problem, you can use the custom `{problem}` environment created in the file. Simply type the following every time start an answer for a new problem.

```tex
\begin{problem}{?}
    Type your answer here.
\end{problem}
```

In the above code, **you need to replace the ?** with the number of the problem.  For example, if you are typing your answer to Problem 23, you would type

```tex
\begin{problem}{23}
    Your answer here.
\end{problem}
```

<a name="read"></a>

### Course Outline

Below I have provided a *tentative* schedule. Dates as well as topics are subject to change depending on the pace of the course, as well as what I think should be covered. Also, I will be introducing programming (specifically using Python) on August 9th. That day will be optional, although I strongly recommend you attend. 

#### Before coming to mathcamp:

| Date  | Topics | Readings | Assignments |
| :--- | :---   | :--- | :--- |
| Prereqs | Univariate Calculus | S&B 2-5 | Prerequisite assignment to be completed early in the course.|

#### Week 1 (July 23-July 27)

| Date  | Topics | Readings | Assignments |
| :--- | :---   | :--- | :--- |
| 23 | Linear Systems and Matrix Algebra | S&B 6-9; Notes |  |
| 24 | Linear Systems and Matrix Algebra | S&B 6-9; Notes |  |
| 25 | Linear Spaces | S&B 10, 11 | |
| 26 | Linear Spaces and Set Theory | S&B 10, 11; Provided Notes |  |
| 27 | Weekly Review |  | **Assignment 1 due** |

#### Week 2 (July 30-August 3)

| Date  | Topics | Readings | Assignments |
| :--- | :---   | :--- | :--- |
| 30 | Set Theory | S&B 10, 11; Provided Notes |  |
| 31 | Proofs and Real Analysis | S&B 12; Appendix A1; Provided Notes |  |
| 1 | Proofs and Real Analysis | S&B 12; Appendix A1; Provided Notes |  |
| 2 | Proofs and Multivariate Calculus | S&B 13-15, 30 |  |
| 3 | Weekly Review |  | **Assignment 2 due**  |

#### Week 3 (August 6-August 10)

| Date  | Topics | Readings | Assignments |
| :--- | :---   | :--- | :--- |
| 6 | Multivariate Calculus | S&B 13-15, 30 |  |
| 7 | Multivariate Calculus | S&B 13-15, 30 |  |
| 8 | Miscellaneous Topics | TBA |  |
| 9 | Introduction to Programming | Optional |  |
| 10 | Weekly Review |  | **Assignment 3 due**  |

#### Week 4 (August 15)

| Date  | Topics | Readings | Assignments |
| :--- | :---   | :--- | :--- |
| 15 | Final Exam | No Notes | **On Campus August 15** |

*S&B ~ Simon & Blume text*