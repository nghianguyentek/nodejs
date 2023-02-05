# git Quick Guides

## Create a new (remote) branch

1. Create a new branch in local: `git checkout -b new-branch-name [source-branch-name]`

If `source-branch-name` was not specified, the current branch is used.

2. Push new branch to our remote repository: `git push -u origin new-branch-name`

#### Example

Create a new `dev` branch from the `master` branch and push it to the remote repository

```shell
git checkout -b dev master
git push -u origin dev
```