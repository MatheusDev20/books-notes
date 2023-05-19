(define (<name> <formal parameters>) <body>) # General Form of a procedure definition

(define (square x ) ( * x x)) # compound procedure

(square ((+ 2 5 ))) -> 49
(square(3)) -> 9

(define (sum-squares x y)( + (square x) (square y)))
(sum-squares 3 5) -> 34

(define (f a ) (sum-squares ( + a 1) (* a 2)))


f( 5 ) proccess of evaluation -> applicative-order evaluation
(sum-of-squares (+ 5 1) (* 5 2))
(+ (square 6) (square 10))
(+ (* 6 6) (* 10 10))
(+ 36 100)
136

f( 5 ) proccess of evaluation -> normal-order evaluation
(sum-of-squares (+ 5 1) (* 5 2))
(+    (square (+ 5 1))      (square (* 5 2))  )
(+    (* (+ 5 1) (+ 5 1))   (* (* 5 2) (* 5 2)))
(+         (* 6 6)             (* 10 10))
(+           36                   100)
136