// Chatper 2 - Basic Types

// Type Inference by compiler
let num = 3;

// Type annotation by developer
let num2: number = 3

type Doubt = {
  id: number;
  question: string;
}
// Because of the Inferred type and the structural type system that typescriot has i can pass doubt to a function who expects a Doubt type
const createDoubt = () => ({id: 1, question: 'TypeScript is confusing'})
const doubt = createDoubt()

const expectDoubt = (doubt: Doubt) => 'I Will answer the question: ' + doubt.question

// Typescrpt do not complain, even though i do not directy annotate the type doubt as return of the "createDoubt function" (Structural type system comes in handy)
expectDoubt(doubt)

// Structural Type Systems x Nominal Type Systems Read: https://medium.com/@thejameskyle/type-systems-structural-vs-nominal-typing-explained-56511dd969f4

// Any x Unknown

type User = {
  id: string;
  mail: string
}

const iterateOver = (user: User) => {
  for(let key in user) {
    /* console.log(`${key}: ${user[key]}`)  Useful to use any to Bypass the compiler, since it doest generate a runtime error */
    console.log(`${key}: ${user[key as keyof User]}`)  // Type assertion to "please" the compiler
  }
}

/* So basically, Any "turns off" the type checking, 
  making the code unsafe and with some pitfalls to runtime errors,
  but also can be useful to migrate large codebases to typescript
  and deal with libraries that are not into the typescript train yet */

// Unknwon

const me: unknown = 'Phoenix'
// @ts-ignore
const overlap: string = me; // Type 'unknown' is not assignable to type 'string'

// Unknow wont let you do anything with it, its not like "any",  you need to check the type first during runtime.

function doSomethingUnknwon(value: unknown) {
  if (typeof value === "string") {
    // value: string
    console.log("It's a string", value.toUpperCase());
  } else if (typeof value === "number") {
    // value: number
    console.log("it's a number", value * 2);
  }
}
// Great for work with values that can assume diferent types.


// Compound Types - Working with generic object type

let obj: {}
let obj2: Object

obj = 2;
obj2 = 'some_string'
/* Both is type Checked, since {} and Object allow same values, roughly everything but null and undefined */

// @ts-ignore
obj = undefined // That does not type check

/* The interface uppercase "Object" has some pre definted methods like toString, valueOf, hasOwnProperty, etc, and can cause confusion
    if some object override this methods.
*/

// That does not that check since the compiler is expecting the toString method
let obj3: Object = {
  // @ts-ignore
  toString() {
    return true
  }
}
/* does not type check */

/* the more recomended type is "object" with allows every compound type but not primitives */

let obj4: object;
  // @ts-ignore
obj4 = 32; // Error
  // @ts-ignore
obj4 = "Hello"; // Error
  // @ts-ignore
obj4 = true; // Error
obj4 = () => { console.log("Hello") };
  // @ts-ignore
obj4 = undefined;  // Error
  // @ts-ignore
obj4 = null; // Error
obj4 = { name: "Stefan", age: 40 };
obj4 = [];
obj4 = /.*/;


