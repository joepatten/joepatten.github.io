---
layout: page
title: PhD Math Bootcamp
sidebar_link: false
permalink: /teaching/math_bootcamp
---
<!--make new sidebar with reading, syllabus, etc-->

### Syllabus 

[Click here for syllabus]({{ site.baseurl }}/teaching/math_bootcamp/syllabus)

<a name="read"></a>

### Course Outline

Below I have provided a *tentative* schedule. Dates as well as topics are subject to change depending on the pace of the course, as well as what I think should be covered. Also, I will be introducing programming (specifically using Python) on August 9th. That day will be optional, although I strongly recommend you attend. 

#### Before coming to mathcamp:

| Date  | Topics | Readings | Assignments |
| :--- | :---   | :--- | :--- |
| Prereqs | Univariate Calculus & Logic | S&B 2-5; Provided notes | Prerequisite assignment to be completed early in the course.|

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
| 3 | Weekly Review |  | **Assignment 2 due** |

#### Week 3 (August 6-August 10)

| Date  | Topics | Readings | Assignments |
| :--- | :---   | :--- | :--- |
| 6 | Multivariate Calculus | S&B 13-15, 30 |  |
| 7 | Multivariate Calculus | S&B 13-15, 30 |  |
| 8 | Miscellaneous Topics | TBA |  |
| 9 | Introduction to Programming | Optional |  |
| 10 | Weekly Review |  | **Assignment 3 due** |

#### Week 4 (August 15)

| 15 | Final Exam | No Notes | **On Campus August 15** |

*S&B ~ Simon & Blume text*


<a name="assign"></a>

### Assignments

Assignments will be posted here at the beginning of the week. I will also post solutions.

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