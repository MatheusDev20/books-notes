(* Pairs *)

(* Syntax *)

val pair = (e1, e2)
(* e1 and e2 are separated evaluated to v1 and v2 who compoudn the pair (v1, v2) *)

(* Type checking *)
(* if e1 have type t1 and e2 have type t2 the final Pair will have type (t1 * t2) -> New type *)

fun swap(pr: int * bool) = 
    (#2 pr, #1pr)

fun sum_two_pairs(pr1: int * int, pr2: int * int) =
    (#1 pr1) +

