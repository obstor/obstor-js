### Setup your obstor-js Github Repository
Fork [obstor-js upstream](https://github.com/obstor/obstor-js/fork) source repository to your own personal repository.

```bash
$ git clone https://github.com/$USER_ID/obstor-js
$ cd obstor-js
```

### Install npm dependencies

```bash
$ npm add -g pnpm
$ pnpm install
```

### Format code (with prettier)

```shell
$ pnpm format
```

### Check Code Style

```shell
$ pnpm lint
```

### Tests

```shell
$ pnpm test
```

###  Developer Guidelines

``obstor-js`` welcomes your contribution. To make the process as seamless as possible, we ask for the following:

* Go ahead and fork the project and make your changes. We encourage pull requests to discuss code changes.
    - Fork it
    - Create your feature branch (git checkout -b my-new-feature)
    - Commit your changes (git commit -am 'Add some feature')
    - Push to the branch (git push origin my-new-feature)
    - Create new Pull Request

### Style Guide

We are currently migrating from JavaScript to TypeScript, so **All Source should be written in [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)**

That means only use nodejs `require` in js config file like `.eslintrc.js`

You should always fully specify your import path extension,
which means you should write `import {} from "errors.ts"` for `errors.ts` file, do not write `import {} from "errors.js"`.
