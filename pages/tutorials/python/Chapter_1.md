---
layout: page
title: Chapter 1
sidebar_link: false
permalink: /tutorials/python/chapter_1

---
## Expressions

In Python, you can assign variables with the "=" sign. For example, if you want to assign the number 10 to the variable x, you would type the following into your interpreter:

```python
x=5
```

This variable is now stored in memory, and can be called.


```python
x
```

<font color='red'>Out:</font>
<p class="message">
  5
</p>




You can also include this variable in other expressions. 


```python
x+6
```
<font color='red'>Out:</font>
<p class="message">
  11
</p>


Notice that the expression above has both values (x and 5) and an operator (+). Expressions reduce down to a single value (in this case 11). The value from an expression can also be assigned to a variable.


```python
y = x+6
y
```

<font color='red'>Out:</font>
<p class="message">
  11
</p>




## Variable Naming Convention

Variable names in python must follow the following rules:
1. Variables can only contain letters, numbers, and underscores (_). 
2. Variables cannot start with a number.

The following are appropriate variable names:
- v
- V
- myvariable
- my_variable
- Clown
- CLOWN

The following are not appropriate variable names:
- 1
- 5variable
- my variable
- my.variable

The name of a variable is what's called an identifier. Python identifiers are also used functions, classes, modules, etc. They also follow the same rules listed above. Identifiers are case senstive, meaning if we can define different values to clown and CLOWN as seen below. 


```python
clown = 10
CLOWN = 15

print("clown: "+str(clown))
print("CLOWN: "+str(CLOWN))
```
<font color='red'>Out:</font>
<p class="message">
  clown: 10
  <br>CLOWN: 15
</p>
    

In Python, there are also reserved words. These are words that cannot be used as identifiers:

## Intro to Data Structures

In this section, I will introduce three basic data structures: integers, floats, and strings. More data structues will be introduced in the next chapter.

### Integers