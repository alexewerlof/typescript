# Introduction

About a year ago I wrote about [when to use TypeScript](https://medium.freecodecamp.com/when-should-i-use-typescript-311cb5fe801b).
Today I'm releasing a boilerplate for Node applications. The main use case is a library that is going to be published as an NPM module
with documentation on github.

This is a typescript boilerplate project that supports:

* visual studio code + node debugging in IDE
* tslint
* mocha / chai tests
* jsdoc and HTML document generation
* Clean JS output that's ready to use in Node projects (using `tslib`)
* TS type definition files that's ready to use in TS projects
* Pre-commit task to keep the documents up to date

# How to use

```
git clone git@github.com:userpixel/typescript.git
```

Then modify the files as you wish.

# What is where?

* `src/` Write your TypeScript files here. It can have sub directories if you want.
Each file has its own test next to it named `FILENAME.spec.ts` or `FILENAME.test.ts`.
* `.vscode` Your Visual Studio Code configurations. You can tweak them if you want but the main part is the `tasks.json` which defines the `compile` build task as well as `test` and `document`.

## Auto generated dirs

The following directories are auto generated and shouldn't be changed manually:

* `build/` the Javascript version of the TypeScript files. They contain documentation and are cleanly compiled so they are readable.
* `docs` HTML version if your JSDoc annotations from the code
* `test` Javascript test files (all files named `FILENAME.spec.ts` and `FILENAME.tests.ts` end up here after compilation)
* `tsdecl` TypeScript declaration files that can be used when you release this module as a library and your user wants to use it their in TypeScript projects.

# License

It's MIT so you can use the code for proprietary projects or extend it without contributing back.

# Contributing

Remember the use case of this project. It's not going to be used for React and front end code. Just node and ideally a published lib to npm (and github).

1. Discuss issues and ideas at https://github.com/userpixel/typescript/issues
2. Make PRs
