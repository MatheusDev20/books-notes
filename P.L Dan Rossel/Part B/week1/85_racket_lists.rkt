; Programming Languages, Dan Grossman
; Section 5: Racket Lists

; always make this the first (non-comment, non-blank) line of your file
#lang racket

; not needed here, but a workaround so we could write tests in a second file
; see getting-started-with-Racket instructions for more explanationfile:///home/matheus/projects/haf-frontend/assets
file:///home/matheus/projects/haf-frontend/node_modules
file:///home/matheus/projects/haf-frontend/src
file:///home/matheus/projects/haf-frontend/index.html
file:///home/matheus/projects/haf-frontend/package.json
file:///home/matheus/projects/haf-frontend/package-lock.json
file:///home/matheus/projects/haf-frontend/Readme.md
file:///home/matheus/projects/haf-frontend/Todo.txt
file:///home/matheus/projects/haf-frontend/tsconfig.json
file:///home/matheus/projects/haf-frontend/tsconfig.node.json
file:///home/matheus/projects/haf-frontend/vercel.json
file:///home/matheus/projects/haf-frontend/vite.config.ts
file:///home/matheus/projects/haf-frontend/yarn.lock
file:///home/matheus/projects/haf-frontend/yarn-error.log

(provide (all-defined-out))
 
; list processing: null, cons, null?, car, cdr
; we won't use pattern-matching in Racket

(define (sum xs)
  (if (null? xs)
      0
      (+ (car xs) (sum (cdr xs)))))

(define (my-append xs ys) ; same as append already provided
  (if (null? xs)
      ys
      (cons (car xs) (my-append (cdr xs) ys))))

(define (my-map f xs) ; same as map already provided
  (if (null? xs)
      null
      (cons (f (car xs)) (my-map f (cdr xs)))))

(define foo (my-map (lambda (x) (+ x 1)) (cons 3 (cons 4 (cons 5 null)))))

