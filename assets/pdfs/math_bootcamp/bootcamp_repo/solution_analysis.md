<!--solution_analysis.md-->
<!--
The point of this document will be to find useful ways of connecting basic function
definitions and concepts to equations and level sets as solution spaces, then to 
multiple equations and the linear spaces and how much we can say about them.
-->

# Functions, Equations and Solutions

Consider two nonempty sets $X,Y$ and let $f: X \rightarrow Y$.  Furthermore, let $F(X,Y)$ represent the set of all functions from $X$ to $Y$.
Consider the element $y_0 \in Y$ and the **equation** $f(x) = y_0$.  This equation forms a *statement*, $P(x)$, that is defined over $X$.  For what elements $x \in X$ is the statement true?  The set $\{ x \in X: P(x) \text{ is true}\}$ represents the **solution** to the equation.  The set may be empty, be a *singleton* (only contains one element), or have many elements.

## Level Sets and Solutions

We previously learned about a level set $f^{-1}(y_0) = \{ x \in X: f(x) = y_0 \}$.  This level set is equivalent to $\{ x\in X: P(x) \text{ is true }\}$ and represents the set of solutions to the specific equation $f(x) = y_0$.

**Exercise**: If $f^{-1}(y_0) = \emptyset$, then what does that tell us about the nature of the function $f:X \rightarrow Y$? (Hint: injective? surjective?, bijective?)

**Exercise**: If $\forall y \in Y, f^{-1}(y) \neq \emptyset$ what does this tell us about the nature of $f$? Is it possible for a single $x_0 \in X$ to be a solution for many $y \in Y$?  What would we need to know about the properties of $f$ to answer this question?

**Exercise**: Let $S = \{ f^{-1}(y) : y \in Y \}$ be the collection of all level sets (solution sets) associated with $f(x) = y$. What property or properties does $f$ need to have to ensure that for any $y_0 \in Y$ the solution set $f^{-1}(y_0)$ is a singleton (i.e., the solution is unique).

## Systems of Equations

Suppose that we have now have a list of functions, say $f_i: X \rightarrow Y$ for $i=1,2,3$ from the set $F(X,Y)$.  Then consider three elements $y_1,y_2,y_3 \in Y$ and we form three equations, or statements.
\\[\begin{align}
    f_1(x) = y_1 \\
    f_2(x) = y_2 \\
    f_3(x) = y_3
\end{align}\\]

If we consider all three equations as a set, or system of equations such that we are required to put the same $x \in X$ into all three equations then we can start to think of the entire system itself as a function, but we need to change our specification of which set is mapped into which set.

For example, for each $x \in X$ we plug into the system will will get three elements of $Y$, $(f_1(x),f_2(x),f_3(x))$ (not necessarily distinct).  Well the ordered triple, as you now know, is an element of the cartesian product $Y \times Y \times Y = Y^3$.  So we can think of the entire system of functions as mapping elements $x \in X$ into $Y^3$.  Let $G:X \rightarrow Y^3$ represent the system of functions created by $f_1,f_2,f_3$.  Now we can combine the three equations into a single new composite equation.
\\[
    G(x) = (y_1,y_2,y_3) = \mathbf{y}
\\]
How do we denote the solution to the system of equations?  $G^{-1}(\mathbf{y}) = \{ x \in X: G(x) = \mathbf{y}=(y_1,y_2,y_3)\}$.