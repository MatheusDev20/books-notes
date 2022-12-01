datatype mytype = TwoInts of int * int | Str of string | Pizza
(* Here mytype is oneOf kind of type, who define three CONSTRUCTORS to build the type *)

val a = Str "hi"
val b = Str
val c = Pizza
val d = TwoInts(1+2,2+3)
val e = a

(* Evalutes to. *)
(* 
val a = Str "hi" : mytype
val b = fn : string -> mytype
val c = Pizza : mytype
val d = TwoInts (3,5) : mytype
val e = Str "hi" : mytype
 *)

