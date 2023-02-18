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

As you may know, to create a program, we first write codes in text files (i.e., ***source codes***), and then use a ***compiler*** to ***compile*** them to ***binary files*** containing ***runnable machine codes*** that computers understand. However, these machine codes tie in the ***instruction sets*** of the CPU (Central Processing Unit) and even the OS (Operating System) of the computer we used to compile our source codes. That means the compiled executable files can run on similar systems only (***platform-specific***). Consequently, we must compile our program source codes on different platforms (e.g., x32, x64, Windows, Linux, etc.). Sometimes, worse, we must update our source code to make our programs run for a specific platform. Therefore, instead of compiling directly to machine codes, the compiler of some programming languages may generate ***bytecode*** files and use platform-specific ***interpreters*** to ***interpret*** them when executing the program to achieve ***portability***.

From a programmer's view, programming is all about problems, algorithms, and programs. A ***problem*** is what we want to solve or archive. An ***algorithm*** is a sequence of steps we need to follow to solve a particular problem. And a ***program*** is an implementation of an algorithm by using a particular ***programming language***. In a program, we express one algorithm step by one or more ***statements***, which each is a complete action.

When a problem is complex, we often use the ***divide-and-conquer*** strategy to split it into smaller and smaller parts until we can find the algorithm for each one, and thus we reach the algorithm for the problem. As a result, a complex program will be a collection of smaller programs. And small program can be represented as a ***function*** that receives ***inputs***, processes them, and returns ***outputs***.

The inputs and outputs of a function are ***data***. To differentiate data, we transform data into types and values. Each (data) ***type*** is a set of (data) ***values*** having the same characteristics; for example, the natural numbers set is a type, and we can say `NaturalNumber` and `N` is its name and identifier, respectively. Of course, we prefer a (common or general) ***type name*** rather than a (scientific) ***type identifier*** to identify a type.

***Data type*** is a type and possible ***operations*** we can apply to its members; for example, natural numbers set is a data type, and we can operate additions, subtractions, etc. 

If a data type is too generic, we can extend it (the ***base type***) to get more specific data types (i.e., ***subtypes***); for example, a set containing all numbers is a base type of all other numeric types (e.g., real numbers, natural numbers, etc.). In general, values of a subtype are also ***members of*** its ancestors, and the subtypes ***inherit*** all operations of their ancestors; for example, suppose A data type has an opA operation, B is a subtype of A and has its opB operation. B will have the opA operation also, and all B values are A members. If a C data type inherits from B, it will have opA and opB operations, and every value of it is a member of B and A.

In programming, as in maths, we use a ***variable*** to represent a value. Like type, we use a ***variable name*** to identify a variable. Before using variables, we need to declare them (i.e., ***variable declaration***). After declared, we can assign value (i.e., ***variable assignment***) to it and reassign it later. When assigning variables in source codes, we often use some notations to represent values of simple types, such as numbers or texts, called ***literals***; for example, `123` and `12.3` are numeric literals, while `"123"` and `"abc"` are textual literals. In cases of we don't want to reassign the value of a variable (after the first assignment), we declare it as a ***constant***.

## Playing with JavaScript and Node.js

The previous section gives us some [basic programming concepts](#basic-programming-concepts). Now, we will see how they are in JavaScript and Node.js. First, we look at [primitive data types](data-type/primitive-types.md) and supported operations on each of them. Then we will hand on with [variables and constants](). After that, we try to be familiar with [functions]() and [flow control structures]() before improving our programs with [modules]() and [scopes](). And finally, we will work hard with [complex data types]() to reach more realistic programs.

- [Primitive data types guide](data-type/primitive-types.md)
- [Variables and constants guide]()
- [Functions guide]()
- [Flow control structures guide]()
- [Modules guide]()
- [Scopes guide]()
- [Complex data types guide]()

## Node.js a bit more

- [Debugging]()
- [Packages and npm]()
- [Testing]()