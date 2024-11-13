# Explain the concept of closures in JavaScript. Provide a use-case where closures are beneficial.

Closure is combination of functions bundled together with reference to its surrounding state.when you create a closure you gain access to an outer function scope from an inner function.Closures are automatically created everytime a functin is defined.
Closure is beneficial when we want to create a private variable in js,which can not be changed by any other functions accept from required function

const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

like in example above counter variable is private to add function and can only be accessed within add function.


# Describe the differences between var, let, and const in JavaScript, focusing on hoisting and scope.

var,let and const in js are keyword used to declare any variable , but there is differece between how the variable behave when invoked using each one of these. the key difference lies in terms of scoping,hoisting and redeclaration and reinitialization

hoisting- variable declared using all 3 of these are hoised to the top of there respective scope,but when variable is declared using let and const , they are not accessable in the scope before declaration because they actually lie in temporal dead zone from where we cannot access until  the declaration part comes therefore such variable give reference error when accessed before declaration,but in case of var we can access the variable before declaration, and when used in such case gives undefined value until we encounter assigning part

scope-var is function or global scoped that is any variable decalred usig this can be accessed globally ,or within the function,on the other hand let and cont are block scoped ,that is they can be accessed within the block only outside the scope we cannot access them 


redeclaration or reinitialization-var variables can be redeclared and reassigned,let varaibles can be only reassigned a new value redclaration gives error ,while const variable cannot be reclared or reassigned.


# What are the differences between a programming language and a scripting language? Where does JavaScript fit in?
JavaScript started as scripting language to make web pages interactive.but now with node.js, js can build full applications, acting as both a scripting and a programming language.