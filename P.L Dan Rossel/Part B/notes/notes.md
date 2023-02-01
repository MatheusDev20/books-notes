# Parentes Matter.
Using the parenteses syntax and the prefix notation is so much easier to parse the program ( the characters ) to a three data structure

(define cube (lambda (x) (* x x x) ) - Like this expression turn into to a three where "x" and "x x x" are atoms or "leaves" of this three.


(define (fact n) (if ( = n 0) 1 ( * n (fact ( - n 1 )))))

# Dyamic Typing
The language does not have a Type checker, so errors will happen in runtine, when you try to use some datastructure of function in a wrong way
Like (car "hi"), there is not such thing as (car "hi") because car applys only to lists.

As i know, languages like ML would type check this before it runs, not the case in Racket though.

It is good in some sense, because allow us to do a lot of things, and use the language data structure more freely, but it can lead to runtime errors.


# Cond prefix Racket.
Syntact Sugar to if and elses
(cond [exp1 eval1]
      [exp2 eval2]
)

only if the expression is true (#t) in racket, the eval part will be evaluated

