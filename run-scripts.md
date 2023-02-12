# Running Scripts

In Terminal, type the following command

`node <script_path>`

- `script_path`: the path of the script (i.e., a `.js` file)

## Running flow

### A standalone script

*script01.js*

```js
const a = 1,
    b = 2

function add(x, y) {
    return x + y
}

console.log(add(a, b))
```

*Terminal*

```sh
node script01
```

*Abstract execution flow*

```mermaid
flowchart TD
  subgraph add ["add(x, y)"]
    direction LR
    61("6.1. x")--->62("6.2 x = 1")--->63("6.3. y")--->64("6.4. y = 2")--->65("6.5. const tmp")--->66("6.6. tmp = x + y")--->67("6.7. return tmp")
  end
  
  1("1. const a")--->2("2. a = 1")--->3("3. const b")--->4("4. b = 2")--->5("5. const tmp")--->6("6. tmp = add(x, y)")
  6--->add
  add-->6
  6-->7("7. console.log(tmp)")
```


