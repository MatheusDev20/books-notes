
#lang racket
(provide (all-defined-out)) ;; so we can put tests in a second file

;1 
(define (sequence low high stride)
  (if (> low high)
      (list)
      (cons low (sequence (+ low stride) high stride))))


;2
; w/o racket function "map"
(define (string-append-mad xs suffix)
  (if (null? xs) 
      0
      (cons (string-append (car xs) suffix) (string-append-mad (cdr xs) suffix))))

;with racket map function
(define (string-append-with-map xs suffix)
  (map (lambda (s) (string-append s suffix)) xs))



