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
The idea of functions, create procedures and assign them a symbols, with formal paramaeters and a body, that yield the value when the procedure is evaluated.
```
    (define (square x ) ( * x x)) # compound procedure
```
Procedure application via => Substitution Model -> Idea of replace the formal parameters of a procedure in the body and evaluate this body.
The process will b applied at each inner compound procedure in the body of outter procedure.


### Application order (Eager evaluation) vs Normal Order (Lazy Evaluation)

Eager evaluation, the interpreter first evaluate the arguments of a procedure, and apply the operator (with can be other procedure)
```
    (+ (square 6) (square 10)) The arguments of the leftmost operator "+" are primarily evaluated.

    (+ (* 6 6) (* 10 10))
```
In contrast, lazy evaluation only evaluate the arguments when they are actually needed.


## 1.1.6 Conditional Expressions

(if ⟨predicate⟩ ⟨consequent⟩ ⟨alternative⟩)
The interpreter starts evaluating the predicate witch can be true or false, based on that it will evaluate the consequent or the alternative
```
    (if (> 3 5) 0 5) # it will always return the alternative cause the predicate always evaluate to false
```





