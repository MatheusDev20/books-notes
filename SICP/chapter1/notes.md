Lisp is actually an Acronism for List Processing.

## Prefix notation.

Bring the operator (primitive procedure )on the leftmost side of the expression
Using data, we can combine and build combinations, with arbitrary number of arguments such as
```
    (+ 40 50 30) 
```
The primitive procedure "+" is applied on the 40, 50, 30 arguments, evaluating this expression we receive a value.

Also, its possible to "Nest" operations, passing as a argument another combinations like

```
    (+ (* 40 3) (* 4 5) )
```
And even more complex ones like 

```
    (+ (* 3 (+ (* 2 4) (+ 3 5))) (+ (- 10 7) 6))
```
With pretty printing applied

``` 
    (+ (* 3
        (+ (* 2 4)
            (+ 3 5)))
    (+ (- 10 7)
        6))
```

## Naming and Enviroment
Possibility to abstract procedures and primitive values with names using the define keyword.
*define is special form not a combination*
```
    (define intVal 3)
```
This way, we can associate complexity procedures that perform a lot of computations with name, and we dont have to repeate them.
A complex program, can be build of minor steps (procedures) associates with names.

# Enviroment.
memory, where my program runs, to keep tract of all names associated with the given values.

# Nature of evaluating compound procedures by a intepreter.

This nature, its for definition recursive.
*the evaluation rule is recursive in nature; that is, it includes, as one of its steps, the need to invoke the rule itself*

In some expression like
```
    (+ (- 5 2) (+ 3 5) (* 5 2))
```
the process to evaluate it is recursive, because the interperter has to evaluate the leftmost subexpress like * 5 2 and evaluates the other expressions.
we can represent this process in a figure of a tree.

## 1.1.4 Compound procedures.






