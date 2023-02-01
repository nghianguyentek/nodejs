# Packages and npm (Node.js Package Manager)

## What is a Node.js package?

It's a directory containing a `package.json` file and is considered a Node.js project. The `package.json` file contains package (project) information, such as package name, package version, main entry point, dependent packages (aka dependencies), and test scripts.

*Sample package.json*
```json
{
    "name": "vn_kihon_http",
    "version": "0.0.0",
    "license": "MIT",
    "repository": {
        "type": "git",
        "url": "https://github.com/nghianguyentek/nodejs.git"        
    },
    "scripts": {
        "test": "jest"
    }
    "dependencies": {
    },
    "devDependencies": {
        "jest": "^29.4.1"
    }
}
```

## What is npm?

npm is the default package manager for Node.js. Node.js includes it, so we could use it (the `npm` command) after installing Node.js.

## What does npm use for?

- Download (install) dependencies
- Upload our packages to share with Node.js outsource community

## Install dependencies

### Install a particular dependency

`npm install [-D] package_name[@package_version]`

- `-D`: development dependency only (non-production).
- `package_name`: dependent package name. For example, `jest`.
- `@package_version`: dependent package version if not specified `@latest` is used. For example, `@29.4`.

After a successful installation, the installed package will be automatically added to the `dependencies` or `devDependencies` section of the `package.json` file.

### Install all specified dependencies in the `package.json` file

1. Add dependent packages into the `dependencies` section in the `package.json` file.
2. Run `npm install`