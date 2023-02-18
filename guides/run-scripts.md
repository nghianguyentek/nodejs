[Home](../README.md) > [Premilinaries](../README.md#preliminaries) > Running Scripts

# Running Scripts

In `Terminal`, type the following command

`node <script_path>`

- `script_path`: the path of the script (i.e., a `.js` file) without the extension part.

For example, we compose a script `sample-run.js` at `C:\Users\nghia.nguyen\Documents\nodejs\samples` with the following content

*[sample-run.js](samples/sample-run.js)*

```js
console.log('Yeah! My sample run!')
```

In the above script, we use `console.log()` function to print the text `Yeah! My sample run` to the console. If you don't know about functions, don't worry about it. We will mention them in the [basic programming concepts](../README.md#basic-programming-concepts) section and more details in the [JavaScript functions guide]() later.

You can run by typing the command 

```sh
node C:\Users\nghia.nguyen\Documents\nodejs\samples\sample-run
```

or

```sh
cd "C:\Users\nghia.nguyen\Documents\nodejs\samples"
node sample-run
```

*Note that we don't need `.js` at the end of the script path.*

[[Back to Preliminaries]](../README.md#preliminaries)