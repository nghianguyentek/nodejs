![Test](https://github.com/nghianguyentek/nodejs/actions/workflows/node.js.yml/badge.svg)

# JavaScript and Node.js

Although JavaScript is a general-purpose programming language, we use it primarily in web projects (front-end, back-end, or even both). In this learning project, we will discover JavaScript and Node.js, a JavaScript runtime environment that we use to execute our JavaScript codes.

First, we start with the [preliminaries](#preliminaries) section to prepare the development environment. After that, if you are new to programming, shake yourself in the [basic programming concepts](#basic-programming-concepts) section; skip them otherwise. Now, we can look into the main game, [Playing with JavaScript and Node.js](#playing-with-javascript-and-nodejs). Finally, look at the [Node.js a bit more](#nodejs-a-bit-more) part for some essential topics, such as debugging and testing.

## Preliminaries

Before playing with JavaScript, we need to install [Node.js](install.md) and [Visual Studio Code](visual-studio-code.md#installation), a powerful and free code editor. Then try to [compose a first script](visual-studio-code.md#start-coding) and [execute it](run-scripts.md).

- [Node.js installation guide](install.md)
- [Install Visual Studio Code guide](visual-studio-code.md#installation)
- [Start coding in Visual Studio Code](visual-studio-code.md#start-coding)
- [Run a script](run-scripts.md)

## Basic programming concepts

Programming is all about problems, algorithms, and programs. A **problem** is what we have to solve or want to archive. An **algorithm** is a sequence of steps we need to follow to solve a particular problem. And a **program** is an implementation of an algorithm. In a program, we express one algorithm step by one or more statements. Each **statement** is a complete action.

When a problem is complex, we often use the divide-and-conquer strategy to split it into smaller and smaller parts until we can find the algorithm for each one, and thus we reach the algorithm for the problem. As a result, a complex program will be a collection of smaller programs. And small program can be represented as a **function** that receives inputs, processes them, and returns outputs.

The inputs and outputs of a function are **data**. To differentiate data, we transform data into types and values. Each (data) **type** is a set of (data) **values** having the same characteristics; for example, the natural numbers set is a type, and we can say `NaturalNumber` and `N` is its name and identifier, respectively. Of course, we prefer a (common or general) **type name** rather than a (scientific) **type identifier** to identify a type.

**Data type** is a type and possible **operations** we can apply to its members; for example, natural numbers set is a data type, and we can operate additions, subtractions, etc. 

If a data type is too generic, we can extend it (the **base type**) to get more specific data types (i.e., **subtypes**); for example, a set containing all numbers is a base type of all other numeric types (e.g., real numbers, natural numbers, etc.). In general, **values of a subtype are also members of its ancestors**, and the subtypes **inherit all operations of their ancestors**; for example, suppose A data type has an opA operation, B is a subtype of A and has its opB operation. B will have the opA operation also, and all B values are A members. If a C data type inherits from B, it will have opA and opB operations, and every value of it is a member of B and A.

In programming, as in maths, we use a **variable** to represent a value. Like type, we use a **variable name** to identify a variable. Before using variables, we need to declare them (i.e., **variable declaration**). After declared, we can assign value (i.e., **variable assignment**) to it and reassign it later. If we don't want to reassign the value of a variable (after the first assignment), we declare it as a **constant**.

## Playing with JavaScript and Node.js

## Node.js a bit more

- [Debugging](debug.md)
- [Packages and npm](npm.md)
- [Testing](test.md)