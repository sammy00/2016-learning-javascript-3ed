# Chapter 11. Exceptions and Error Handling

**Exception handling** is a mechanism to deal with errors in a controlled fashion

## The `Error` Object

- constructor

```javascript
Error([description])
```

## Exception Handling with `try` and `catch`

- To safeguard against unanticipated errors, we can wrap our code in a `try...catch` statement (demo by `try-catch.js`)
- Control shifts to the `catch` block as soon as an error occurs

## Throwing Errors

- Values to throw can be any type, such as a number or a string
- It's conventional to throw an instance of `Error`

## Exception Handling and the Call Stack

- **Call stack**: The nesting of functions that are not done
- The error propagates up the call stack until it's caught
- Errors can be caught at any level in the call stack
- Uncaught/Unhandled exceptions are errors uncaught, and cause the program to crash if not tackled

> In most implementations of JavaScript, instances of `Error` contain a property `stack`, which is a string representation of the stack (it is a nonstandard feature of JavaScript, but it is available in most environments, demo as `call-stack.js`)

## `try...catch...finally`

The `finally` block gets called whether or not there is an error (demo as `finally.js`)

## Let Exceptions Be Exceptional

- **Exception handling comes at a cost of performance**
- It's best to leave exceptions as a last line of defense
