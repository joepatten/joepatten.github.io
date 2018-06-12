---
layout: page
title: Assignments
sidebar_link: False
permalink: /teaching/math_bootcamp/assignments
---


| Description  | Due Date | Link |  
| :--- | :---   | ---: |{% for assignment in site.data.math_bootcamp.assignments %}
  | {{assignment.descrip}} | {{assignment.due}} | {% if assignment.upload != 'none' %} [{{assignment.name}}]({{ url }}/assets/pdfs/math_bootcamp/assignments/{{assignment.link}})  {% endif %}  {% endfor %}

  Note: The material in assignment 0 is fair game for the final exam. You should complete these problems to refresh old topics and learn some new ones. However, you do not need to turn this assignment in to me. I will assume your understanding and familiarity with the material during the mathcamp, so please complete your study no later than July 23rd