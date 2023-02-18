# Debugging in Node.js

## Using IDE (Recommended)

- [Debugging Node.js in Visual Studio Code](visual-studio-code.md#nodejs-debugging)

## Using CLI

`node inspect script_path`

- `n`: go to next statement
- `p expression`: evaluate and print a particular `expression`
- `sb([module_name], [line_number])`: set a breakpoint. If neither `module_name` and `line_number` are specified, the current line is used.
- `.exit`: to terminate the execution