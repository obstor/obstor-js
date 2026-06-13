# For maintainers only
Development of Obstor JS SDK require nodejs14+ and [npm7+](https://www.npmjs.org/).

## Responsibilities
Go through [Maintainer Responsibility Guide](https://gist.github.com/abperiasamy/f4d9b31d3186bbd26522).

## Setup your obstor-js Github Repository
Clone [obstor-js](https://github.com/obstor/obstor-js/) source repository locally.
```sh
$ git clone git@github.com:obstor/obstor-js
$ cd obstor-js
```

### Install deps
```shell
$ npm install
```

### Testing
```shell
$ npm test
```

## Publishing new release
Edit `package.json` version and all other files to the latest version as shown below.
```sh
$ git grep 3.2.0 | cut -f1 -d: | xargs sed s/3.2.0/3.2.1/g -i
$ grep version package.json
  "version": "3.2.1",
$ git commit -a -m "Bump to 3.2.1 release"
```

### Publish to NPM
Login to your npm account.
```sh
$ npm login
...
Logged in as obstor on https://registry.npmjs.org/.
```

Build for release
```sh
$ npm run build
```

Publish the new release to npm repository.
```
$ npm publish
```

### Tag
Tag and sign your release commit, additionally this step requires you to have access to Obstor's trusted private key.
```
$ export GNUPGHOME=/media/${USER}/obstor/trusted
$ git tag -s 3.2.1
$ git push
$ git push --tags
```

### Announce
Announce new release by adding release notes at https://github.com/obstor/obstor-js/releases from `trusted@obstor.net` account. Release notes requires two sections `highlights` and `changelog`. Highlights is a bulleted list of salient features in this release and Changelog contains list of all commits since the last release.

To generate `changelog`
```sh
git log --no-color --pretty=format:'-%d %s (%cr) <%an>' <last_release_tag>..<latest_release_tag>
```
